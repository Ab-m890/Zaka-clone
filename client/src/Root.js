import { Outlet } from "react-router-dom";

//navbar & footer
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

//scroll to top
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function Root() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default Root;