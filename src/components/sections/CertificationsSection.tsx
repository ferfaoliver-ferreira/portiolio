"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { certifications } from "../../constants/certifications";

export default function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Certificações/Certificados
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Minhas qualificações profissionais e cursos em desenvolvimento
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="flex justify-center gap-4 bg-transparent p-0 h-auto mb-12">
            <TabsTrigger
              value="todos"
              className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="certificacoes"
              className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
            >
              Certificações
            </TabsTrigger>
            <TabsTrigger
              value="certificados"
              className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
            >
              Certificados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="todos">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[...certifications]
                .sort((a, b) => {
                  const pa = a.priority ?? 999;
                  const pb = b.priority ?? 999;
                  if (pa !== pb) return pa - pb;
                  if (a.type === "certificacao" && b.type !== "certificacao")
                    return -1;
                  if (a.type !== "certificacao" && b.type === "certificacao")
                    return 1;
                  return 0;
                })
                .map((cert) => (
                  <div key={cert.id} className="relative">
                    <span className="absolute top-2 left-2 z-10 inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-500 text-white shadow-md">
                      {cert.type === "certificacao"
                        ? "Certificação"
                        : "Certificado"}
                    </span>
                    <Card className="overflow-hidden h-full flex flex-col">
                      <CardContent className="p-0 flex-1 flex flex-col">
                        <div className="aspect-square overflow-hidden bg-gray-200 flex items-center justify-center p-2">
                          {cert.credentialUrl ? (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                            >
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-contain"
                              />
                            </a>
                          ) : (
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="font-semibold text-sm mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            {cert.issuer}
                          </p>
                          {cert.examCode && (
                            <p className="text-xs text-gray-500 mb-3">
                              Código: {cert.examCode}
                            </p>
                          )}
                          {cert.statusMessage && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">
                              {cert.statusMessage}
                            </p>
                          )}
                          <div className="mt-auto pt-3">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                                cert.status === "Certificado"
                                  ? "border-green-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/50 dark:border-green-500"
                                  : cert.status === "Estudando"
                                    ? "border-yellow-600 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/50 dark:border-yellow-500"
                                    : cert.status === "Em Breve"
                                      ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 dark:border-blue-500"
                                      : "border-slate-400 dark:border-slate-500 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700"
                              }`}
                            >
                              {cert.status}
                            </span>
                          </div>
                          {cert.date && (
                            <p className="text-xs text-gray-500 mt-2">
                              {cert.date}
                            </p>
                          )}
                          {cert.credentialUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4 w-full"
                              asChild
                            >
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                {cert.type === "certificacao"
                                  ? "Ver Certificação"
                                  : "Ver Certificado"}
                                <ExternalLink size={14} />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="certificacoes">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications
                .filter((cert) => cert.type === "certificacao")
                .map((cert) => (
                  <div key={cert.id} className="relative">
                    <span className="absolute top-2 left-2 z-10 inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-500 text-white shadow-md">
                      Certificação
                    </span>
                    <Card className="overflow-hidden h-full flex flex-col">
                      <CardContent className="p-0 flex-1 flex flex-col">
                        <div className="aspect-square overflow-hidden bg-gray-200 flex items-center justify-center p-2">
                          {cert.credentialUrl ? (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                            >
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-contain"
                              />
                            </a>
                          ) : (
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="font-semibold text-sm mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            {cert.issuer}
                          </p>
                          {cert.examCode && (
                            <p className="text-xs text-gray-500 mb-3">
                              Código: {cert.examCode}
                            </p>
                          )}
                          {cert.statusMessage && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">
                              {cert.statusMessage}
                            </p>
                          )}
                          <div className="mt-auto pt-3">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                                cert.status === "Certificado"
                                  ? "border-green-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/50 dark:border-green-500"
                                  : cert.status === "Estudando"
                                    ? "border-yellow-600 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/50 dark:border-yellow-500"
                                    : cert.status === "Em Breve"
                                      ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 dark:border-blue-500"
                                      : "border-slate-400 dark:border-slate-500 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700"
                              }`}
                            >
                              {cert.status}
                            </span>
                          </div>
                          {cert.date && (
                            <p className="text-xs text-gray-500 mt-2">
                              {cert.date}
                            </p>
                          )}
                          {cert.credentialUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4 w-full"
                              asChild
                            >
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                Ver Certificação
                                <ExternalLink size={14} />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="certificados">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications
                .filter((cert) => cert.type === "certificado")
                .map((cert) => (
                  <div key={cert.id} className="relative">
                    <span className="absolute top-2 left-2 z-10 inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-500 text-white shadow-md">
                      Certificado
                    </span>
                    <Card className="overflow-hidden h-full flex flex-col">
                      <CardContent className="p-0 flex-1 flex flex-col">
                        <div className="aspect-square overflow-hidden bg-gray-200 flex items-center justify-center p-2">
                          {cert.credentialUrl ? (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                            >
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-contain"
                              />
                            </a>
                          ) : (
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="font-semibold text-sm mb-2">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            {cert.issuer}
                          </p>
                          {cert.examCode && (
                            <p className="text-xs text-gray-500 mb-3">
                              Código: {cert.examCode}
                            </p>
                          )}
                          {cert.statusMessage && (
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">
                              {cert.statusMessage}
                            </p>
                          )}
                          <div className="mt-auto pt-3">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                                cert.status === "Certificado"
                                  ? "border-green-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/50 dark:border-green-500"
                                  : cert.status === "Estudando"
                                    ? "border-yellow-600 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/50 dark:border-yellow-500"
                                    : cert.status === "Em Breve"
                                      ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 dark:border-blue-500"
                                      : "border-slate-400 dark:border-slate-500 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700"
                              }`}
                            >
                              {cert.status}
                            </span>
                          </div>
                          {cert.date && (
                            <p className="text-xs text-gray-500 mt-2">
                              {cert.date}
                            </p>
                          )}
                          {cert.credentialUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4 w-full"
                              asChild
                            >
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                Ver Certificado
                                <ExternalLink size={14} />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
