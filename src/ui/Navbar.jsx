import { useState } from "react";
import { createPortal } from "react-dom";
import { CgMenu } from "react-icons/cg";
import { FaHome, FaUser } from "react-icons/fa";
import { MdEmail, MdLibraryBooks } from "react-icons/md";
import DarkModeToggle from "./DarkModeToggle";
import NavbarItem from "./NavbarItem";
import Sidebar from "./Sidebar";
import TranslateLang from "./TranslateLng";
import { ImCross } from "react-icons/im";

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
        <ImCross
          onClick={handleSidebar}
          className={`transi z-50 ml-6 justify-self-start text-xl transition-all ${isOpenSidebar ? "relative opacity-100" : "absolute rotate-180 opacity-0"}`}
        />
        <CgMenu
          onClick={handleSidebar}
          className={`z-50 ml-6 block justify-self-start text-2xl transition-all sm:hidden ${isOpenSidebar ? "absolute opacity-0" : "relative rotate-180 opacity-100"}`}
        />

        {isOpenSidebar &&
          createPortal(<Sidebar items={menuItems} />, document.body)}

        <nav className="col-start-2 hidden items-center justify-center gap-8 rounded-2xl bg-menu px-4 py-[0.30rem] font-mono text-menu duration-150 hover:gap-12 sm:flex">
          {menuItems.map((item) => (
            <NavbarItem item={item} key={item.name} />
          ))}
        </nav>

        <div className="relative flex items-center">
          <TranslateLang />
          <DarkModeToggle />
        </div>
      </header>
    </>
  );
}

export default Navbar;
