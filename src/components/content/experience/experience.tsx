const experiences = [
  {
    title: "Auxiliar Fiscal",
    date: "Nov 2024 - Jan 2025",
    description:
      "Lançamento de documentos fiscais, suporte no controle e arquivamento, além de conhecimentos em Escrita Fiscal e Retenções na Fonte. Lançamento de documentos fiscais, suporte no controle e arquivamento.",
  },

  {
    title: "Auxiliar Fiscal",
    date: "Nov 2024 - Jan 2025",
    description:
      "Lançamento de documentos fiscais, suporte no controle e arquivamento, além de conhecimentos em Escrita Fiscal e Retenções na Fonte. Lançamento de documentos fiscais, suporte no controle e arquivamento.",
  },

  {
    title: "Auxiliar Fiscal",
    date: "Nov 2024 - Jan 2025",
    description:
      "Lançamento de documentos fiscais, suporte no controle e arquivamento, além de conhecimentos em Escrita Fiscal e Retenções na Fonte. Lançamento de documentos fiscais, suporte no controle e arquivamento.",
  },
];

export function Experience() {
  return (
    <>
      <h3 className="text-4xl font-extrabold text-blue-700">EXPERIÊNCIA</h3>

      <div className="mt-9 w-[35rem] space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-2xl font-semibold text-gray-200">
                {experience.title}
              </h3>
              <span className="text-sm text-gray-500">{experience.date}</span>
            </div>
            <p className="text-gray-400">{experience.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
