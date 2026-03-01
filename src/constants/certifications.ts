export interface Certification {
  id: number;
  title: string;
  issuer: string;
  status: "Certificado" | "Estudando" | "Em Breve" | "Próximo Objetivo";
  image: string;
  type: "certificacao" | "certificado";
  examCode?: string;
  date?: string;
  credentialUrl?: string;
  statusMessage?: string;
  priority?: number;
}

export const certifications: Certification[] = [
  {
    id: 11,
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/Imagens dos Cetificados de Fernanda/awsrestart.jpeg",
    type: "certificado",
    date: "15 de fevereiro de 2026",
    credentialUrl:
      "https://www.credly.com/badges/4c5b8004c38a-452e-8f15-4c26fe59daec/public_url",
    priority: 1,
  },
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/practitioner.png",
    type: "certificacao",
    examCode: "CLF-C02",
    date: "27 de fevereiro de 2026",
    credentialUrl: "https://www.credly.com/badges/57e9ddc6-a12b-4e3d-ac6b-198c6624d210",
    priority: 2,
  },
  {
    id: 2,
    title: "Fundamentals Of Machine Learning And Artificial Intelligence",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "05 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertificado%20Fundamentos%20Machine%20Learning%20e%20IA%2Epdf&listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas",
  },
  {
    id: 3,
    title: "Developing Machine Learning Solutions (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "06 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&viewid=dd4e9ec1%2Ddf4e%2D4ca6%2Dbf1a%2D971f44128776&id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertif%2E%20AWS%20Developer%20Machine%20Learning%2Epdf&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas",
  },
  {
    id: 4,
    title: "Essentials Of Prompt Engineering (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "09 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertif%2E%20AWS%20Engenharia%20de%20Prompts%20IA%2Epdf&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas&viewid=dd4e9ec1%2Ddf4e%2D4ca6%2Dbf1a%2D971f44128776",
  },
  {
    id: 5,
    title:
      "Exploring Artificial Intelligence Use Cases And Applications (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "06 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertif%2E%20AWS%20Explorando%20o%20uso%20da%20intelig%C3%AAncia%20artificial%2Epdf&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas&viewid=dd4e9ec1%2Ddf4e%2D4ca6%2Dbf1a%2D971f44128776",
  },
  {
    id: 6,
    title: "Responsible Artificial Intelligence Practices (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "06 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertif%2E%20AWS%20Pr%C3%A1ticas%20Respons%C3%A1veis%20em%20IA%2Epdf&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas&viewid=dd4e9ec1%2Ddf4e%2D4ca6%2Dbf1a%2D971f44128776",
  },
  {
    id: 7,
    title: "Security, Compliance, And Governance For AI Solutions (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "07 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertif%2E%20AWS%20Seguran%C3%A7a%20e%20Governan%C3%A7a%20em%20IA%2Epdf&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas&viewid=dd4e9ec1%2Ddf4e%2D4ca6%2Dbf1a%2D971f44128776",
  },
  {
    id: 8,
    title: "No-Code Machine Learning And Generative AI On AWS (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "10 de fevereiro de 2026",
    credentialUrl:
      "https://1drv.ms/b/c/3806ae2109426ad6/IQDwvKJNLi8rTLtvtY7TTC2vAVd0nNJDWRkuxfdITfXiQwY",
  },
  {
    id: 9,
    title: "Introduction To Generative AI - Art Of The Possible (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "10 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&viewid=dd4e9ec1%2Ddf4e%2D4ca6%2Dbf1a%2D971f44128776&id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertif%2E%20A%20arte%20do%20poss%C3%ADvel%20IA%20Generativa%2Epdf&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas",
  },
  {
    id: 10,
    title:
      "Developing Generative Artificial Intelligence Solutions (Português)",
    issuer: "Amazon Web Services",
    status: "Certificado",
    image: "/certification/aws_todos.jpeg",
    type: "certificado",
    date: "06 de fevereiro de 2026",
    credentialUrl:
      "https://onedrive.live.com/?listurl=%2Fpersonal%2F3806ae2109426ad6%2FDocuments&id=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas%2FCertif%2E%20AWS%20Developer%20IA%2Epdf&parent=%2Fpersonal%2F3806ae2109426ad6%2FDocuments%2FCertificados%20e%20Diplomas&viewid=dd4e9ec1%2Ddf4e%2D4ca6%2Dbf1a%2D971f44128776",
  },
];
