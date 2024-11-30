import React from "react";
import Me from "../assets/Me.png";

function AboutMe() {
  return (
    <div className="flex flex-col xl:flex-row w-[90%] m-auto py-10 justify-center items-center xl:gap-0 gap-10">
      <div className="xl:w-[50%] flex justify-center items-center">
        <img src={Me} alt="aboutme" />
      </div>

      <div className="xl:w-[50%] flex justify-start flex-col gap-10">
        <div>
          <p className="sora text-4xl">
            About<span className="font-bold"> Me</span>
          </p>
        </div>
        <div className="flex flex-col gap-5 text-gray-600 text-lg">
          <p>
            I am a passionate, self-proclaimed designer who specializes in
            frontend and backend development. I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel-perfect design, and writing clear,
            readable, highly performant code matter to me.
          </p>

          <p>
            I began my web development journey in 2023, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early twenties, I am building cutting-edge web applications
            using modern technologies such as HTML, CSS, JavaScript, React.js,
            Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, and Git.
          </p>

          <p>
            In my spare time, I enjoy diving into personal projects,
            experimenting with new coding techniques, and staying updated with
            the latest in tech. You can also find me on GitHub, contributing to
            open-source projects and collaborating with fellow developers. My
            drive for continuous improvement keeps me motivated and excited
            about the future of web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
