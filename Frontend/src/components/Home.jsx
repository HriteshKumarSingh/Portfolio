import React from "react";
import Banner from "../assets/Banner.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

function Home() {
  return (
    <div className="flex flex-col w-[90%] m-auto py-10 gap-10">
      <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-10">
        <div className="lg:w-[50%] w-full order-2 lg:order-1">
          <div className="flex flex-col gap-5">
            <p className="sora text-4xl">
              Hello I'am
              <sapn className="font-extrabold"> Hritesh Kumar Singh.</sapn>
            </p>
            <p className="sora text-4xl font-extrabold">
              MERN Stack <span className="text-border"> Developer</span>
            </p>
            <p className="sora text-4xl">
              Based In <span className="font-extrabold"> India.</span>
            </p>
            <p className="sora text-base text-gray-500">
              Skilled in HTML, CSS, JavaScript, Tailwind CSS, React.js, Node.js,
              Express.js, MongoDB, and MySQL, with a passion for building
              robust, user-centric web applications. Focused on creating
              seamless front-end experiences paired with efficient backend
              architectures. Continuously exploring new technologies to craft
              innovative, scalable, and impactful digital solutions. A
              detail-oriented problem solver committed to delivering excellence
              in every project.
            </p>
          </div>
        </div>

        <div className="lg:w-[50%] w-full order-1 lg:order-2">
          <img src={Banner} alt="banner" className="" />
        </div>
      </div>

      <div className="flex gap-6">
        <a href="https://www.instagram.com/hriteshsingh_/" className="border-2 border-black h-14 w-14 rounded-xl flex items-center justify-center hover:bg-black hover:text-white hover:scale-125 transition-all"><FaInstagram className="text-3xl" /></a>
        <a href="https://www.linkedin.com/in/hritesh-kumar-singh-472a79303/" className="border-2 border-black h-14 w-14 rounded-xl flex items-center justify-center hover:bg-black hover:text-white hover:scale-125 transition-all"><FaLinkedinIn className="text-3xl" /></a>
        <a href="https://github.com/HriteshKumarSingh" className="border-2 border-black h-14 w-14 rounded-xl flex items-center justify-center hover:bg-black hover:text-white hover:scale-125 transition-all"><IoLogoGithub className="text-3xl" /></a>
        <a href="https://api.whatsapp.com/send/?phone=918002458864&text&type=phone_number&app_absent=0" className="border-2 border-black h-14 w-14 rounded-xl flex items-center justify-center hover:bg-black hover:text-white hover:scale-125 transition-all"><RiWhatsappFill className="text-3xl" /></a>
      </div>
    </div>
  );
}

export default Home;
