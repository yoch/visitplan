export default {
  id: "2026-07-22",
  title: "Mercredi 22 · Colisée, Forum & Ghetto",
  subtitle: "Entrée Colisée 09:45 · Musée avant 14:00",
  summary: [
    ["09:45", "entrée Colisée"],
    ["≈ 5 km", "marche"],
    ["14:00", "fermeture musée"]
  ],
  alert: "⏱️ Journée recalée : le Musée juif ferme exceptionnellement à 14:00 aujourd’hui. Faites le Forum en version essentielle et déjeunez après la visite du musée.",
  points: {
    colosseum: { coords:[41.890210,12.492231], number:1, color:"#dc2626", title:"Colisée", text:"Entrée réservée à 09:45" },
    viaSacra: { coords:[41.890244,12.490213], number:2, color:"#2563eb", title:"Accès Forum / Via Sacra", text:"Entrée vers 10:50" },
    forumExit: { coords:[41.892889,12.487278], number:3, color:"#ea580c", title:"Sortie visée", text:"Largo della Salara Vecchia vers 12:20" },
    museum: { coords:[41.892047,12.478325], number:4, color:"#0f766e", title:"Musée juif & Grande Synagogue", text:"Arrivée visée 12:45 · fermeture exceptionnelle à 14:00" },
    portico: { coords:[41.892470,12.478880], number:5, color:"#16a34a", title:"Portique d’Octavie", text:"Déjeuner après le musée" },
    home: { coords:[41.889611,12.473381], number:6, color:"#7c3aed", title:"Appartement", text:"11 Vicolo di Sant’Agata" }
  },
  forumArea: [
    [41.89410,12.48455],[41.89365,12.49190],[41.88930,12.49320],[41.88685,12.48945],[41.88845,12.48405]
  ],
  internalPath: [
    [41.890244,12.490213],[41.89105,12.48895],[41.89065,12.48660],
    [41.89135,12.48555],[41.892889,12.487278]
  ],
  routes: {
    "col-forum": { color:"#2563eb", points:[[41.890210,12.492231],[41.89015,12.49150],[41.890244,12.490213]] },
    "forum-museum": { color:"#ea580c", points:[[41.892889,12.487278],[41.89318,12.48520],[41.89305,12.48315],[41.89220,12.48115],[41.89205,12.48010],[41.892470,12.478880],[41.892047,12.478325]] },
    "museum-portico": { color:"#16a34a", points:[[41.892047,12.478325],[41.89230,12.47855],[41.892470,12.478880]] },
    "portico-home": { color:"#7c3aed", points:[[41.892470,12.478880],[41.89150,12.47875],[41.89072,12.47724],[41.89010,12.47645],[41.88965,12.47545],[41.889611,12.473381]] }
  },
  steps: [
    { time:"09:35", title:"Contrôles et entrée", meta:"Restez près de l’entrée réservée, billets et pièces d’identité prêts.", color:"#dc2626", point:"colosseum" },
    { time:"09:45", title:"Visite du Colisée", meta:"Parcours efficace de 55 à 65 min. Ne vous attardez pas dans les zones secondaires.", color:"#dc2626", point:"colosseum" },
    { time:"10:50", title:"Colisée → Forum / Via Sacra", meta:"Court transfert extérieur, puis entrée dans le Forum.", color:"#2563eb", route:"col-forum", maps:"https://www.google.com/maps/dir/?api=1&origin=Piazza%20del%20Colosseo%2C%20Roma&destination=Via%20Sacra%2C%20Roma&travelmode=walking" },
    { time:"11:00", title:"Forum romain — parcours essentiel", meta:"Arc de Titus, Via Sacra, Temple d’Antonin et Faustine, Maison des Vestales, Curie. Palatin seulement si vous êtes en avance.", color:"#2563eb", area:true },
    { time:"12:20", title:"Sortie Forum → Musée juif", meta:"Sortez vers Largo della Salara Vecchia. Marchez directement vers le musée, sans pause déjeuner.", color:"#ea580c", route:"forum-museum", maps:"https://www.google.com/maps/dir/?api=1&origin=Largo%20della%20Salara%20Vecchia%2C%20Roma&destination=Museo%20Ebraico%20di%20Roma%2C%20Via%20Catalana%2C%20Roma&travelmode=walking" },
    { time:"12:45", title:"Musée juif & Grande Synagogue", meta:"Arrivée visée avant 13:00. Visite concentrée jusqu’à environ 13:45 ; fermeture exceptionnelle à 14:00.", color:"#0f766e", point:"museum" },
    { time:"13:45", title:"Déjeuner dans le Ghetto", meta:"Portique d’Octavie ou rue du Ghetto. Prenez enfin le temps de manger à l’ombre.", color:"#16a34a", route:"museum-portico", maps:"https://www.google.com/maps/dir/?api=1&origin=Museo%20Ebraico%20di%20Roma%2C%20Via%20Catalana%2C%20Roma&destination=Portico%20d%27Ottavia%2C%20Roma&travelmode=walking" },
    { time:"14:30", title:"Retour tranquille à l’appartement", meta:"Retour par l’Île Tibérine et Trastevere, ou pause supplémentaire dans le Ghetto.", color:"#7c3aed", route:"portico-home", maps:"https://www.google.com/maps/dir/?api=1&origin=Portico%20d%27Ottavia%2C%20Roma&destination=11%20Vicolo%20di%20Sant%27Agata%2C%20Roma&travelmode=walking" }
  ]
};
