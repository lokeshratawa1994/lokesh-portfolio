// @flow strict

import * as React from 'react';

function ProjectCardView({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        {/* Left Side: Project Data */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8 py-3 lg:py-5">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">project</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{project.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>

              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">tools:</span>
                <span className="text-gray-400">{` ['`}</span>
                {project.tools.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-amber-300">{tag}</span>
                    {project.tools.length - 1 !== i && (
                      <span className="text-gray-400">{`', '`}</span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-gray-400">{"],"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
                <span className="text-orange-400">{project.role}</span>
                <span className="text-gray-400">,</span>
              </div>

              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">Description:</span>
                <span className="text-cyan-400">{' ' + project.description}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>

        {/* Right Side: Project Images */}
        <div className="hidden lg:block w-1/2 border-t-[2px] border-indigo-900 my-12 py-8">
          <div className={`${project.images && project.images.length > 2 ? 'grid grid-cols-2 gap-2' : 'flex flex-col gap-2'} px-4 lg:px-8 py-2`}>
            {project.images &&
              project.images.slice(0, 4).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project ${project.name} - Image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md shadow-md"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardView;
