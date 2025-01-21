import Avatar from "../assets/Avatar.png";
import { Button } from "./ui/button";

export function Content() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-900 text-white">
      <img className="mb-7 h-32 w-32" src={Avatar} alt="avatar" />

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

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          className="rounded-3xl p-6 text-base text-slate-950"
        >
          Get in Touch
        </Button>

        <Button
          className="rounded-3xl p-6 text-base text-white bg-transparent border-2"
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
