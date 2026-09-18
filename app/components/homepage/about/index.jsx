import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { BsCodeSlash, BsSpeedometer2 } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-24 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Profile Image with subtle glow */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#262b4e] bg-[#0d1224] w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px]">
              <Image
                src={personalData.profile}
                alt="Lokesh Ratawa"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                priority
                className="rounded-2xl transition-all duration-500 group-hover:scale-105 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bio and Key Strengths */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-10 bg-[#16f2b3]"></span>
            <p className="font-semibold text-[#16f2b3] text-base uppercase tracking-wider">
              Who I Am
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Passionate Frontend Engineer with 3+ Years Commercial Experience
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            {personalData.description}
          </p>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#11162d] border border-[#202648]">
              <div className="p-2 rounded-md bg-pink-500/10 text-pink-400 mt-1">
                <BsCodeSlash size={20} />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Modular React & Next.js</h4>
                <p className="text-gray-400 text-xs mt-0.5">Scalable component architecture and clean code.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#11162d] border border-[#202648]">
              <div className="p-2 rounded-md bg-[#16f2b3]/10 text-[#16f2b3] mt-1">
                <FaLayerGroup size={18} />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Redux & Zustand State</h4>
                <p className="text-gray-400 text-xs mt-0.5">Predictable state management for complex flows.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#11162d] border border-[#202648]">
              <div className="p-2 rounded-md bg-violet-500/10 text-violet-400 mt-1">
                <MdDevices size={20} />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">100% Responsive Design</h4>
                <p className="text-gray-400 text-xs mt-0.5">Pixel-perfect across mobile, tablet, and desktop.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#11162d] border border-[#202648]">
              <div className="p-2 rounded-md bg-amber-500/10 text-amber-400 mt-1">
                <BsSpeedometer2 size={18} />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Performance Optimization</h4>
                <p className="text-gray-400 text-xs mt-0.5">Fast render cycles and optimized asset delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;