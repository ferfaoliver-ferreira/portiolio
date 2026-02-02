import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Experiência Profissional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional e contribuições em organizações de
              destaque.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

            {/* Experience Item */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        Fundadora da Clínica Alpha Fisio
                      </CardTitle>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <Badge variant="secondary" className="w-fit">
                        2007 - 2025
                      </Badge>
                      <span className="text-sm text-muted-foreground mt-1">
                        19 anos
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Sou fundadora da Clínica Alpha Fisio, um projeto que liderei
                    com dedicação por 19 anos, entre 2007 e 2025. Durante quase
                    duas décadas, fui a responsável direta pela visão
                    estratégica e pela gestão integral da organização,
                    garantindo não apenas a excelência no atendimento técnico,
                    mas também a sustentabilidade e o crescimento do negócio.
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Principais Responsabilidades:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Liderança e Gestão: Coordenação de equipes e
                            processos internos para assegurar um padrão elevado
                            de cuidado aos pacientes.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Desenvolvimento Organizacional: Implementação de
                            soluções para otimizar a operação da clínica ao
                            longo de 19 anos de mercado.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Estratégia de Negócio: Planejamento e execução de
                            ações que consolidaram a Alpha Fisio como uma
                            referência em sua área de atuação.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Experience Placeholder */}
            <div className="relative flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-muted-foreground">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 border-dashed">
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground">
                    <p className="text-xs mt-1">
                      Disponível para discussão durante entrevista
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
