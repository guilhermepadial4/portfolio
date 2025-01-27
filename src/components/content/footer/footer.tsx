import { Mail } from "lucide-react";

import Instagram from "../../../assets/instagram.svg";
import X from "../../../assets/x.svg";
import Youtube from "../../../assets/youtube.svg";

export function Footer() {
  return (
    <>
      <footer className="mt-16 h-full w-full bg-zinc-800">
        <div className="ml-[25rem] mt-20 w-[35rem]">
          <h3 className="text-2xl font-bold">Contact</h3>

          <p className="mt-5 text-base text-gray-400">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies{" "}
          </p>

          <span className="mt-5 flex items-center gap-1">
            <Mail strokeWidth={1} size={20} />
            <p className="cursor-pointer font-semibold text-gray-400">
              test@email.com
            </p>
          </span>
          <div className="mt-8 flex gap-5 mb-11">
            <img
              className="cursor-pointer"
              src={Instagram}
              alt="Icon Instagram"
            />
            <img className="cursor-pointer" src={X} alt="Icon X" />
            <img className="cursor-pointer" src={Youtube} alt="Icon Youtube" />
          </div>
        </div>
      </footer>
    </>
  );
}
