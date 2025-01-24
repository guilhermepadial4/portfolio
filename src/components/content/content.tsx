import Avatar from "../../assets/Avatar.png";
import Logos from "../../assets/Logos.svg";
import { Button } from "../ui/button";
import { Experience } from "./experience/experience";
import Projects from "./projects/project";

export function Content() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-zinc-900 text-white">
      <img className="mb-7 mt-6 h-32 w-32" src={Avatar} alt="avatar" />

      <p className="text-5xl font-extrabold">I do code and</p>
      <p className="text-5xl font-extrabold">make content about it!</p>

      <div className="mt-7 w-[34rem]">
        <p className="text-center text-slate-200">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          className="rounded-3xl p-6 text-base text-slate-950"
        >
          Get in Touch
        </Button>

        <Button className="rounded-3xl border-2 bg-transparent p-6 text-base text-white">
          Get in Touch
        </Button>
      </div>

      <p className="mt-12 text-xl text-neutral-300">EXPERIENCE WITH</p>

      <img className="mt-10" src={Logos} alt="Logos" />

      <Projects />
      <Experience />
    </div>
  );
}
