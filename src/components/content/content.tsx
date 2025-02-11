import Avatar from "../../assets/Avatar.png";
import Logos from "../../assets/Logos.svg";
import { Button } from "../ui/button";
import { Experience } from "./experience/experience";
import { Footer } from "./footer/footer";
import Projects from "./projects/project";

export function Content() {
  return (
    <div id="home" className="flex h-full flex-col items-center justify-center bg-zinc-900 px-6 text-white">
      {/* Avatar Responsivo */}
      <img
        className="mb-7 mt-6 h-24 w-24 sm:h-32 sm:w-32"
        src={Avatar}
        alt="avatar"
      />

      {/* Título Responsivo */}
      <p className="text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
        Transformando Ideias em
      </p>
      <p className="text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
        Experiências Online
      </p>

      {/* Texto Responsivo */}
      <div className="mt-7 max-w-[90%] sm:max-w-[34rem]">
        <p className="text-center text-base leading-relaxed text-slate-300 sm:text-lg">
          Olá! Sou um programador Front-End apaixonado por criar experiências
          web modernas, interativas e funcionais. Com vasta experiência nos
          frameworks mais atuais do mercado, dedico-me a transformar ideias em
          interfaces intuitivas e responsivas, sempre com foco em performance e
          usabilidade. Minha missão é unir tecnologia e design para entregar
          soluções que realmente impactam o usuário final. Vamos construir algo
          incrível juntos?
        </p>
      </div>

      {/* Botões Responsivos */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://api.whatsapp.com/send/?phone=5511995792143&text=Ol%C3%A1%2C+quero+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0"
          target="_blank"
        >
          <Button
            variant="outline"
            className="rounded-3xl p-4 text-sm text-zinc-900 sm:p-6 sm:text-base"
          >
            Entre em Contato
          </Button>
        </a>

        <a href="/curriculo.docx" download="Curriculo Guilherme Padial.docx">
          <Button className="rounded-3xl border-2 bg-transparent p-4 text-sm text-white sm:p-6 sm:text-base">
            Download CV
          </Button>
        </a>
      </div>

      {/* Título "EXPERIÊNCIA COM" Responsivo */}
      <p className="mt-12 text-center text-lg text-neutral-300 sm:text-xl">
        EXPERIÊNCIA COM
      </p>

      {/* Logos Responsivas */}
      <img
        className="mt-10 max-w-[80%] sm:max-w-[60%] md:max-w-[50%]"
        src={Logos}
        alt="Logos"
      />

      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
