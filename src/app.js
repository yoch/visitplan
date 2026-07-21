import { getSelectedDay } from "./days/index.js";

const day = getSelectedDay();

async function loadLeaflet() {
  const cdns = [
    ["https://unpkg.com/leaflet@1.9.4/dist/leaflet.css","https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"],
    ["https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css","https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"],
    ["https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css","https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"]
  ];
  for (const [css, js] of cdns) {
    try {
      await Promise.all([loadCss(css), loadScript(js)]);
      if (window.L) return window.L;
    } catch {}
  }
  throw new Error("Leaflet unavailable");
}
function loadCss(href){return new Promise((ok,ko)=>{const e=document.createElement("link");e.rel="stylesheet";e.href=href;e.onload=ok;e.onerror=ko;document.head.appendChild(e)})}
function loadScript(src){return new Promise((ok,ko)=>{const e=document.createElement("script");e.src=src;e.onload=ok;e.onerror=ko;document.head.appendChild(e)})}

function renderPanel() {
  document.getElementById("day-title").textContent = day.title;
  document.getElementById("day-subtitle").textContent = day.subtitle;
  const summary = day.summary.map(([v,l])=>`<div class="sum"><b>${v}</b><span>${l}</span></div>`).join("");
  const steps = day.steps.map((s,i)=>`
    <article class="step" style="--route:${s.color}" data-index="${i}">
      <div class="time">${s.time}</div>
      <div class="main">
        <h3>${s.title}</h3>
        <div class="meta">${s.meta}</div>
        <div class="actions">
          ${s.maps ? `<a class="action primary" target="_blank" rel="noopener" href="${s.maps}">Google Maps</a>` : ""}
          <button class="action secondary" data-focus="${i}">Afficher</button>
        </div>
      </div>
    </article>`).join("");
  document.getElementById("content").innerHTML = `
    <div class="summary">${summary}</div>
    <div class="alert">${day.alert}</div>
    <div class="steps">${steps}</div>`;
}

function icon(L,n,color){
  return L.divIcon({className:"",html:`<div class="pin" style="background:${color}"><span>${n}</span></div>`,iconSize:[34,34],iconAnchor:[17,31],popupAnchor:[0,-28]});
}

function setupSheet(map){
  const sheet=document.getElementById("sheet"),handle=document.getElementById("handle"),toggle=document.getElementById("toggle");
  let state="peek",startY=0,startH=0,moving=false;
  const heights=()=>({peek:180,half:Math.round(innerHeight*.5),full:Math.round(innerHeight*.82)});
  const setSheet=next=>{if(innerWidth>=800)return;state=next;document.documentElement.style.setProperty("--sheet-h",heights()[state]+"px");toggle.textContent=state==="full"?"⌄":"⌃";setTimeout(()=>map.invalidateSize(),230)};
  const cycle=()=>setSheet(state==="peek"?"half":state==="half"?"full":"peek");
  handle.onclick=cycle;toggle.onclick=cycle;
  handle.onpointerdown=e=>{moving=true;startY=e.clientY;startH=sheet.getBoundingClientRect().height;sheet.classList.add("dragging");handle.setPointerCapture(e.pointerId)};
  handle.onpointermove=e=>{if(moving)document.documentElement.style.setProperty("--sheet-h",Math.max(96,Math.min(innerHeight*.88,startH+startY-e.clientY))+"px")};
  handle.onpointerup=()=>{if(!moving)return;moving=false;sheet.classList.remove("dragging");const h=sheet.getBoundingClientRect().height,hs=heights();setSheet(Object.entries(hs).sort((a,b)=>Math.abs(a[1]-h)-Math.abs(b[1]-h))[0][0])};
}

async function main(){
  renderPanel();
  const L = await loadLeaflet();
  const map=L.map("map",{zoomControl:false,touchZoom:true,dragging:true,inertia:true,zoomAnimation:true,preferCanvas:true}).setView([41.8911,12.4829],15);

  const osm=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{subdomains:"abc",maxZoom:19,keepBuffer:6,updateWhenIdle:false,updateWhenZooming:false,attribution:"&copy; OpenStreetMap contributors"}).addTo(map);
  let errors=0;
  osm.on("tileerror",()=>{if(++errors===4){map.removeLayer(osm);L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{subdomains:"abcd",maxZoom:20,keepBuffer:6,attribution:"&copy; OpenStreetMap contributors &copy; CARTO"}).addTo(map).bringToBack()}});
  osm.on("load",()=>document.getElementById("status-text").textContent="Carte prête");

  const markers={};
  for(const [id,p] of Object.entries(day.points)){
    markers[id]=L.marker(p.coords,{icon:icon(L,p.number,p.color)}).addTo(map).bindPopup(`<b>${p.title}</b><br>${p.text}`);
  }

  const routeLayers={};
  for(const [id,r] of Object.entries(day.routes)){
    L.polyline(r.points,{color:"#fff",weight:9,opacity:.9,lineCap:"round",lineJoin:"round"}).addTo(map);
    routeLayers[id]=L.polyline(r.points,{color:r.color,weight:5,opacity:.96,lineCap:"round",lineJoin:"round"}).addTo(map);
  }

  const forum=L.polygon(day.forumArea,{color:"#2563eb",weight:2,dashArray:"7 7",fillColor:"#60a5fa",fillOpacity:.11}).addTo(map);
  L.polyline(day.internalPath,{color:"#2563eb",weight:4,opacity:.72,dashArray:"4 9"}).addTo(map);

  const all=L.latLngBounds(Object.values(day.points).map(p=>p.coords));
  const fit=bounds=>map.fitBounds(bounds,{paddingTopLeft:[innerWidth>=800?430:24,80],paddingBottomRight:[24,(innerWidth<800?document.getElementById("sheet").getBoundingClientRect().height:0)+20],maxZoom:17});

  document.querySelectorAll("[data-focus]").forEach(btn=>btn.onclick=()=>{
    const index=Number(btn.dataset.focus),step=day.steps[index];
    document.querySelectorAll(".step").forEach(x=>x.classList.remove("active"));
    document.querySelector(`[data-index="${index}"]`).classList.add("active");
    if(step.route) fit(routeLayers[step.route].getBounds());
    else if(step.area) fit(forum.getBounds());
    else if(step.point){map.setView(markers[step.point].getLatLng(),17);markers[step.point].openPopup()}
  });

  document.getElementById("fit").onclick=()=>fit(all);
  document.getElementById("locate").onclick=()=>map.locate({setView:true,maxZoom:17,enableHighAccuracy:true});
  map.on("locationfound",e=>L.circleMarker(e.latlng,{radius:8,color:"#fff",weight:3,fillColor:"#2563eb",fillOpacity:1}).addTo(map).bindPopup("Vous êtes ici").openPopup());
  map.on("locationerror",()=>alert("Autorisez la localisation dans les réglages du navigateur."));
  addEventListener("resize",()=>map.invalidateSize());
  setupSheet(map);
  fit(all);
}

main().catch(error=>{
  console.error(error);
  document.getElementById("status-dot").classList.add("warn");
  document.getElementById("status-text").textContent="Erreur";
  alert("Impossible de charger la carte. Vérifiez votre connexion Internet.");
});
