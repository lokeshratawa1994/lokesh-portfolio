import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-28 relative text-white border-t border-[#25213b] pt-12">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-6 text-xl rounded-md font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-md">
          Open for frontend development roles, contracts, and engineering discussions.
        </p>
      </div>

      {/* Two-Column Balanced Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Contact Form */}
        <div className="lg:col-span-7 h-full">
          <ContactForm />
        </div>

        {/* Right Column: Direct Contact & Verified Channels */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between rounded-2xl border border-[#232a52] bg-[#0c1024]/90 p-6 lg:p-7 shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-8 bg-[#16f2b3]"></span>
              <h3 className="font-semibold text-[#16f2b3] text-base uppercase tracking-wider">
                Direct Contact
              </h3>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Let&apos;s Connect Directly
            </h4>
            <p className="text-xs text-gray-300 mb-6 leading-relaxed">
              Reach out through your preferred channel. I typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-3.5">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#101633] border border-[#22294e] hover:border-[#16f2b3] transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#16f2b3]/10 text-[#16f2b3] group-hover:bg-[#16f2b3] group-hover:text-[#0d1224] transition-all shrink-0">
                  <MdAlternateEmail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Email Address</p>
                  <p className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-[#16f2b3] transition-colors">
                    {personalData.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#101633] border border-[#22294e] hover:border-[#16f2b3] transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#16f2b3]/10 text-[#16f2b3] group-hover:bg-[#16f2b3] group-hover:text-[#0d1224] transition-all shrink-0">
                  <IoMdCall size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Phone / WhatsApp</p>
                  <p className="text-xs sm:text-sm font-medium text-white group-hover:text-[#16f2b3] transition-colors">
                    {personalData.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#101633] border border-[#22294e]">
                <div className="p-2.5 rounded-lg bg-[#16f2b3]/10 text-[#16f2b3] shrink-0">
                  <CiLocationOn size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Current Location</p>
                  <p className="text-xs sm:text-sm font-medium text-white">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verified Professional Links */}
          <div className="mt-8 pt-5 border-t border-[#1e2547]">
            <p className="text-[11px] text-gray-400 uppercase font-mono mb-3 tracking-wider">
              Professional Profiles
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                target="_blank"
                href={personalData.github}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#101633] border border-[#252d59] text-gray-300 hover:text-white hover:border-[#16f2b3] transition-all text-xs font-semibold"
              >
                <IoLogoGithub size={18} className="text-[#16f2b3]" />
                <span>GitHub</span>
              </Link>
              <Link
                target="_blank"
                href={personalData.linkedIn}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#101633] border border-[#252d59] text-gray-300 hover:text-white hover:border-[#16f2b3] transition-all text-xs font-semibold"
              >
                <BiLogoLinkedin size={18} className="text-[#16f2b3]" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;