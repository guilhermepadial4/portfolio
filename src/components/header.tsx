import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../assets/logo.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-zinc-800 px-6 py-4 text-base text-slate-100 md:justify-around">
      <img src={Logo} alt="Logo" className="h-10 md:h-auto" />

      <button
        className="text-white md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`absolute left-0 top-16 w-full bg-zinc-800 transition-transform duration-300 ease-in-out md:static md:flex md:w-auto ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 md:flex-row md:gap-16 md:py-0">
          <li className="cursor-pointer hover:text-gray-300">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <a href="#project">Projetos</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <a href="#experience">Experiência</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
