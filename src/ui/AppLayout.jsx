import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { useTranslation } from "react-i18next";

function AppLayout() {
  const { i18n } = useTranslation();

  return (
    <div
      className={`flex min-h-svh flex-col bg-gradient-to-b from-from to-to bg-cover bg-center bg-no-repeat text-primary transition-all duration-[400ms] ${i18n.language === "fa" ? "text-right font-Rubik" : "font-sans"}`}
    >
      <Navbar />
      <section className="container m-auto mt-12 flex-auto sm:mt-[4.5rem]">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default AppLayout;
