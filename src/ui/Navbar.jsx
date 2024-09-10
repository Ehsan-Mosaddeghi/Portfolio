import { FaHome, FaUser } from "react-icons/fa";
import { MdEmail, MdLibraryBooks } from "react-icons/md";
import NavbarItem from "./NavbarItem";
import TranslateLang from "./TranslateLng";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { createPortal } from "react-dom";

const menuItems = [
  { name: "Home", url: "/", icon: <FaHome /> },
  { name: "Projects", url: "/projects", icon: <MdLibraryBooks /> },
  { name: "About", url: "/about", icon: <FaUser /> },
  { name: "News", url: "/news", icon: <MdEmail /> },
];

function Navbar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function handleSidebar() {
    setIsOpenSidebar((open) => !open);
  }

  return (
    <>
      <header className="fixed z-50 grid h-20 w-full grid-cols-2 items-center justify-items-center sm:grid-cols-3">
        {
          <CgMenu
            onClick={handleSidebar}
            className={`z-50 ml-6 block justify-self-start text-2xl duration-500 sm:hidden ${isOpenSidebar ? "rotate-180" : ""}`}
          />
        }

        {isOpenSidebar &&
          createPortal(<Sidebar items={menuItems} />, document.body)}

        <nav className="col-start-2 hidden items-center justify-center gap-8 rounded-2xl bg-zinc-900 px-4 py-[0.30rem] font-mono text-blue-300 transition-all duration-300 hover:gap-12 sm:flex">
          {menuItems.map((item) => (
            <NavbarItem item={item} key={item.name} />
          ))}
        </nav>
        <TranslateLang />
      </header>
    </>
  );
}

export default Navbar;
