"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { courses } from "../../constants/courses";

export default function CoursesSection() {
  return (
    <section id="certificados" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certificados</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Minha formação e desenvolvimento contínuo
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="relative">
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="aspect-square overflow-hidden bg-gray-200 flex items-center justify-center p-2">
                    {course.certificateUrl ? (
                      <a
                        href={course.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-contain"
                        />
                      </a>
                    ) : (
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-sm mb-2">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2">
                      {course.provider}
                    </p>
                    {course.description && (
                      <p className="text-xs text-gray-500 mb-3">
                        {course.description}
                      </p>
                    )}
                    {course.statusMessage && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">
                        {course.statusMessage}
                      </p>
                    )}
                    <div className="mt-auto pt-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                          course.status === "Concluído"
                            ? "border-green-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/50 dark:border-green-500"
                            : course.status === "Estudando"
                              ? "border-yellow-600 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/50 dark:border-yellow-500"
                              : course.status === "Em Breve"
                                ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 dark:border-blue-500"
                                : "border-slate-400 dark:border-slate-500 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700"
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>
                    {course.date && (
                      <p className="text-xs text-gray-500 mt-2">
                        {course.date}
                      </p>
                    )}
                    {course.certificateUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                        asChild
                      >
                        <a
                          href={course.certificateUrl}
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
      </div>
    </section>
  );
}
