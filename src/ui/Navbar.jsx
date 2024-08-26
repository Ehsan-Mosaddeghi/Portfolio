import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

function Navbar() {
  return (
    <header className="fixed z-50 flex h-20 w-full items-center justify-center">
      <nav className="flex items-center justify-center gap-4 rounded-full bg-zinc-900 p-4 text-primary transition-all duration-300 hover:gap-7">
        {menuItems.map((item) => (
          <Link
            to={item.url}
            key={item.name}
            className="transition duration-300 hover:text-slate-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
