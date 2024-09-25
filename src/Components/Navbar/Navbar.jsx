import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <NavLink to={'/'}><li><a>Home</a></li></NavLink>
                    <NavLink to={'/listed'}><li><a>Listed Books</a></li></NavLink>
                    <NavLink to={'/page_to_read'}><li><a>Page to read</a></li></NavLink>
                </ul>
                </div>
                <a className="btn btn-ghost text-2xl">Rokomari Book House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <NavLink to={'/'}><li><a>Home</a></li></NavLink>
                <NavLink to={'/listed'}><li><a>Listed Books</a></li></NavLink>
                <NavLink to={'/page_to_read'}><li><a>Page to read</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn text-white bg-green-500">Sign In</a>
                <a className="btn text-white bg-cyan-500">Sign Up</a>
            </div>
    </div>
    );
};

export default Navbar;