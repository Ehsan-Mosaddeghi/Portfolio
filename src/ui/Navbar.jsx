import { FaHome, FaUser } from "react-icons/fa";
import { MdEmail, MdLibraryBooks } from "react-icons/md";
import NavbarItem from "./NavbarItem";

const menuItems = [
  { name: "Home", url: "/", icon: <FaHome /> },
  { name: "Projects", url: "/projects", icon: <MdLibraryBooks /> },
  { name: "About", url: "/about", icon: <FaUser /> },
  { name: "Contact", url: "/contact", icon: <MdEmail /> },
];

function Navbar() {
  return (
    <header className="fixed z-50 flex h-20 w-full items-center justify-center">
      <nav className="flex items-center justify-center gap-8 rounded-full bg-zinc-900 px-4 py-[0.25rem] text-primary transition-all duration-300 hover:gap-12">
        {menuItems.map((item) => (
          <NavbarItem item={item} key={item.name} />
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
