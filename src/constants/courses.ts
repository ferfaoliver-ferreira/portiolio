export interface Course {
  id: number;
  title: string;
  provider: string;
  status: "Concluído" | "Estudando" | "Em Breve" | "Planejado";
  image: string;
  description?: string;
  date?: string;
  certificateUrl?: string;
  statusMessage?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Terraform Associate",
    provider: "HashiCorp",
    status: "Estudando",
    image: "/courses/terraform.png",
    description: "Infrastructure as Code com Terraform",
    statusMessage: "Em desenvolvimento",
  },
];
