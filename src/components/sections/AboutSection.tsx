import { MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sobre mim</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Em transição de carreira para área de tecnologia da informação,
                mais especificamente em AWS Cloud e IA.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Tenho experiência em atendimento ao público na área da saúde há
                18 anos, atuando em minha clínica própria, tanto no
                gerenciamento de colaboradores como atendendo os pacientes, no
                qual me dediquei muito em conhecimento técnico e relacionamento
                interpessoal.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Atualmente, sou aluna da formação AWS Re/Start na Escola da
                Nuvem. Estou indo além da teoria e aplicando conhecimentos
                práticos em serviços fundamentais como EC2 (computação), RDS
                (banco de dados) e S3 (armazenamento), preparando-me para a
                certificação Cloud Practitioner.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Meu objetivo é ter uma primeira oportunidade para não apenas
                criar software, mas arquitetar soluções preparadas para a nuvem
                e Inteligência Artificial.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou muito comunicativa, adoro trabalhar em equipe, construir
                soluções aos desafios.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mt-8">
                <MapPin className="w-5 h-5" />
                <span>Brasil</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/images/FotoDeFernanda.jpeg"
                  alt="Fernanda Ferreira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
