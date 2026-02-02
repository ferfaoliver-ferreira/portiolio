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
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Estudando",
    image: "/certification/practitioner.png",
    type: "certificacao",
    examCode: "CLF-C02",
    date: "Fevereiro 2026",
    statusMessage: "Prova prevista para Fevereiro - 2026",
  },
  {
    id: 2,
    title: "Terraform Associate",
    issuer: "HashiCorp",
    status: "Em Breve",
    image: "/certificates/terraform.png",
    type: "certificado",
    statusMessage: "Em breve",
  },
  {
    id: 3,
    title: "Próximo Certificado",
    issuer: "-",
    status: "Em Breve",
    image: "/certificates/placeholder.png",
    type: "certificado",
    statusMessage: "Em breve",
  },
];
