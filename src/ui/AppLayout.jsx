import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { useTranslation } from "react-i18next";

function AppLayout() {
  const { i18n } = useTranslation();

  return (
    <div
      className={`flex min-h-svh flex-col bg-gradient-to-b from-slate-500 to-stone-900 text-primary duration-300 ${i18n.language === "fa" ? "text-right font-Rubik" : "font-sans"}`}
    >
      <Navbar />
      <section className="container m-auto mt-20 flex-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default AppLayout;
