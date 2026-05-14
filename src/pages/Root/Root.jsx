import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
