const experiences = [
  {
    title: "Auxiliar Fiscal",
    date: "Nov 2024 - Jan 2025",
    description:
      "Lançamento de documentos fiscais, suporte no controle e arquivamento, além de conhecimentos em Escrita Fiscal e Retenções na Fonte.",
  },

  {
    title: "Auxiliar Fiscal",
    date: "Nov 2024 - Jan 2025",
    description:
      "Lançamento de documentos fiscais, suporte no controle e arquivamento, além de conhecimentos em Escrita Fiscal e Retenções na Fonte.",
  },

  {
    title: "Auxiliar Fiscal",
    date: "Nov 2024 - Jan 2025",
    description:
      "Lançamento de documentos fiscais, suporte no controle e arquivamento, além de conhecimentos em Escrita Fiscal e Retenções na Fonte.",
  },
];

export function Experience() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Título responsivo */}
      <h3 className="mt-9 text-center text-3xl font-extrabold text-blue-700 sm:text-5xl">
        EXPERIÊNCIA
      </h3>

      {/* Conteúdo flexível */}
      <div className="mt-9 w-full max-w-3xl space-y-8 px-4">
        {experiences.map((experience, index) => (
          <div key={index} className="space-y-4">
            <div className="flex flex-col border-b pb-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold text-gray-200 sm:text-2xl">
                {experience.title}
              </h3>
              <span className="text-sm text-gray-500">{experience.date}</span>
            </div>
            <p className="text-sm text-gray-400 sm:text-base">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
