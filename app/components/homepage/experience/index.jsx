import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsBriefcaseFill } from "react-icons/bs";
import experienceLottie from '@/utils/json/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-10 border-t my-12 sm:my-16 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Experience Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 select-none pointer-events-none opacity-70"
      />

      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-12 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-4 sm:px-6 text-lg sm:text-xl rounded-md font-semibold tracking-wider uppercase">
            Work Experience
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Lottie Animation: Responsive & ONLY sticky on large screens */}
          <div className="lg:col-span-4 relative lg:sticky lg:top-28 flex justify-center w-full max-w-[200px] sm:max-w-[260px] lg:max-w-sm mx-auto mb-4 lg:mb-0">
            <div className="w-full">
              <AnimationLottie animationPath={experienceLottie} />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6 w-full">
            {experiences.map(item => (
              <GlowCard key={item.id} identifier={`experience-${item.id}`}>
                <div className="p-4 sm:p-6 relative overflow-hidden">
                  <Image
                    src="/blur-23.svg"
                    alt="Glow blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80 pointer-events-none select-none"
                  />

                  {/* Header: Role, Duration & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#232747] pb-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-pink-500/20 to-violet-600/20 text-[#16f2b3] border border-[#2d3257] shrink-0">
                        <BsBriefcaseFill size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-pink-400 mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1 mt-1 sm:mt-0">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#16f2b3]/10 text-[#16f2b3] border border-[#16f2b3]/30">
                        {item.duration}
                      </span>
                      {item.location && (
                        <span className="text-[11px] text-gray-400">{item.location}</span>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  {item.description && item.description.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {item.description.map((bullet, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-[#16f2b3] mt-1 shrink-0 text-sm leading-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack tags */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#1f2648]/60">
                      <span className="text-[11px] text-gray-400 font-mono mr-1 shrink-0">Stack:</span>
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-[#101733] border border-[#252c54] text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;