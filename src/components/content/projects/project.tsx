import ProjectCard from "./card/card";

const projects = [
  {
    image:
      "https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png",
    title: "Meu Primeiro Projeto",
    description:
      "Este é um projeto incrível que desenvolvi para aprender React.",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dboLYv5Ftyde-t6ofPdBz496isYAep_Evw&s",
    title: "Projeto de Portfólio",
    description: "Um portfólio com React, Tailwind e ShadCN.",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dboLYv5Ftyde-t6ofPdBz496isYAep_Evw&s",
    title: "Projeto de Portfólio",
    description: "Um portfólio com React, Tailwind e ShadCN.",
  },
];

export default function Projects() {
  return (
    <>
      <p className="mt-16 text-4xl font-extrabold text-orange-600">Projetos</p>

      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
}
