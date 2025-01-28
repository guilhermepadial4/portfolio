import { Mail } from "lucide-react";

import Github from "../../../assets/github.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Telegram from "../../../assets/telegram.svg";
import Whatsapp from "../../../assets/whatsapp.svg";

export function Footer() {
  return (
    <>
      <footer className="mt-16 h-full w-full bg-zinc-800">
        <div className="ml-[25rem] mt-20 w-[35rem]">
          <h3 className="text-2xl font-bold">Contato</h3>

          <p className="mt-5 text-base text-gray-400">
            Com 5 anos de experiência em desenvolvimento Front-End, minha
            especialidade é criar interfaces web modernas e eficientes
            utilizando os frameworks mais atuais do mercado. Estou sempre aberto
            a novas oportunidades de colaborar em projetos desafiadores e
            inovadores. Se você procura um desenvolvedor comprometido e focado
            em entregar resultados de qualidade, entre em contato. Vamos
            conversar sobre como posso ajudar a transformar suas ideias em
            realidade!{" "}
          </p>

          <span className="mt-5 flex items-center gap-1">
            <Mail strokeWidth={1} size={20} />
            <p className="cursor-pointer font-semibold text-gray-400">
              guilhermepadial4@gmail.com
            </p>
          </span>
          <div className="mb-11 mt-8 flex gap-5">
            <img className="cursor-pointer" src={Whatsapp} alt="Icon X" />
            <img className="cursor-pointer" src={Linkedin} alt="Icon Youtube" />
            <img className="cursor-pointer" src={Github} alt="Icon Youtube" />
            <img className="cursor-pointer" src={Telegram} alt="Icon Youtube" />
          </div>
        </div>
      </footer>
    </>
  );
}
