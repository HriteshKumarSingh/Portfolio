import React, { useState } from 'react';
import logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburgerToggle = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="w-[90%] m-auto py-5">
      <nav className="flex justify-between items-center">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="logo" />
          <h1 className="sora font-bold text-xl">Portfolio</h1>
        </Link>

        <div className="lg:flex hidden">
          <ul className="flex gap-10 sora font-bold text-lg">
            <NavLink
              to={"/aboutme"}
              className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-black"
              }
            >
              About Me
            </NavLink>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-black"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to={"/project"}
              className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-black"
              }
            >
              Project
            </NavLink>
            <NavLink
              to={"/contactme"}
              className={({ isActive }) =>
                isActive ? "text-gray-500" : "text-black"
              }
            >
              Contact Me
            </NavLink>
          </ul>
        </div>

        <a href='https://drive.google.com/file/d/14erQmOHi68VWNp7JEOWuO3iATFS2uLtV/view?usp=sharing' className="bg-black text-white sora lg:flex gap-3 p-2 px-3 rounded-md font-semibold items-center hidden">
          Resume
          <FiDownload className="text-lg" />
        </a>

        <RxHamburgerMenu
          className="text-3xl flex lg:hidden"
          onClick={handleHamburgerToggle}
        />
      </nav>

      <nav
        className={`lg:hidden flex flex-col items-end py-5 gap-6 absolute top-0 right-0 w-full bg-white transition-all duration-300 ${
          hamburger ? "left-0" : "left-full hidden"
        }`}
      >
        <div className='w-[90%] m-auto flex flex-col gap-6 justify-end items-end'>
        <button
          className="text-3xl p-3 self-end"
          onClick={() => setHamburger(false)}
        >
          <AiOutlineClose />
        </button>

        <ul className="flex flex-col items-end w-full gap-10 sora font-bold text-lg">
          <NavLink
            to={"/aboutme"}
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-black"
            }
            onClick={() => setHamburger(false)} 
          >
            About Me
          </NavLink>
          <NavLink
            to={"/skills"}
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-black"
            }
            onClick={() => setHamburger(false)} 
          >
            Skills
          </NavLink>
          <NavLink
            to={"/project"}
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-black"
            }
            onClick={() => setHamburger(false)} 
          >
            Project
          </NavLink>
          <NavLink
            to={"/contactme"}
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "text-black"
            }
            onClick={() => setHamburger(false)} 
          >
            Contact Me
          </NavLink>
        </ul>

        <a href='https://drive.google.com/file/d/14erQmOHi68VWNp7JEOWuO3iATFS2uLtV/view?usp=sharing' className="bg-black text-white sora lg:hidden gap-3 h-10 w-32 p-2 px-3 rounded-md font-semibold items-center flex">
          Resume
          <FiDownload className="text-lg" />
        </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
