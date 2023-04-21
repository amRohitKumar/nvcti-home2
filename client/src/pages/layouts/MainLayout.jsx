import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
