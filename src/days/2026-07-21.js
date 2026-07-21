export default {
  id: "2026-07-21",
  title: "Mardi 21 · Rome antique & Ghetto",
  subtitle: "Départ 07:25 · Colisée 08:45",
  summary: [
    ["≈ 7 km", "marche"],
    ["≈ 1 h 45", "hors visites"],
    ["08:45", "entrée Colisée"]
  ],
  alert: "☀️ Chaleur forte : Forum très exposé. Remplissez les gourdes avant d’entrer.",
  points: {
    home: { coords:[41.889611,12.473381], number:1, color:"#7c3aed", title:"Appartement", text:"11 Vicolo di Sant’Agata" },
    colosseum: { coords:[41.890210,12.492231], number:2, color:"#dc2626", title:"Colisée", text:"Entrée réservée à 08:45" },
    viaSacra: { coords:[41.890244,12.490213], number:3, color:"#2563eb", title:"Accès Forum / Via Sacra", text:"Suivre la signalétique officielle" },
    forumExit: { coords:[41.892889,12.487278], number:4, color:"#ea580c", title:"Sortie visée", text:"Largo della Salara Vecchia" },
    portico: { coords:[41.892470,12.478880], number:5, color:"#16a34a", title:"Portique d’Octavie", text:"Pause dans le Ghetto" },
    museum: { coords:[41.892047,12.478325], number:6, color:"#0f766e", title:"Musée juif & Grande Synagogue", text:"Via Catalana" }
  },
  forumArea: [
    [41.89410,12.48455],[41.89365,12.49190],[41.88930,12.49320],[41.88685,12.48945],[41.88845,12.48405]
  ],
  internalPath: [
    [41.890244,12.490213],[41.89105,12.48895],[41.89065,12.48660],[41.88875,12.48720],
    [41.88955,12.48515],[41.89135,12.48555],[41.892889,12.487278]
  ],
  routes: {
    "home-col": { color:"#7c3aed", points:[[41.889611,12.473381],[41.88975,12.47475],[41.89025,12.47615],[41.89072,12.47724],[41.89118,12.47875],[41.89075,12.48065],[41.88962,12.48215],[41.88775,12.48310],[41.88635,12.48645],[41.88715,12.48905],[41.88960,12.49085],[41.890210,12.492231]] },
    "col-forum": { color:"#2563eb", points:[[41.890210,12.492231],[41.89015,12.49150],[41.890244,12.490213]] },
    "forum-ghetto": { color:"#ea580c", points:[[41.892889,12.487278],[41.89318,12.48520],[41.89305,12.48315],[41.89220,12.48115],[41.89205,12.48010],[41.892470,12.478880]] },
    "ghetto-museum": { color:"#ea580c", points:[[41.892470,12.478880],[41.89230,12.47855],[41.892047,12.478325]] },
    "museum-home": { color:"#0f766e", points:[[41.892047,12.478325],[41.89150,12.47875],[41.89072,12.47724],[41.89010,12.47645],[41.88965,12.47545],[41.889611,12.473381]] }
  },
  steps: [
    { time:"07:25", title:"Appartement → Colisée", meta:"≈ 3,2 km · 40–45 min.", color:"#7c3aed", route:"home-col", maps:"https://www.google.com/maps/dir/?api=1&origin=11%20Vicolo%20di%20Sant%27Agata%2C%20Roma&destination=Piazza%20del%20Colosseo%2C%20Roma&travelmode=walking" },
    { time:"08:45", title:"Visite du Colisée", meta:"Arriver 20–30 min avant.", color:"#dc2626", point:"colosseum" },
    { time:"10:00", title:"Colisée → Forum / Via Sacra", meta:"Court transfert extérieur.", color:"#2563eb", route:"col-forum", maps:"https://www.google.com/maps/dir/?api=1&origin=Piazza%20del%20Colosseo%2C%20Roma&destination=Via%20Sacra%2C%20Roma&travelmode=walking" },
    { time:"10:15", title:"Forum romain & Palatin", meta:"Parcours interne indicatif jusqu’à 12:30.", color:"#2563eb", area:true },
    { time:"12:30", title:"Forum → Ghetto", meta:"≈ 1 km · 15–20 min.", color:"#ea580c", route:"forum-ghetto", maps:"https://www.google.com/maps/dir/?api=1&origin=Largo%20della%20Salara%20Vecchia%2C%20Roma&destination=Portico%20d%27Ottavia%2C%20Roma&travelmode=walking" },
    { time:"13:00", title:"Pause sandwichs", meta:"Dans le Ghetto, à l’ombre.", color:"#16a34a", point:"portico" },
    { time:"13:20", title:"Ghetto → Musée juif", meta:"Quelques minutes à pied.", color:"#ea580c", route:"ghetto-museum", maps:"https://www.google.com/maps/dir/?api=1&origin=Portico%20d%27Ottavia%2C%20Roma&destination=Museo%20Ebraico%20di%20Roma%2C%20Via%20Catalana%2C%20Roma&travelmode=walking" },
    { time:"13:30", title:"Musée juif & Grande Synagogue", meta:"Jusqu’à environ 15:00–15:15.", color:"#0f766e", point:"museum" },
    { time:"15:15", title:"Musée → appartement", meta:"≈ 1,5 km · 20 min.", color:"#0f766e", route:"museum-home", maps:"https://www.google.com/maps/dir/?api=1&origin=Museo%20Ebraico%20di%20Roma%2C%20Via%20Catalana%2C%20Roma&destination=11%20Vicolo%20di%20Sant%27Agata%2C%20Roma&travelmode=walking" }
  ]
};
