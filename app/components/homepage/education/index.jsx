import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsMortarboardFill } from "react-icons/bs";
import lottieFile from '@/utils/json/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-10 border-t my-14 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Education Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 select-none pointer-events-none opacity-70"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl rounded-md font-semibold tracking-wider uppercase">
            Education
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lottie Animation Side */}
          <div className="lg:col-span-5 flex justify-center w-full max-w-[200px] sm:max-w-[260px] lg:max-w-sm mx-auto mb-4 lg:mb-0">
            <div className="w-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {educations.map(education => (
              <GlowCard key={education.id} identifier={`education-${education.id}`}>
                <div className="p-5 sm:p-6 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Glow blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80 pointer-events-none select-none"
                  />
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#16f2b3]/10 text-[#16f2b3] border border-[#16f2b3]/30">
                      {education.duration}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-violet-600/20 text-[#16f2b3] border border-[#2d3257] shrink-0 mt-1">
                      <BsMortarboardFill size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {education.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-300">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;