import { skillsCategories, skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { BsCodeSquare, BsCpu, BsKanban, BsRobot } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbApi } from "react-icons/tb";

const categoryIcons = {
  "Core Frontend": <BsCodeSquare className="text-[#16f2b3]" size={22} />,
  "State Management": <FaLayerGroup className="text-pink-500" size={20} />,
  "UI & Design Systems": <MdOutlineDesignServices className="text-violet-400" size={22} />,
  "APIs & Web3 Integration": <TbApi className="text-amber-400" size={24} />,
  "Workflow & Engineering Tools": <BsKanban className="text-cyan-400" size={22} />,
  "AI-Assisted Development": <BsRobot className="text-emerald-400" size={22} />
};

function Skills() {
  return (
    <div id="skills" className="relative z-10 border-t my-16 lg:my-24 border-[#25213b]">
      <div className="w-[120px] h-[120px] bg-violet-500 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-6 lg:py-8 text-center">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl rounded-md font-semibold tracking-wider uppercase">
            Technical Skills
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-xl">
          Core competencies, state management architectures, and modern toolchains utilized across commercial projects.
        </p>
      </div>

      {/* Categorized Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {skillsCategories.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#1f2648] bg-gradient-to-b from-[#101633] to-[#0c1024] p-5 hover:border-violet-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#141b3d] border border-[#232b57]">
                  {categoryIcons[cat.category] || <BsCpu size={20} className="text-[#16f2b3]" />}
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg">
                  {cat.category}
                </h3>
              </div>
              <p className="text-gray-400 text-xs mb-4 min-h-[32px]">
                {cat.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1a2144]">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`text-xs font-medium px-2.5 py-1 rounded-md transition-all ${
                    skill.highlight
                      ? "bg-[#16f2b3]/10 text-[#16f2b3] border border-[#16f2b3]/30 font-semibold"
                      : "bg-[#141b3a] text-gray-300 border border-[#252e59]"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Continuous Marquee for Fast Visual Scanning */}
      <div className="w-full mt-10">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-4 font-mono">
          Featured Tech Stack
        </p>
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const img = skillsImage(skill);
            return (
              <div
                className="w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-300 mx-3 my-2 rounded-lg group hover:scale-105 cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] p-3 group-hover:border-violet-500 transition-all">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="h-8 w-8 flex items-center justify-center">
                      {img?.src ? (
                        <Image
                          src={img.src}
                          alt={skill}
                          width={32}
                          height={32}
                          className="h-full w-auto object-contain"
                        />
                      ) : (
                        <span className="text-xs font-bold text-[#16f2b3]">{skill.slice(0, 2)}</span>
                      )}
                    </div>
                    <p className="text-white text-xs font-medium">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;