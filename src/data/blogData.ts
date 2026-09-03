export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  excerpt: string;
  image: string;
  content: {
    intro: string;
    sections: {
      title: string;
      text: string;
      bullets?: string[];
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: "1",
    slug: "pourquoi-choisir-alternance-ecole-de-commerce-toulouse",
    title: "Pourquoi choisir l'alternance en école de commerce à Toulouse en 2026 ?",
    category: "Alternance & Carrière",
    readTime: "5 min de lecture",
    date: "03 Septembre 2026",
    author: "Équipe Pédagogique",
    authorRole: "Elixir Business School",
    excerpt: "Découvrez tous les avantages de la formation en alternance à Toulouse : gratuité des études, salaire mensuel, expérience terrain et taux d'insertion professionnelle record.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    content: {
      intro: "Opter pour l'alternance en grande école de commerce est devenu le choix stratégique par excellence pour les étudiants ambitieux. À Toulouse, métropole dynamique et bassin d'emploi en forte croissance commercial, Elixir Business School propose un accompagnement d'excellence.",
      sections: [
        {
          title: "1. Financement à 100% de votre scolarité",
          text: "L'un des avantages majeurs du contrat d'apprentissage ou de professionnalisation réside dans la prise en charge intégrale des frais de scolarité par l'OPCO de l'entreprise d'accueil. L'étudiant ne débourse aucun frais de formation."
        },
        {
          title: "2. Une rémunération mensuelle fixe pendant vos études",
          text: "En plus de la prise en charge de vos études, l'alternant perçoit chaque mois un salaire calculé selon son âge et son niveau d'études (entre 55% et 100% du SMIC), permettant une autonomie financière dès le début du cursus."
        },
        {
          title: "3. Une employabilité dédoublée à la sortie",
          text: "Les diplômés issus de l'alternance justifient de 1 à 2 ans d'expérience professionnelle concrète sur leur CV. C'est l'atout numéro 1 recherché par les recruteurs en entreprise.",
          bullets: [
            "95% des alternants d'Elixir Business School décrochent un emploi sous 6 mois",
            "Mise en pratique immédiate des concepts de cours sur le terrain",
            "Création d'un réseau professionnel solide dès la formation"
          ]
        }
      ],
      conclusion: "L'alternance chez Elixir Business School à Toulouse est la voie royale pour conjuguer diplôme certifié RNCP, indépendance financière et ascension professionnelle rapide."
    }
  },
  {
    id: "2",
    slug: "bts-mco-toulouse-programme-debouches-admission",
    title: "BTS MCO à Toulouse : Programme, débouchés et conseils pour réussir son admission",
    category: "Formations & BTS",
    readTime: "6 min de lecture",
    date: "28 Août 2026",
    author: "Direction des Admissions",
    authorRole: "Elixir Business School",
    excerpt: "Tout savoir sur le BTS Management Commercial Opérationnel (MCO) : matières enseignées, compétences visées et opportunités d'emploi en région Occitanie.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    content: {
      intro: "Le BTS MCO (Management Commercial Opérationnel) est le diplôme d'État Bac+2 de référence dans le secteur de la distribution, du e-commerce et des services. Il prépare des managers capables de piloter une unité commerciale de A à Z.",
      sections: [
        {
          title: "Quelles sont les matières fondamentales du BTS MCO ?",
          text: "Le programme s'articule autour de blocs d'enseignements professionnels et généraux conçus pour développer une vision à 360° du commerce moderne :",
          bullets: [
            "Développement de la Relation Client et Vente Conseil (DRCVC)",
            "Animation et Dynamisation de l'Offre Commerciale (ADOC)",
            "Gestion Opérationnelle et Pilotage des Budgets",
            "Management de l'Équipe Commerciale",
            "Culture Économique, Juridique et Manageriale (CEJM)"
          ]
        },
        {
          title: "Quels sont les débouchés après un BTS MCO à Toulouse ?",
          text: "À l'issue de votre formation, vous pouvez intégrer directement le marché du travail sur des postes de Chef de rayon, Responsable d'unité commerciale, Chargé de clientèle, ou poursuivre vos études en Bachelor (Bac+3) chez Elixir Business School."
        }
      ],
      conclusion: "Le BTS MCO en alternance chez Elixir Business School associe rigueur académique et accompagnement sur-mesure pour transformer chaque étudiant en futur manager accompli."
    }
  },
  {
    id: "3",
    slug: "competences-cles-marketing-digital-entreprises-2026",
    title: "Les compétences clés en Marketing Digital les plus recherchées par les entreprises en 2026",
    category: "Marketing & Innovation",
    readTime: "4 min de lecture",
    date: "20 Août 2026",
    author: "Pôle Expertise Digital",
    authorRole: "Elixir Business School",
    excerpt: "SEO, IA générative, Data Analytics, Social Media Ads : découvrez les leviers indispensables pour réussir votre carrière dans le marketing digital.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    content: {
      intro: "Le paysage du marketing digital évolue à un rythme inédit. Pour s'imposer sur le marché du travail en 2026, maîtriser les canaux traditionnels ne suffit plus. Les entreprises recherchent des profils agiles et techniques.",
      sections: [
        {
          title: "1. L'Intelligence Artificielle appliquée au Marketing",
          text: "L'utilisation de l'IA générative pour l'optimisation des campagnes, la rédaction de contenus captivants et l'analyse prédictive des comportements clients est devenue un pré-requis indispensable."
        },
        {
          title: "2. Le Référencement Naturel (SEO) et payant (SEA)",
          text: "La capacité à positionner un site en 1ère page de Google et à rentabiliser des campagnes Google Ads / Meta Ads constitue la compétence la plus valorisée sur le marché."
        },
        {
          title: "3. La Data Analytics et le pilotage de la performance",
          text: "Savoir lire les données sous Google Analytics 4, interpréter les kpi (Taux de conversion, CAC, LTV) permet aux marketeurs de prendre des décisions stratégiques rentables.",
          bullets: [
            "Maîtrise des outils d'automatisation CRM (Hubspot, Brevo)",
            "Gestion des réseaux sociaux professionnels (LinkedIn, Instagram, TikTok)",
            "Stratégie de contenu & Inbound Marketing"
          ]
        }
      ],
      conclusion: "Notre Bachelor Marketing Digital chez Elixir Business School forme précisément aux outils les plus récents sollicités par les agences et les grands groupes."
    }
  },
  {
    id: "4",
    slug: "comment-decrocher-contrat-alternance-guide-ultime",
    title: "Comment décrocher son contrat d'alternance rapidement : Le guide ultime d'Elixir Business School",
    category: "Conseils Recrutement",
    readTime: "7 min de lecture",
    date: "12 Août 2026",
    author: "Service Relations Entreprises",
    authorRole: "Elixir Business School",
    excerpt: "CV percutant, profil LinkedIn optimisé, relance téléphonique et préparation aux entretiens : nos conseils d'experts pour trouver votre entreprise en alternance.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
    content: {
      intro: "La recherche d'une entreprise en alternance demande méthode, rigueur et réactivité. Chez Elixir Business School, nous accompagnons individuellement chaque candidat retenu pour concrétiser sa signature de contrat dans les meilleurs délais.",
      sections: [
        {
          title: "1. Rédiger un CV axé compétences et résultats",
          text: "Mettez en avant vos réalisations concrètes (projets académiques, jobs d'été, bénévolat). Un recruteur consacre en moyenne 7 secondes à la lecture d'un CV."
        },
        {
          title: "2. Optimiser son profil LinkedIn",
          text: "Complétez votre titre de profil en précisant le rythme d'alternance recherché (ex: 'Alternant Chef de Projet Digital - Rythme 3j/2j'). Interagissez avec les publications des décideurs."
        },
        {
          title: "3. Profiter des événements Job Dating d'Elixir Business School",
          text: "Notre réseau de 250+ entreprises partenaires participe régulièrement à nos sessions de Job Dating réservées exclusivement aux candidats admis dans notre école.",
          bullets: [
            "Mise en relation directe avec les responsables RH de Toulouse",
            "Ateliers de préparation aux entretiens et pitch de présentation",
            "Suivi hebdomadaire par votre conseiller dédié"
          ]
        }
      ],
      conclusion: "Rejoindre Elixir Business School, c'est bénéficier d'un coaching sur-mesure pour trouver votre alternance sereinement et rapidement."
    }
  }
];

