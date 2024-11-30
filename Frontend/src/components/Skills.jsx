import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";

function Skills() {
  return (
    <div className='flex justify-center items-center flex-col gap-10 py-10 w-[90%] m-auto'>
      <p className='text-4xl sora'>My<span className='font-bold'> Skills</span></p>
      <div className='flex gap-5 flex-wrap justify-center items-center'>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><FaHtml5 className='text-5xl' /><p className='text-lg font-semibold'>HTML</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><FaCss3 className='text-5xl' /><p className='text-lg font-semibold'>CSS</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><SiJavascript className='text-5xl' /><p className='text-lg font-semibold'>JavaScript</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><FaReact className='text-5xl' /><p className='text-lg font-semibold'>React.Js</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><RiTailwindCssFill className='text-5xl' /><p className='text-lg font-semibold'>Tailwind CSS</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><FaNode className='text-5xl' /><p className='text-lg font-semibold'>Node.Js</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><SiExpress className='text-5xl' /><p className='text-lg font-semibold'>Express.Js</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><SiMongodb className='text-5xl' /><p className='text-lg font-semibold'>MongoDB</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><GrMysql className='text-5xl' /><p className='text-lg font-semibold'>MySQL</p></div>
        <div className='flex flex-col gap-2 justify-center items-center h-32 w-32 border-2 border-black rounded-xl hover:bg-black hover:text-white hover:scale-110 transition-all'><FaGitAlt className='text-5xl' /><p className='text-lg font-semibold'>Git</p></div>
      </div>
    </div>
  )
}

export default Skills
