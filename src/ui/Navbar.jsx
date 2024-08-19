import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

function Navbar() {
  return (
    <header className="fixed w-full h-16 flex justify-center items-center">
      <nav className="flex justify-center items-center gap-4 p-4 bg-zinc-900 rounded-full text-primary hover:gap-7 transition-all duration-300 ">
        {menuItems.map((item) => (
          <Link
            to={item.url}
            key={item.name}
            className="hover:text-slate-200 transition duration-300"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
