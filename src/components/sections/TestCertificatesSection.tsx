"use client";

export default function TestCertificatesSection() {
  return (
    <section
      id="teste-certificados"
      className="py-20 px-4 bg-red-100 dark:bg-red-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-red-600 dark:text-red-300">
            SEÇÃO DE TESTE - CERTIFICADOS
          </h2>
          <p className="text-lg text-red-700 dark:text-red-200">
            Se você vê isso em VERMELHO, a seção está sendo renderizada
            corretamente!
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded border-2 border-red-600">
              <h3 className="font-bold">Terraform</h3>
              <p className="text-sm">HashiCorp</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded border-2 border-red-600">
              <h3 className="font-bold">Próximo</h3>
              <p className="text-sm">Em breve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
