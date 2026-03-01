export interface Education {
  id: number;
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Intensive English Program",
    school: "Greenwich English",
    location: "Melbourne, Australie",
    period: "09/2025 - 12/2025",
    description:
      "Programme intensif d'anglais pour atteindre un niveau professionnel.",
    skills: ["Anglais professionnel"],
  },
  {
    id: 2,
    degree: "Diplôme d'Ingénieur - Systèmes d'Information et Cybersécurité",
    school: "ECE Paris",
    location: "Paris, France",
    period: "2022 - 2025",
    description:
      "Spécialisation en systèmes d'information et cybersécurité. Formation d'ingénieur avec un focus sur la sécurité des SI.",
    skills: ["Cybersécurité", "Systèmes d'information", "Python", "Linux"],
  },
  {
    id: 3,
    degree: "DUT Génie Électrique et Informatique Industrielle",
    school: "Université de Rennes 1",
    location: "Rennes, France",
    period: "2020 - 2022",
    description:
      "Formation en génie électrique et informatique industrielle. Bases solides en électronique, automatique et programmation.",
    skills: ["Électronique", "Informatique industrielle", "Programmation"],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Cybersecurity Engineer",
    company: "Continental Automotive",
    location: "Rambouillet",
    period: "2023 - 2025",
    type: "Alternance",
    description: [
      "Développement d'outils Python pour la dérivation de clés (KDF) et le chiffrement/déchiffrement de logs sensibles.",
      "Construction d'un pipeline de monitoring sécurité end-to-end (ELK + Python + MQTT) pour centraliser les événements de cartes embarquées.",
      "Implémentation d'un provider OpenSSL 3 custom en C pour les workflows TLS adossés à un HSM.",
      "Contribution aux tests d'intégration et de sécurité, documentation pour le handover.",
    ],
    skills: ["Python", "ELK", "OpenSSL", "HSM", "MQTT", "C", "TLS/SSL"],
  },
  {
    id: 2,
    title: "HPC System Engineer",
    company: "Atos",
    location: "Paris",
    period: "2022 - 2023",
    type: "Alternance",
    description: [
      "Automatisation du déploiement et monitoring Linux via scripts Python + Bash.",
      "Installation, configuration et durcissement d'environnements Linux HPC.",
      "Gestion des incidents et contraintes de production.",
    ],
    skills: ["Python", "Bash", "Linux", "HPC", "Monitoring"],
  },
  {
    id: 3,
    title: "Data Center Technician",
    company: "Microsoft",
    location: "Paris",
    period: "2022",
    type: "Stage",
    description: [
      "Maintenance des équipements réseau et composants matériels.",
      "Déploiement de câblage fibre optique et installation de switches réseau.",
      "Diagnostic de composants défectueux et troubleshooting.",
    ],
    skills: ["Réseau", "Hardware", "Fibre optique", "Troubleshooting"],
  },
];
