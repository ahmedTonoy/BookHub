import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
