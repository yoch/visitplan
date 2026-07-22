export default {
  id: "2026-07-22",
  title: "Mercredi 22 · Colisée puis courses",
  subtitle: "Entrée Colisée 09:45 · retour à Trastevere",
  summary: [
    ["09:45", "entrée Colisée"],
    ["≈ 1 h", "visite"],
    ["ensuite", "courses + retour"]
  ],
  alert: "⏱️ Plan simplifié : visite du Colisée, courses près du nouvel appartement, puis retour à Via di San Francesco a Ripa, 163.",
  points: {
    colosseum: { coords:[41.890210,12.492231], number:1, color:"#dc2626", title:"Colisée", text:"Entrée réservée à 09:45" },
    home: { coords:[41.88910,12.47075], number:2, color:"#7c3aed", title:"Nouvel appartement", text:"Via di San Francesco a Ripa, 163" }
  },
  forumArea: [],
  internalPath: [],
  routes: {
    "col-home": { color:"#7c3aed", points:[[41.890210,12.492231],[41.88965,12.49060],[41.88745,12.48830],[41.88635,12.48460],[41.88730,12.48090],[41.88900,12.47700],[41.88910,12.47075]] }
  },
  steps: [
    { time:"09:35", title:"Contrôles et entrée", meta:"Billets et pièces d’identité prêts. Restez près de l’entrée correspondant à votre réservation.", color:"#dc2626", point:"colosseum" },
    { time:"09:45", title:"Visite du Colisée", meta:"Comptez environ 55 à 70 minutes. Faites les niveaux accessibles avec votre billet, sans chercher à tout prolonger.", color:"#dc2626", point:"colosseum" },
    { time:"10:50", title:"Chercher un supermarché près de l’appartement", meta:"Ouvrez la recherche Google Maps ci-dessous et choisissez le magasin le plus pratique selon vos achats.", color:"#16a34a", maps:"https://www.google.com/maps/search/?api=1&query=supermarket%20near%20Via%20di%20San%20Francesco%20a%20Ripa%20163%2C%20Roma", point:"home" },
    { time:"11:00", title:"Colisée → Trastevere", meta:"Allez vers Via di San Francesco a Ripa, faites les courses à proximité, puis terminez à l’appartement.", color:"#7c3aed", route:"col-home", maps:"https://www.google.com/maps/dir/?api=1&origin=Piazza%20del%20Colosseo%2C%20Roma&destination=Via%20di%20San%20Francesco%20a%20Ripa%20163%2C%20Roma&travelmode=walking" },
    { time:"après", title:"Retour à l’appartement", meta:"Via di San Francesco a Ripa, 163, Trastevere.", color:"#7c3aed", point:"home" }
  ]
};
