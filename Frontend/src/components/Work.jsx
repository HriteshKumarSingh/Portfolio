import React from "react";

function Work() {
  return (
    <div className="flex justify-center items-center flex-wrap bg-black text-white">
      <div className="w-[90%] m-auto flex justify-center items-center flex-col py-10 gap-10">
        <p className="sora text-4xl">
          My<span className="font-bold"> Experience</span>
        </p>

        <div className="border-white border-2 p-6 rounded-xl">
          <div className="flex flex-col gap-5">
            <div className="flex sora justify-between lg:items-center flex-col lg:flex-row lg:gap-0 gap-5">
              <h1 className="text-2xl">
                Front-End Web Developer at IRA Education & IT Solutions
              </h1>
              <p>April 2023 - Oct 2023</p>
            </div>
            <p>
              As a "Front-End Web Developer intern", skillfully utilized HTML,
              CSS, JavaScript, Bootstrap, RestAPI, and React.js to create
              responsive, visually appealing interfaces. Ensured cross-browser
              compatibility, integrated RestAPI for data efficiency, and
              collaborated across teams, optimizing the user experience in
              dynamic web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
