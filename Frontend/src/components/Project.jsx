import React from "react";
import { HiExternalLink } from "react-icons/hi";
import Porject_1 from "../assets/project_1.png";
import Porject_2 from "../assets/project_2.png";
import Porject_3 from "../assets/project_3.png";

function Project() {
  return (
    <div className="bg-black text-white">
      <div className="w-[90%] m-auto flex justify-center items-center flex-col py-10 gap-20">
        <div>
          <p className="sora text-4xl">
            My<span className="font-bold"> Projects</span>
          </p>
        </div>

        <div className="flex w-full lg:justify-between justify-center items-center flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="lg:w-[50%] w-full lg:order-1 order-2 flex lg:justify-start justify-center">
            <img src={Porject_1} alt="project" className="rounded-xl w-96" />
          </div>

          <div className="flex gap-5 flex-col lg:order-2 order-1 lg:w-[50%]">
            <h1 className="sora text-4xl font-bold">01</h1>
            <h1 className="sora text-4xl font-bold">Expense Tracker</h1>
            <p className="sora text-base text-gray-500">
              Built an expense tracker web app using React.js and Tailwind CSS.
              This app helps users track their expenses, visualize spending
              patterns, and manage their finances effectively with a sleek,
              responsive design.
            </p>
            <a href="https://tracker10.netlify.app/" className="text-2xl">
              <HiExternalLink />
            </a>
          </div>
        </div>

        <div className="flex w-full lg:justify-between justify-center items-center flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="lg:w-[50%] w-full lg:order-2 order-2 flex lg:justify-end justify-center">
            <img src={Porject_2} alt="project" className="rounded-xl w-96" />
          </div>

          <div className="flex gap-5 flex-col lg:order-1 order-1 lg:w-[50%]">
            <h1 className="sora text-4xl font-bold">02</h1>
            <h1 className="sora text-4xl font-bold">Pixport</h1>
            <p className="sora text-base text-gray-500">
              Pixport showcases my expertise in React.js and Tailwind CSS,
              harnessing the power of the Pixabay API to curate dynamic image
              collections tailored to user specifications. It exemplifies my
              commitment to seamless user experience and modern web development
              practices.
            </p>
            <a href="https://pixport.netlify.app/" className="text-2xl">
              <HiExternalLink />
            </a>
          </div>
        </div>

        <div className="flex w-full lg:justify-between justify-center items-center flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="lg:w-[50%] w-full lg:order-1 order-2 flex lg:justify-start justify-center">
            <img src={Porject_3} alt="project" className="rounded-xl w-96" />
          </div>

          <div className="flex gap-5 flex-col lg:order-2 order-1 lg:w-[50%]">
            <h1 className="sora text-4xl font-bold">03</h1>
            <h1 className="sora text-4xl font-bold">Next Invest</h1>
            <p className="sora text-base text-gray-500">
              Next Invest, crafted with HTML and CSS, demonstrates my expertise
              in responsive design. It's a testament to my ability to create
              visually engaging websites that work flawlessly on any device,
              showcasing my dedication to mastering front-end development.
            </p>
            <a href="https://nextinvest-1.netlify.app/" className="text-2xl">
              <HiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
