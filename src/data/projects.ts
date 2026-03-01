export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  date: string;
}

export const projects: Project[] = [
  {
    slug: "drone-fleet-pki-lab",
    title: "Drone Fleet PKI Lab",
    description:
      "Laboratoire de PKI pour flotte de drones avec gestion des certificats X.509 et infrastructure de confiance.",
    longDescription: `Infrastructure de **PKI** (Public Key Infrastructure) dédiée à la sécurisation des communications entre drones et stations de contrôle.

> L'objectif est de fournir un lab complet et reproductible pour expérimenter la gestion de certificats dans un contexte IoT / systèmes embarqués.

## Contexte

Etant récemment diplomé, je souhaitais augmenter mon employabilité et acquérir de nouvelles compétences ! L'idée de realiser 
un projet m'est alors apparu comme une évidence. Après voir fait des recherches, je me suis dit pourquoi pas ne pas 
développer des scripts qui automatise la gestion des certificats d'une flotte de drône. Une authentique et réelle root of trust 
développé from scratch, se rapprochant d'un cas concret.  

## Fonctionnalités principales

- Génération et distribution automatique de certificats **X.509** pour chaque drone
- Infrastructure hiérarchique de CA (\`Root CA\` → \`Intermediate CA\` → \`End Entity\`)
- Système de révocation de certificats (CRL / OCSP)
- Chiffrement bout-en-bout des communications drone ↔ station
- Simulateur de flotte pour tester les échanges sécurisés en temps réel
- Monitoring et alertes sur l'état de l'infrastructure PKI

## Stack technique

| Domaine | Technologies |
|---------|-------------|
| PKI | OpenSSL |
| Protocoles | TLS 1.3, mTLS |
| Stockage des clés | HSM, keystore |
| Automatisation | Python, Bash |
| Simulateur | Python (asyncio) |

## Architecture du projet

\`\`\`
drone-fleet-pki-lab/
├── README.md
├── Makefile
├── docs/
│   └── architecture.md
├── pki/
│   ├── openssl.cnf
│   ├── ca/
│   │   ├── certs/
│   │   ├── crl/
│   │   ├── newcerts/
│   │   ├── private/
│   │   ├── index.txt
│   │   ├── serial
│   │   └── crlnumber
│   ├── csr/
│   ├── issued/
│   └── scripts/
│       ├── init_ca.sh
│       ├── issue_cert.sh
│       ├── gen_crl.sh
│       ├── revoke_cert.sh
│       └── verify_cert.sh
├── simulator/
│   ├── gcs_server.py
│   ├── drone_client.py
│   └── fleet.json
└── logs/
    └── events.log
\`\`\`

### PKI Infrastructure

Le dossier \`pki/\` contient toute la configuration OpenSSL et les scripts Bash pour gérer le cycle de vie des certificats : initialisation de la CA, émission, révocation et vérification.

### Drone Simulator

Le dossier \`simulator/\` contient un serveur GCS (Ground Control Station) et un client drone en Python. Ils communiquent via **mTLS** en utilisant les certificats générés par la PKI.

## Quickstart

\`\`\`bash
# Cloner le projet
git clone https://github.com/Gabin-Crn/drone-fleet-pki-lab.git
cd drone-fleet-pki-lab

# Initialiser la PKI
make init

# Émettre un certificat pour un drone
make issue DRONE_ID=drone-01

# Lancer le simulateur
make simulate
\`\`\`

## Ce que j'ai appris

- Conception d'une **infrastructure PKI hiérarchique** from scratch
- Gestion du cycle de vie des certificats X.509 (émission, renouvellement, révocation)
- Implémentation de **mTLS** pour l'authentification mutuelle
- Automatisation complète avec **Makefile** + scripts Bash
- Simulation de communications sécurisées entre systèmes embarqués
`,
    tags: ["PKI", "X.509", "TLS", "OpenSSL", "Python", "Sécurité", "Drones"],
    image: "/projects/drone-pki.jpg",
    github: "https://github.com/Gabin-Crn/drone-fleet-pki-lab",
    date: "2025-02",
  },
];
