import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex md:justify-center md:py-6 md:border-b-2 md:border-[#DBD8FF] md:h-[120px] mx-16">
        <Link to="/">
          <img src={Logo} alt="LogoAtenea" />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;