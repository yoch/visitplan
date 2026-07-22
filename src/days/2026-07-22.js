export default {
  id: "2026-07-22",
  title: "Mercredi 22 · Visite du Colisée puis courses",
  subtitle: "Entrée 09:45 · visite guidée autonome · retour à Trastevere",
  summary: [
    ["09:45", "entrée Colisée"],
    ["≈ 1 h 15", "visite détaillée"],
    ["ensuite", "courses + retour"]
  ],
  alert: "🎧 Parcours express mais complet : suivez l’ordre imposé par le monument. Avec le billet standard, vous visitez les premier et deuxième niveaux ; l’arène et l’hypogée s’observent depuis les galeries, sauf accès spécial indiqué sur votre billet.",
  points: {
    colosseum: { coords:[41.890210,12.492231], number:1, color:"#dc2626", title:"Colisée", text:"Entrée réservée à 09:45 · parcours niveaux I et II" },
    home: { coords:[41.88910,12.47075], number:2, color:"#7c3aed", title:"Appartement", text:"Via di San Francesco a Ripa, 163" }
  },
  forumArea: [],
  internalPath: [],
  routes: {
    "col-home": { color:"#7c3aed", points:[[41.890210,12.492231],[41.88965,12.49060],[41.88745,12.48830],[41.88635,12.48460],[41.88730,12.48090],[41.88900,12.47700],[41.88910,12.47075]] }
  },
  steps: [
    { time:"09:35", title:"Contrôles et entrée", meta:"Billets nominatifs et pièces d’identité prêts. Passez la sécurité et suivez l’entrée correspondant à votre réservation de 09:45.", color:"#dc2626", point:"colosseum" },
    { time:"09:45", title:"1 · Comprendre le monument en entrant", meta:"Regardez l’épaisseur des murs, les arcs superposés et les couloirs rayonnants. Le Colisée fonctionnait comme un stade moderne : les vomitoria répartissaient rapidement des dizaines de milliers de spectateurs selon leur rang social.", color:"#dc2626", point:"colosseum" },
    { time:"09:55", title:"2 · Premier regard sur l’arène", meta:"Placez-vous au premier belvédère. Imaginez le plancher de bois recouvert de sable qui masquait les installations techniques. Repérez la forme elliptique : elle rapproche le public de l’action et évite les angles morts.", color:"#dc2626", point:"colosseum" },
    { time:"10:05", title:"3 · L’hypogée vu d’en haut", meta:"Observez le réseau de murs sous l’ancienne arène. Il abritait cages, décors, monte-charges, treuils et trappes permettant de faire surgir animaux et combattants. Ne descendez que si votre billet mentionne explicitement « Underground » ou « Full Experience ».", color:"#b91c1c", point:"colosseum" },
    { time:"10:15", title:"4 · Premier niveau : organisation des spectacles", meta:"En avançant, cherchez les panneaux sur les gladiateurs, les chasses et les condamnations publiques. Retenez surtout que les spectacles étaient financés par le pouvoir et servaient autant la politique que le divertissement.", color:"#b91c1c", point:"colosseum" },
    { time:"10:28", title:"5 · Exposition et vestiges architecturaux", meta:"Accordez dix minutes aux objets et fragments : inscriptions, éléments de gradins, décors en marbre et traces de restaurations. Comparez la structure romaine en brique et béton avec les parements de pierre disparus.", color:"#991b1b", point:"colosseum" },
    { time:"10:40", title:"6 · Deuxième niveau et panorama", meta:"Montez au deuxième ordre. C’est le meilleur point pour comprendre simultanément la cavea, l’arène, l’hypogée et les différents niveaux sociaux. À l’extérieur, repérez l’arc de Constantin, le Palatin et le temple de Vénus et de Rome.", color:"#7f1d1d", point:"colosseum" },
    { time:"10:55", title:"7 · Dernier tour et sortie", meta:"Faites les dernières photos depuis le côté offrant la vue la plus dégagée, puis suivez le sens de sortie sans revenir en arrière. Objectif : être dehors vers 11:00–11:10.", color:"#7f1d1d", point:"colosseum" },
    { time:"11:10", title:"Chercher un supermarché près de l’appartement", meta:"Choisissez le magasin le plus pratique autour de Via di San Francesco a Ripa, 163, selon vos achats et son ouverture actuelle.", color:"#16a34a", maps:"https://www.google.com/maps/search/?api=1&query=supermarket%20near%20Via%20di%20San%20Francesco%20a%20Ripa%20163%2C%20Roma", point:"home" },
    { time:"11:15", title:"Colisée → Trastevere", meta:"Marchez vers Via di San Francesco a Ripa, faites les courses à proximité, puis terminez à l’appartement.", color:"#7c3aed", route:"col-home", maps:"https://www.google.com/maps/dir/?api=1&origin=Piazza%20del%20Colosseo%2C%20Roma&destination=Via%20di%20San%20Francesco%20a%20Ripa%20163%2C%20Roma&travelmode=walking" },
    { time:"après", title:"Retour à l’appartement", meta:"Via di San Francesco a Ripa, 163, Trastevere.", color:"#7c3aed", point:"home" }
  ]
};