import { Mail } from "lucide-react";

import Github from "../../../assets/github.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Telegram from "../../../assets/telegram.svg";
import Whatsapp from "../../../assets/whatsapp.svg";

export function Footer() {
  return (
    <>
      <footer id="contact" className="mt-16 h-full w-full bg-zinc-800">
        <div className="mx-auto mt-20 w-full max-w-screen-lg px-6 sm:px-12 lg:px-0">
          <h3 className="text-center text-2xl font-bold sm:text-left">
            Contato
          </h3>

          <p className="mt-5 text-center text-base text-gray-400 sm:text-left">
            Com 5 anos de experiência em desenvolvimento Front-End, minha
            especialidade é criar interfaces web modernas e eficientes
            utilizando os frameworks mais atuais do mercado. Estou sempre aberto
            a novas oportunidades de colaborar em projetos desafiadores e
            inovadores. Se você procura um desenvolvedor comprometido e focado
            em entregar resultados de qualidade, entre em contato. Vamos
            conversar sobre como posso ajudar a transformar suas ideias em
            realidade!
          </p>

          <div className="mt-5 flex items-center justify-center gap-1 sm:justify-start">
            <Mail strokeWidth={1} size={20} />
            <p className="cursor-pointer font-semibold text-gray-400">
              <a href="mailto:guilhermepadial4@gmail.com" target="_blank">
                guilhermepadial4@gmail.com
              </a>
            </p>
          </div>

          <div className="mb-11 mt-8 flex justify-center gap-5 sm:justify-start">
            <a
              href="https://api.whatsapp.com/send/?phone=5511995792143&text=Ol%C3%A1%2C+quero+saber+mais+sobre+seus+servi%C3%A7os%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-6 cursor-pointer sm:w-6"
                src={Whatsapp}
                alt="Icone WhatsApp"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/guilhermepadial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-6 cursor-pointer sm:w-6"
                src={Linkedin}
                alt="Icone LinkedIn"
              />
            </a>
            <a
              href="https://github.com/guilhermepadial4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-6 cursor-pointer sm:w-6"
                src={Github}
                alt="Icone GitHub"
              />
            </a>
            <a
              href="https://t.me/+5511995792143"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-6 cursor-pointer sm:w-6"
                src={Telegram}
                alt="Icone Telegram"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
