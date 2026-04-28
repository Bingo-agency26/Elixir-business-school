import { Course } from "./types";

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Conseiller de Vente",
    level: "Niveau 4 (Bac)",
    duration: "1 an",
    totalHours: "1 200 heures",
    rhythm: "3j entreprise / 2j centre",
    nature: "Certification professionnelle niveau 4 (équiv. Bac)",
    certifications: ["Certifié Qualiopi", "RNCP Référencé France Compétences"],
    description: "Devenez un expert de la relation client et de l'animation commerciale.",
    fullDescription: "Formation de vendeurs autonomes pour accueillir, conseiller et vendre en magasin ou e-commerce, en gérant la relation client et les techniques de vente pour booster les performances quotidiennes.",
    objectives: [
      "Accueillir et conseiller le client pour conclure la vente",
      "Gérer les stocks et rayons produits/services",
      "Appliquer réglementation et hygiène/sécurité",
      "Utiliser outils digitaux de vente (CRM, caisse)"
    ],
    points: ["Vente conseil", "Merchandising", "Gestion stock", "Relation client"],
    detailedProgram: {
      headers: ["Bloc", "Contenus", "Durée"],
      rows: [
        ["Accueil/vente", "Techniques vente conseil, fidélisation", "400h"],
        ["Gestion rayon", "Merchandising, stocks", "300h"],
        ["Digital/réglementation", "Outils caisse, sécurité", "300h"],
        ["Projets pratiques", "Mises en situation", "200h"]
      ]
    },
    evaluation: "Contrôle continu + jury final (épreuves pratiques, oral). Certifications partielles par bloc.",
    prerequisites: ["CAP/BEP commerce", "Bac pro vente", "Ou validation acquis expérience (VAE)", "Âge min 18 ans pour alternance"],
    outcomes: [
      "Vendeur conseil",
      "Employé polyvalent retail",
      "Conseiller clientèle"
    ],
    salary: "21-24k€ brut/an",
    pursuitOfStudies: {
      description: "Poursuite d'études possible vers un niveau supérieur.",
      examples: ["BTS MCO"]
    },
    statistics: [
      { label: "Insertion professionnelle", value: "85%" }
    ],
    format: "Alternance (contrat pro/apprentissage), hybride présentiel/online",
    slug: "conseiller-de-vente"
  },
  {
    id: "2",
    title: "BTS MCO – Management Commercial Opérationnel",
    level: "Bac+2",
    duration: "2 ans",
    totalHours: "2 100 heures",
    rhythm: "3j entreprise / 2j centre",
    nature: "Diplôme national Bac+2 (Diplôme d'État)",
    certifications: ["Certifié Qualiopi", "RNCP 34031 Niveau 5"],
    description: "La formation phare pour maîtriser la gestion d'une unité commerciale et le management d'équipe.",
    fullDescription: "Ce BTS forme des responsables opérationnels de tout ou partie d'une unité commerciale. La formation est axée sur le management de l'équipe commerciale et la gestion opérationnelle.",
    objectives: [
      "Développer la relation client et vente conseil",
      "Animer et dynamiser l'offre commerciale",
      "Gérer la gestion opérationnelle (stocks, budgets)",
      "Manager l'équipe commerciale"
    ],
    points: ["Management", "Gestion", "Vente", "Marketing"],
    detailedProgram: {
      headers: ["Matière", "H1", "H2", "Éval"],
      rows: [
        ["DRC/vente", "6h", "5h", "CCF"],
        ["Animation offre", "5h", "6h", "CCF"],
        ["Gestion op.", "4h", "4h", "Écrit"],
        ["Management équipe", "4h", "4h", "Oral"],
        ["Généraux (CEJM, LV)", "12h", "12h", "Écrit"]
      ]
    },
    evaluation: "CCF (contrôle formation continue) + épreuves terminales (écrit 4h, oral 30min). Jury mixte.",
    prerequisites: ["Bac STMG", "Bac pro commerce/vente", "Via Parcoursup (dossier + entretien)"],
    outcomes: [
      "Chef de rayon",
      "Chargé de clientèle",
      "Vendeur conseil",
      "Traffic manager"
    ],
    salary: "25-28k€ brut/an",
    pursuitOfStudies: {
      description: "Insertion professionnelle ou poursuite d'études.",
      examples: ["Licence pro", "BUT", "École de commerce"]
    },
    statistics: [
      { label: "Emploi à 6 mois", value: "32-34%" },
      { label: "Poursuite d'études", value: "44%" }
    ],
    format: "Alternance + 14-16 semaines de stage",
    slug: "bts-mco"
  },
  {
    id: "3",
    title: "Négociateur Technico-Commercial",
    level: "Niveau 5 (Bac+2)",
    duration: "1 an",
    totalHours: "1 000 heures",
    rhythm: "4j entreprise / 1j centre",
    nature: "Certification professionnelle niveau 5 (Bac+2)",
    certifications: ["Certifié Qualiopi", "Code ROME D1406"],
    description: "Développez vos compétences en prospection et négociation BtoB complexe.",
    fullDescription: "Formation axée sur la vente technique et complexe. Le négociateur technico-commercial combine expertise technique et force de vente pour closer des deals stratégiques.",
    objectives: [
      "Analyser les besoins techniques clients B2B",
      "Négocier et closer des ventes complexes",
      "Gérer un portefeuille et suivi post-vente",
      "Utiliser les outils CRM et de prospection"
    ],
    points: ["Négociation B2B", "Closing", "CRM", "Prospection"],
    detailedProgram: {
      headers: ["Bloc", "Contenus", "Durée"],
      rows: [
        ["Analyse besoins", "Études techniques", "250h"],
        ["Négociation", "Techniques closing", "300h"],
        ["Gestion clients", "CRM, reporting", "250h"],
        ["Projets", "Simulations B2B", "200h"]
      ]
    },
    evaluation: "Jury final (QCM, cas pratique, oral 20min). Blocs capitalisables.",
    prerequisites: ["BTS MCO / Bac+2 vente", "Expérience commerciale préalable"],
    outcomes: [
      "Négociateur technico-commercial",
      "Attaché commercial",
      "Chargé d'affaires"
    ],
    salary: "2 200 - 3 500€ brut/mois",
    pursuitOfStudies: {
      description: "Évolution vers des postes de direction commerciale.",
      examples: ["Directeur des ventes", "Directeur commercial"]
    },
    format: "Alternance",
    slug: "negociateur-technico-commercial"
  },
  {
    id: "4",
    title: "Manager d’Établissement Marchand",
    level: "Niveau 5 (Bac+2)",
    duration: "1 an",
    totalHours: "1 050 heures",
    rhythm: "3j entreprise / 2j centre",
    nature: "Certification professionnelle Bac+2",
    certifications: ["Certifié Qualiopi", "RNCP Niveau 5"],
    description: "Pilotez un point de vente et encadrez vos équipes avec succès.",
    fullDescription: "Formation pour managers responsables d'un point de vente : management d'équipe, gestion financière et optimisation des performances commerciales.",
    objectives: [
      "Manager une équipe de point de vente",
      "Gérer les finances et budgets de l'unité",
      "Optimiser la stratégie commerciale",
      "Assurer la conformité et la gestion des risques"
    ],
    points: ["Leadership", "Management RH", "Gestion budgétaire", "Conformité"],
    detailedProgram: {
      headers: ["Domaine", "Contenus"],
      rows: [
        ["Management", "Gestion des équipes, RH, plannings"],
        ["Finances", "Budgets, analyse de rentabilité"],
        ["Commerce", "Merchandising, stratégie de vente"],
        ["Digital", "Outils de gestion et vente digitale"]
      ]
    },
    evaluation: "Contrôle continu (CCF) + oral devant jury.",
    prerequisites: ["BTS MCO ou équivalent Bac+2 commerce"],
    outcomes: [
      "Manager d'établissement",
      "Responsable de boutique / franchise"
    ],
    salary: "28-35k€ brut/an",
    pursuitOfStudies: {
      description: "Poursuite vers des titres de niveau supérieur (Bac+3/5).",
      examples: ["Bachelor Management", "Licence Pro"]
    },
    format: "Alternance",
    slug: "manager-etablissement-marchand"
  },
  {
    id: "5",
    title: "Responsable d'Unité Marchande",
    level: "Niveau 6 (Bac+3)",
    duration: "1 an",
    totalHours: "1 300 heures",
    rhythm: "Alternance intensive",
    nature: "Titre professionnel niveau 6 (Bac+3)",
    certifications: ["Certifié Qualiopi", "RNCP 38676"],
    description: "Le niveau supérieur du pilotage stratégique et du management opérationnel.",
    fullDescription: "Manager autonome d'unités marchandes omnicanales : piloter l'offre produits, la dynamique commerciale, les performances financières et l'équipe.",
    objectives: [
      "Développer la dynamique commerciale omnicanale",
      "Optimiser la performance économique et financière",
      "Manager l'équipe (recrutement, animation)"
    ],
    points: ["Omnicanalité", "Finance", "Management avancé", "Stratégie"],
    detailedProgram: {
      headers: ["Bloc", "Compétences clés", "Durée", "Éval"],
      rows: [
        ["Bloc 1", "Dynamique comm. (approvision., marchandising, omnicanal)", "450h", "Pratique"],
        ["Bloc 2", "Éco/fin. (prévisions, plans action)", "350h", "Écrit"],
        ["Bloc 3", "Management (recrut., animation équipe)", "500h", "Oral/CCF"]
      ]
    },
    evaluation: "Mises en situation professionnelles, audits, jury final (entretiens 30min/bloc). Capitalisation par blocs.",
    prerequisites: ["Bac+2 commerce (BTS MCO)", "Minimum 2 ans d'expérience (VAE possible)"],
    outcomes: [
      "Manager d'unité marchande",
      "Responsable omnicanal",
      "Directeur adjoint"
    ],
    salary: "35-45k€ brut/an",
    pursuitOfStudies: {
      description: "Poursuite vers des Mastères spécialisés ou MBA.",
      examples: ["Mastère Retail", "MBA Management"]
    },
    statistics: [
      { label: "Insertion professionnelle", value: "90%" }
    ],
    format: "Alternance intensive",
    slug: "responsable-unite-marchande"
  },
  {
    id: "6",
    title: "Bachelor Marketing Digital",
    level: "Bac+3",
    duration: "1 an",
    totalHours: "1 500 heures (post-Bac+2)",
    rhythm: "3j entreprise / 2j centre",
    nature: "Bachelor / Titre professionnel niveau 6 (Bac+3)",
    certifications: ["Certifié Qualiopi", "RNCP Niveau 6"],
    description: "Maîtrisez les outils de l'acquisition et de la communication digitale.",
    fullDescription: "Devenez expert en stratégie digitale : SEO/SEA, réseaux sociaux, data analytics et IA pour booster la visibilité et les ventes omnicanales.",
    objectives: [
      "Élaborer une stratégie marketing digital",
      "Déployer des actions (SEO/SEA, social media)",
      "Analyser la data et performances (IA, GA4)",
      "Gérer des projets e-commerce et CRM"
    ],
    points: ["SEO/SEA", "Social Media", "Data & IA", "E-commerce"],
    detailedProgram: {
      headers: ["Matière", "Durée", "Éval"],
      rows: [
        ["Stratégie digitale", "400h", "Projet"],
        ["SEA/SEO/SM", "500h", "Campagnes réelles"],
        ["Data/IA marketing", "300h", "Analytics"],
        ["Projets entreprise", "300h", "Jury"]
      ]
    },
    evaluation: "Portfolios de projets, QCM, oral pitch (20min).",
    prerequisites: ["Bac+2 marketing/vente", "Entretien sur portfolio de réalisations"],
    outcomes: [
      "Chef de projet digital",
      "Traffic manager",
      "Community manager",
      "Consultant SEO"
    ],
    salary: "28-38k€ brut/an",
    pursuitOfStudies: {
      description: "Poursuite vers des Masters ou MSc spécialisés.",
      examples: ["Mastère Digital Marketing", "MSc E-business"]
    },
    statistics: [
      { label: "Insertion professionnelle", value: "88%" }
    ],
    format: "Alternance post-Bac+2",
    slug: "bachelor-marketing-digital"
  }
];
