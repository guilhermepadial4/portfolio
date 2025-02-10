import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
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

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dboLYv5Ftyde-t6ofPdBz496isYAep_Evw&s",
    title: "Projeto de Portfólio",
    description: "Um portfólio com React, Tailwind e ShadCN.",
  },
];

export default function Projects() {
  return (
    <div className="w-full px-4">
      <p className="mt-16 text-center text-3xl font-extrabold text-orange-600 sm:text-4xl">
        Projetos
      </p>

      {projects.length <= 3 ? (
        // Exibir em grid quando houver 3 ou menos projetos
        <div className="mt-8 flex flex-wrap justify-center gap-6 px-2 sm:px-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              className="max-w-[350px]"
            />
          ))}
        </div>
      ) : (
        // Ativar carrossel quando houver 4 ou mais projetos
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide no mobile
            768: { slidesPerView: 2 }, // 2 slides no tablet
            1024: { slidesPerView: 3 }, // 3 slides no desktop
            1280: { slidesPerView: 4 }, // 4 slides em telas maiores
          }}
          className="mx-auto mt-8 flex w-full max-w-4xl justify-center"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                className="mx-auto max-w-[350px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
