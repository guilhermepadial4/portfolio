import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import Eleva from "../../../assets/eleva.png";
import Like from "../../../assets/like.png";
import ProjectCard from "./card/card";

const projects = [
  {
    image: Eleva,
    title: "Eleconfort Elevadores",
    description:
      "Este é um projeto construido em React e utilizando bibliotecas de estilização como o SASS.",
    siteUrl: "https://eleconfort-elevadores.vercel.app/",
    githubUrl: "https://github.com/guilhermepadial4/eleconfort-elevadores",
  },

  {
    image: Like,
    title: "LikeYou",
    description: "Este é um projeto construido em HTML, CSS e Javascript puro.",
    siteUrl: "https://guilhermepadial4.github.io/likeyou/index.html",
    githubUrl: "https://github.com/guilhermepadial4/likeyou",
  },
];

export default function Projects() {
  return (
    <div id="project" className="w-full px-4">
      <p className="mt-16 text-center text-3xl font-extrabold text-orange-600 sm:text-4xl">
        Projetos
      </p>

      {projects.length <= 3 ? (
        <div className="mt-8 flex flex-wrap justify-center gap-6 px-2 sm:px-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              siteUrl={project.siteUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={290}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mx-auto mt-8 flex w-full max-w-4xl justify-center"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                siteUrl={project.siteUrl}
                githubUrl={project.githubUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
