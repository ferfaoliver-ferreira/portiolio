import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { technologies } from "../../constants/technologies";

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tecnologias</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias de infraestrutura em nuvem que utilizo para criar
              soluções robustas e escaláveis.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="text-center hover:shadow-lg transition-shadow max-w-2xl w-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Infraestrutura</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {technologies.infrastructure.map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
