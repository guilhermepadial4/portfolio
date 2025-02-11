import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  siteUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  siteUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="relative w-72 transform overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
      {/* Link para o site */}
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={image}
          alt={title}
          className="h-48 w-full rounded-t-lg object-cover"
        />
      </a>

      <div className="relative p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            <ArrowUpRight className="-mt-2 h-6 w-6 text-slate-600 transition-colors hover:text-white" />
          </a>
        </div>

        <p className="mt-2 text-slate-300">{description}</p>

        {/* Link para o GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
        >
          <Github className="h-5 w-5" />
          <span>Ver código no GitHub</span>
        </a>
      </div>
    </div>
  );
}
