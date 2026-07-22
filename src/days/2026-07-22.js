export default {
  id: "2026-07-22",
  title: "Mercredi 22 · Colisée, Forum puis courses",
  subtitle: "Entrée Colisée 09:45 · Forum/Palatin conservé · retour à Trastevere",
  summary: [
    ["09:45", "entrée Colisée"],
    ["≈ 2 h 45", "Colisée + Forum"],
    ["ensuite", "courses + retour"]
  ],
  alert: "🎧 Parcours resserré mais complet : Colisée, puis Forum romain avec un passage ciblé sur le Palatin. Le billet 24 h standard comprend une entrée au Colisée et une entrée dans la zone Forum-Palatin.",
  points: {
    colosseum: { coords:[41.890210,12.492231], number:1, color:"#dc2626", title:"Colisée", text:"Entrée réservée à 09:45 · niveaux I et II" },
    forumEntry: { coords:[41.890244,12.490213], number:2, color:"#2563eb", title:"Entrée Forum / Arc de Titus", text:"Accès pratique après la sortie du Colisée" },
    forumExit: { coords:[41.892889,12.487278], number:3, color:"#ea580c", title:"Sortie Forum", text:"Largo della Salara Vecchia" },
    home: { coords:[41.88910,12.47075], number:4, color:"#7c3aed", title:"Appartement", text:"Via di San Francesco a Ripa, 163" }
  },
  forumArea: [
    [41.89410,12.48455],[41.89365,12.49190],[41.88930,12.49320],[41.88685,12.48945],[41.88845,12.48405]
  ],
  internalPath: [
    [41.890244,12.490213],[41.89105,12.48895],[41.89065,12.48660],[41.88955,12.48515],[41.89135,12.48555],[41.892889,12.487278]
  ],
  routes: {
    "col-forum": { color:"#2563eb", points:[[41.890210,12.492231],[41.89015,12.49150],[41.890244,12.490213]] },
    "forum-home": { color:"#7c3aed", points:[[41.892889,12.487278],[41.89220,12.48480],[41.89110,12.48150],[41.89010,12.47820],[41.88910,12.47460],[41.88910,12.47075]] }
  },
  steps: [
    { time:"09:35", title:"Contrôles et entrée", meta:"Billets nominatifs et pièces d’identité prêts. L’entrée officielle est près de l’arc de Constantin.", color:"#dc2626", point:"colosseum" },
    { time:"09:45", title:"1 · Architecture et circulation", meta:"En entrant, observez les arcs, les couloirs rayonnants et les vomitoria : le monument répartissait rapidement le public selon son rang social.", color:"#dc2626", point:"colosseum" },
    { time:"09:55", title:"2 · Vue sur l’arène", meta:"Imaginez le plancher de bois recouvert de sable. La forme elliptique rapprochait les spectateurs de l’action et limitait les angles morts.", color:"#dc2626", point:"colosseum" },
    { time:"10:05", title:"3 · Hypogée vu d’en haut", meta:"Repérez cages, couloirs, treuils et emplacements des monte-charges sous l’ancienne arène. Accès direct seulement avec billet spécial.", color:"#b91c1c", point:"colosseum" },
    { time:"10:18", title:"4 · Premier niveau et spectacles", meta:"Cherchez les panneaux sur les gladiateurs, les chasses et les usages politiques des jeux.", color:"#b91c1c", point:"colosseum" },
    { time:"10:35", title:"5 · Deuxième niveau et panorama", meta:"Meilleure lecture de la cavea, de l’arène et de l’hypogée. À l’extérieur : arc de Constantin, Palatin et temple de Vénus et de Rome.", color:"#7f1d1d", point:"colosseum" },
    { time:"10:55", title:"Sortie du Colisée", meta:"Terminez les photos et suivez la sortie sans revenir en arrière.", color:"#7f1d1d", point:"colosseum" },
    { time:"11:05", title:"Colisée → entrée du Forum", meta:"Très court transfert vers l’accès proche de l’Arc de Titus / Via Sacra.", color:"#2563eb", route:"col-forum", maps:"https://www.google.com/maps/dir/?api=1&origin=Piazza%20del%20Colosseo%2C%20Roma&destination=Arco%20di%20Tito%2C%20Roma&travelmode=walking" },
    { time:"11:10", title:"6 · Arc de Titus et Via Sacra", meta:"Commencez par l’Arc de Titus, puis descendez la Via Sacra. C’est l’axe cérémoniel principal du Forum.", color:"#2563eb", area:true },
    { time:"11:25", title:"7 · Basilique de Maxence et temple de Romulus", meta:"Observez l’échelle monumentale de la basilique, puis les édifices bordant la Via Sacra.", color:"#2563eb", area:true },
    { time:"11:40", title:"8 · Maison des Vestales et temple de Vesta", meta:"Passez par la cour des Vestales et repérez le petit temple circulaire où brûlait le feu sacré de Rome.", color:"#2563eb", area:true },
    { time:"11:55", title:"9 · Curie, Rostres et cœur politique", meta:"Rejoignez la Curie, l’arc de Septime Sévère et les Rostres : le centre institutionnel et oratoire de la Rome antique.", color:"#1d4ed8", area:true },
    { time:"12:10", title:"10 · Palatin express", meta:"Montez seulement jusqu’au premier belvédère utile sur le Forum. Évitez le grand tour du Palatin afin de préserver du temps et de l’énergie.", color:"#1d4ed8", area:true },
    { time:"12:30", title:"Sortie du Forum", meta:"Sortez par Largo della Salara Vecchia si le cheminement du jour le permet.", color:"#ea580c", point:"forumExit" },
    { time:"12:35", title:"Courses près de l’appartement", meta:"Choisissez un supermarché pratique autour de Via di San Francesco a Ripa, 163.", color:"#16a34a", maps:"https://www.google.com/maps/search/?api=1&query=supermarket%20near%20Via%20di%20San%20Francesco%20a%20Ripa%20163%2C%20Roma", point:"home" },
    { time:"12:40", title:"Forum → Trastevere", meta:"Marchez vers les courses puis l’appartement. Le lien Google Maps recalculera le trajet réel depuis votre position.", color:"#7c3aed", route:"forum-home", maps:"https://www.google.com/maps/dir/?api=1&origin=Largo%20della%20Salara%20Vecchia%2C%20Roma&destination=Via%20di%20San%20Francesco%20a%20Ripa%20163%2C%20Roma&travelmode=walking" },
    { time:"après", title:"Retour à l’appartement", meta:"Via di San Francesco a Ripa, 163, Trastevere.", color:"#7c3aed", point:"home" }
  ]
};
