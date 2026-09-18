import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from '../components/homepage/projects/project-card';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

export const metadata = {
  title: "Projects | Lokesh Ratawa - Frontend Developer",
  description: "Explore all commercial, client, and Web3 projects developed by Lokesh Ratawa using React.js, Next.js, Redux, and Tailwind CSS."
};

const AllProjects = () => {
  return (
    <div className="relative z-10 pt-8 pb-16">
      {/* Back button and page title */}
      <div className="mb-10 pb-6 border-b border-[#23294c]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#16f2b3] mb-4 transition-colors"
        >
          <BsArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          All Commercial & Client Projects
        </h1>
        <p className="text-sm text-gray-300 mt-2 max-w-2xl">
          A comprehensive portfolio of web applications, B2B platforms, real estate software, e-commerce systems, and Web3 integrations built over 3+ years.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
