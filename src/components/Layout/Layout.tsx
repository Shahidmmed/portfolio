import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="main-container" data-uk-height-viewport="expand: true">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
