import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-gradient-to-b from-slate-500 to-stone-900 text-primary">
      <Navbar />
      <section className="container m-auto mt-20 flex-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default AppLayout;
