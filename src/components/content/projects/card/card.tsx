import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";

export default function ProjectCard({ image, title, description }) {
  return (
    <div className="relative w-72 transform overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      <img
        src={image}
        alt={title}
        className="h-48 w-full rounded-t-lg object-cover"
      />

      <div className="relative p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <ArrowUpRight className="-mt-2 h-6 w-6 text-slate-600" />
        </div>

        <p className="mt-2 text-slate-300">{description}</p>

        <div className="mt-4 flex items-center gap-2 text-slate-400 transition-colors hover:text-white">
          <Github className="h-5 w-5" />
          <span>Ver código no GitHub</span>
        </div>
      </div>
    </div>
  );
}
