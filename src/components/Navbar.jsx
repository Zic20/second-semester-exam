import { Link, Outlet } from "react-router-dom";
import "../components/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
      </div>
      <div id="content">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
