import Avatar from "../../assets/Avatar.png";
import Logos from "../../assets/Logos.svg";
import { Button } from "../ui/button";
import { Experience } from "./experience/experience";
import { Footer } from "./footer/footer";
import Projects from "./projects/project";

export function Content() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-zinc-900 text-white">
      <img className="mb-7 mt-6 h-32 w-32" src={Avatar} alt="avatar" />

      <p className="text-5xl font-extrabold">Transformando Ideias em</p>
      <p className="text-5xl font-extrabold">Experiências Online</p>

      <div className="mt-7 w-[34rem]">
        <p className="text-center text-base text-slate-300">
          Olá! Sou um programador Front-End apaixonado por criar experiências
          web modernas, interativas e funcionais. Com vasta experiência nos
          frameworks mais atuais do mercado, dedico-me a transformar ideias em
          interfaces intuitivas e responsivas, sempre com foco em performance e
          usabilidade. Minha missão é unir tecnologia e design para entregar
          soluções que realmente impactam o usuário final. Vamos construir algo
          incrível juntos?
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          className="rounded-3xl p-6 text-base text-zinc-900"
        >
          Entre em Contato
        </Button>

        <Button className="rounded-3xl border-2 bg-transparent p-6 text-base text-white">
          Dowloand CV
        </Button>
      </div>

      <p className="mt-12 text-xl text-neutral-300">EXPERIÊNCIA COM</p>

      <img className="mt-10" src={Logos} alt="Logos" />

      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
