import { Outlet } from "react-router";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default AppLayout;
