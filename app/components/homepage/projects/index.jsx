import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Projects = () => {
  // Showcase the top 4 flagship resume projects on the homepage
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div id="projects" className="relative z-10 my-16 lg:my-28">
      {/* Section Header with View All Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#23294c]">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[2px] bg-[#16f2b3]"></span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Production platforms, supply chain networks, real estate, and decentralized apps.
            </p>
          </div>
        </div>

        <Link 
          href="/project"
          className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-lg bg-[#141b3a] hover:bg-violet-600/30 text-[#16f2b3] border border-[#263163] hover:border-violet-500 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group"
        >
          <span>View All ({projectsData.length})</span>
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
        </Link>
      </div>

      {/* Featured Projects Stack */}
      <div className="flex flex-col gap-8 lg:gap-10">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom CTA to All Projects */}
      <div className="flex justify-center mt-12">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg hover:opacity-95 hover:scale-105 transition-all duration-300"
        >
          <span>Explore All Commercial Projects ({projectsData.length})</span>
          <BsArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
