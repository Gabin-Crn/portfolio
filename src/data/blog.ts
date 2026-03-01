export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "downgrade-attacks",
    title: "Downgrade Attacks",
    excerpt:
      "Comprendre les attaques par downgrade : comment un attaquant force l'utilisation de protocoles obsolètes pour compromettre la sécurité des communications.",
    content: `Les **downgrade attacks** sont une catégorie d'attaques réseau où un attaquant force deux parties à communiquer via un protocole ou un algorithme **plus faible** que celui qu'elles supportent normalement.

> L'idée est simple : si tu ne peux pas casser le chiffrement moderne, force la victime à utiliser un chiffrement que tu *peux* casser.

## Principe de fonctionnement

Une downgrade attack exploite la phase de **négociation** d'un protocole. Lors d'un handshake TLS par exemple, le client et le serveur s'échangent leurs capacités cryptographiques. L'attaquant, positionné en **Man-in-the-Middle (MitM)**, modifie ces messages pour forcer l'utilisation d'une version ou d'un algorithme vulnérable.

\`\`\`
Client ──────────────────────────────── Serveur
        ClientHello (TLS 1.3)
   ┌─────────────────────────────┐
   │    Attaquant (MitM)         │
   │    Modifie → TLS 1.0        │
   └─────────────────────────────┘
        ClientHello (TLS 1.0) ──────►
                              ◄────── ServerHello (TLS 1.0)
\`\`\`


`,
    tags: ["Cybersécurité", "TLS", "Cryptographie", "Réseau"],
    date: "2025-02-28",
    readTime: "8 min",
    image: "/blog/downgrade-attacks.jpg",
  },
];
