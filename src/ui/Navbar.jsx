import { FaHome, FaUser } from "react-icons/fa";
import { MdEmail, MdLibraryBooks } from "react-icons/md";
import NavbarItem from "./NavbarItem";
import TranslateLang from "./TranslateLng";

const menuItems = [
  { name: "Home", url: "/", icon: <FaHome /> },
  { name: "Projects", url: "/projects", icon: <MdLibraryBooks /> },
  { name: "About", url: "/about", icon: <FaUser /> },
  { name: "News", url: "/news", icon: <MdEmail /> },
];

function Navbar() {
  return (
    <header className="fixed z-50 grid h-20 w-full grid-cols-3 items-center justify-items-center">
      <nav className="col-start-2 flex items-center justify-center gap-8 rounded-2xl bg-zinc-900 px-4 py-[0.30rem] font-mono text-blue-300 transition-all duration-300 hover:gap-12">
        {menuItems.map((item) => (
          <NavbarItem item={item} key={item.name} />
        ))}
      </nav>
      <TranslateLang />
    </header>
  );
}

export default Navbar;
