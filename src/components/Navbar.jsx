import React from "react";
import mylogo from "../assets/logo.jpeg";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="">
      <div className="navbar fixed top-0 left-0 right-0 z-40 bg-gradient-to-l from-biru to-ungu">
        <div className="navbar-start sm:text-center sm:text-lg sm:font-font-candu font-font-candu">
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
              className="menu menu-sm dropdown-content -mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="beranda-section"
                  smooth={true}
                  duration={500}
                  className="text-white cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="aplikasi-section"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Aplikasi
                </Link>
              </li>
              <li>
                <Link
                  to="card-section"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Buku
                </Link>
              </li>
            </ul>
          </div>
          <img src={mylogo} alt="" className="h-10 w-10 -mr-3" />
          <a className="btn sm:text-lg btn-ghost text-white font-serif text-xl">
            Candu Diksi
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white font-serif -ml-32 menu-horizontal px-1">
            <li>
              <Link
                to="beranda-section"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="aplikasi-section"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Aplikasi
              </Link>
            </li>
            <li>
              <Link
                to="card-section"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Buku
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
