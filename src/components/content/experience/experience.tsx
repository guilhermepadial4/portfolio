const experiences = [
  {
    title: "Freelancer",
    date: "Out 2024",
    description:
      "Atuando como freelancer, desenvolvi projetos web completos, desde a concepção até a entrega final, garantindo soluções escaláveis e responsivas. Trabalhei com tecnologias modernas como React, Sass, Bootstrap e outras ferramentas para criar interfaces intuitivas e performáticas. Além do desenvolvimento front-end, tive experiência na integração de APIs e no gerenciamento de funcionalidades no back-end, sempre focando em boas práticas de código e otimização de performance.",
  },
];

export function Experience() {
  return (
    <div id="experience" className="flex w-full flex-col items-center">
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
