import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="bg-black py-2">
      <Link to={"/"} className="flex items-center w-[90%] m-auto">
        <img src={Logo} alt="logo" className="invert"/>
        <h1 className="sora font-bold text-xl text-white">Portfolio</h1>
      </Link>
    </div>
  );
}

export default Footer;
