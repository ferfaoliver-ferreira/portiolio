# Portfolio Profissional - Fernanda Oliveira

<div align="center">

![Portfolio Banner](https://via.placeholder.com/800x200/1a1a1a/ffffff?text=Portfolio+Fernanda+Oliveira)

**Cloud Practitioner | Criando soluções em nuvem e experiências digitais**

[🌐 Ver Portfolio](https://portfolio-profissional-omega.vercel.app/) · [📧 Contato](mailto:fernanda@example.com) · [💼 LinkedIn](https://www.linkedin.com/in/fernanda-oliveira/)

---

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)

</div>

## Sobre o Projeto

Sou Fernanda Oliveira, Cloud Practitioner especializada em arquitetura e automação de soluções na AWS. Trabalho com infraestrutura como código, soluções serverless, segurança em nuvem e otimização de custos, entregando projetos escaláveis e observáveis que geram impacto real para usuários e negócios. Este portfólio reúne meus projetos, estudos de caso e demonstrações técnicas.

### ✨ Destaques

```
�  Interface moderna e intuitiva
📱  Design responsivo para todos os dispositivos  
⚡  Otimizado para performance e SEO
🌙  Tema claro/escuro dinâmico
🔧  Arquitetura modular e escalável
```

## Stack Tecnológica

<table>
<tr>
<td valign="top" width="33%">

**Frontend**
- Next.js 15.2.4
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React

</td>
<td valign="top" width="33%">

**Backend**
- Prisma ORM
- PostgreSQL
- JWT Auth
- Node.js
- Express.js

</td>
<td valign="top" width="34%">

**Ferramentas**
- Git & GitHub
- VS Code
- Docker
- Beekeeper Studio
- Insomnia

</td>
</tr>
</table>

## Início Rápido

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/<usuario>/Portfolio_De_Fernanda.git
cd Portfolio_De_Fernanda

# Instale as dependências
pnpm install

# Configure o ambiente
cp .env.example .env.local

# Execute as migrações (se aplicável)
pnpm prisma migrate dev

# Inicie o servidor
pnpm dev
```

Acesse `http://localhost:3000` para ver o projeto rodando.

## Estrutura do Projeto

```
Portfolio_Profissional/
│
├── app/                    # App Router (Next.js)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
│
├── src/
│   ├── components/        # Componentes React
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Seções da página
│   │   └── ui/           # UI components
│   ├── constants/        # Dados e configurações
│   ├── hooks/           # Hooks customizados
│   ├── lib/             # Utilitários
│   └── types/           # Tipos TypeScript
│
└── public/              # Assets estáticos
    └── images/          # Imagens dos projetos
```

## Projetos em Destaque

### 📘 E-book — Cuidados Pós-Operatórios (Infoproduto)
> Validação de um infoproduto técnico usando IA generativa para transformar conhecimento clínico em conteúdo comercializável.

**Stack**: IA Generativa · Engenharia de Prompt · Curadoria de Conteúdo · Hotmart  
**Status**: Concluído  
**Links**: (demo / repositório / case study — em breve)

### 🛡️ CityShield — Segurança Urbana Inteligente
> Plataforma de monitoramento e resposta automatizada para cidades inteligentes, com processamento de vídeo e análise por IA.

**Stack**: AWS Lambda · Amazon Bedrock · Kinesis · Rekognition · GuardDuty · DynamoDB · S3  
**Status**: Em Andamento  
**Links**: (repositório / case study — em breve)

### 🔧 Provisionamento VPC & EC2
> Arquitetura de rede isolada na AWS com deploy de instância EC2 demonstrando controle de tráfego e isolamento.

**Stack**: Amazon VPC · EC2 · Security Groups · Subnets · Route Tables  
**Status**: Concluído  
**Links**: (detalhes do projeto no repositório)

### 🔒 Bastion Host — Acesso Seguro
> Implementação de Bastion Host e políticas IAM para acesso SSH seguro via EC2 Instance Connect.

**Stack**: EC2 · Bastion Host · IAM · Security Groups · SSH  
**Status**: Concluído

### 🔐 Gestão de Identidade e Acesso (IAM)
> Criação de usuários, grupos e políticas customizadas aplicando o princípio do menor privilégio.

**Stack**: AWS IAM · Policies · AWS Organizations  
**Status**: Concluído

### ⚙️ Infraestrutura Escalável e Alta Disponibilidade
> Arquitetura com Auto Scaling, Application Load Balancer e implantação multi-AZ para resiliência.

**Stack**: EC2 · Auto Scaling Group · ALB · CloudWatch · SNS  
**Status**: Concluído

### 🧩 Processamento Serverless de Arquivos
> Pipeline serverless que processa arquivos enviados ao S3 com AWS Lambda e persiste metadados no DynamoDB.

**Stack**: Lambda · S3 · DynamoDB · Python  
**Status**: Concluído

### 📜 Infraestrutura como Código (CloudFormation)
> Templates YAML para provisionamento determinístico de infraestrutura (VPC, EC2, stacks relacionados).

**Stack**: AWS CloudFormation · YAML · IaC  
**Status**: Concluído

### 📂 Armazenamento Compartilhado (Amazon EFS)
> Implementação de EFS para acesso compartilhado entre múltiplas instâncias EC2 com alta disponibilidade.

**Stack**: Amazon EFS · EC2 · NFS  
**Status**: Concluído

_Observação_: links e repositórios específicos estão disponíveis no código do projeto (`src/constants/projects.ts`) e serão adicionados ao README assim que forem publicados.

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Servidor de produção |
| `pnpm lint` | Verificação de código |

## Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Alternativas
- **Netlify** - Para sites estáticos
- **Railway** - Com banco de dados incluído
- **Vercel** - Integração perfeita com Next.js

## Contato

<div align="center">

**Fernanda Oliveira**  
*Cloud Practitioner*

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fernanda-oliveira/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/<usuario>)
[![Email](https://img.shields.io/badge/-Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:fernanda@example.com)

---

*Construído com dedicação em 2025*

</div>
