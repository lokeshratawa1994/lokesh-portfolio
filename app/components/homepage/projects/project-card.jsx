import Image from "next/image";
import Link from "next/link";
import { BsCheckCircleFill, BsLockFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  const mainImage = project.images && project.images.length > 0 ? project.images[0] : null;

  return (
    <div className="w-full rounded-2xl border border-[#232a52] bg-gradient-to-br from-[#0e1329] to-[#0a0d20] overflow-hidden shadow-2xl hover:border-violet-500/60 transition-all duration-300">
      {/* Accent Header Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-violet-600 to-[#16f2b3]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8 items-center">
        {/* Project Screenshot / Visual Preview */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative group overflow-hidden rounded-xl border border-[#20274c] bg-[#0c1024]">
            {mainImage ? (
              <div className="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden">
                <Image
                  src={mainImage}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d20]/80 via-transparent to-transparent"></div>
              </div>
            ) : (
              <div className="h-60 sm:h-72 flex items-center justify-center bg-[#111633] text-gray-400">
                <span>{project.name}</span>
              </div>
            )}

            {/* Float Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#0d1224]/90 text-[#16f2b3] border border-[#16f2b3]/30 backdrop-blur-md">
                {project.badge || project.role}
              </span>
            </div>
          </div>
        </div>

        {/* Project Case Study Content */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-wider font-mono text-gray-400">
              {project.type || "Commercial Application"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
            {project.name}
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 mb-5">
              {project.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <BsCheckCircleFill className="text-[#16f2b3] mt-1 shrink-0" size={14} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tools & Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tools.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#13193a] border border-[#263061] text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#1b2247]">
            {project.demo ? (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#16f2b3] text-[#0d1224] hover:bg-[#13d9a0] transition-colors"
              >
                <span>Live Demo</span>
                <FiExternalLink size={14} />
              </Link>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium px-3 py-1.5 rounded-lg bg-[#121735] border border-[#20274e]">
                <BsLockFill className="text-amber-400" size={12} />
                <span>Enterprise Production (Client NDA)</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;