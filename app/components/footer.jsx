import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="relative border-t bg-[#0a0e1f] border-[#202644] text-white mt-12">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8">
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-white font-medium">Lokesh Ratawa</span>. Built with React &amp; Next.js.
          </p>

          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://github.com/lokeshratawa1994"
              className="text-gray-400 hover:text-[#16f2b3] transition-colors"
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/lokesh-ratawa/"
              className="text-gray-400 hover:text-[#16f2b3] transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;