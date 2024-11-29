import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className={`navbar ${pathname !== "/" ? "bg-transparent" : "bg-base-100"}`}>
      <div className="navbar-start">
        <div>{user && user.email}</div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user?.email ? (
          <img className="w-10 rounded-full border-2 border-black" src={user.photoURL} alt="" />
        ) : (
          <Link>
            <CgProfile size={30} />
          </Link>
        )}

        {user && user?.email ? (
          <Link to="/" className="bg-gray-900 text-white px-6 py-1" onClick={logOut}>
            Logout
          </Link>
        ) : (
          <Link to="/auth/login" className="bg-gray-900 text-white px-6 py-1">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
