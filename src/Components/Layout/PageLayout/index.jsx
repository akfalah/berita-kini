import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <main className="w-screen">
      <Navbar />
      <div className="mt-[108px] p-[72px]">{children}</div>
      <Footer />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Layout;