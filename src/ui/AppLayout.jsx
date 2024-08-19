import { Outlet } from "react-router";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
