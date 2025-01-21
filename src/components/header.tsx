import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex items-center justify-around bg-zinc-800 text-base text-slate-100">
      <img src={Logo} alt="Logo" />
      <div className="m-7 flex items-center justify-center gap-16">
        <p>Home</p>
        <p>Projects</p>
        <p>Experience</p>
        <p>Contact</p>
      </div>
    </header>
  );
}
