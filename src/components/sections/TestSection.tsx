"use client";

export default function TestSection() {
  return (
    <section id="teste" className="py-20 px-4 bg-red-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-red-600">
            SEÇÃO DE TESTE
          </h2>
          <p className="text-lg text-red-800">
            Se você está vendo isso em vermelho, a renderização de seções está
            funcionando!
          </p>
        </div>
      </div>
    </section>
  );
}
