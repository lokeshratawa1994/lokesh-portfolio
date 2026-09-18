"use client";

import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }

    if (!isValidEmail(userInput.email)) {
      setError((prev) => ({ ...prev, email: true }));
      return;
    }

    setError({ email: false, required: false });

    try {
      setIsLoading(true);
      const res = await axios.post('/api/contact', userInput);

      toast.success(res.data?.message || "Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      const msg = err?.response?.data?.message || "Failed to send message. Please contact via email.";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between rounded-2xl border border-[#232a52] bg-[#0c1024]/90 p-6 lg:p-7 shadow-xl">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[2px] w-8 bg-[#16f2b3]"></span>
          <h3 className="font-semibold text-[#16f2b3] text-base uppercase tracking-wider">
            Send a Message
          </h3>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">
          Have an Opportunity or Inquiry?
        </h4>
        <p className="text-xs text-gray-300 mb-6 leading-relaxed">
          Fill out the form below and I will get back to you shortly.
        </p>

        <form onSubmit={handleSendMail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Your Name <span className="text-pink-500">*</span>
            </label>
            <input
              className="bg-[#101633] w-full border rounded-xl border-[#293056] focus:border-[#16f2b3] ring-0 outline-none transition-all duration-300 px-3.5 py-2.5 text-sm text-white placeholder-gray-500"
              type="text"
              placeholder="e.g. Hiring Manager / Recruiter"
              maxLength="100"
              required
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Your Email <span className="text-pink-500">*</span>
            </label>
            <input
              className="bg-[#101633] w-full border rounded-xl border-[#293056] focus:border-[#16f2b3] ring-0 outline-none transition-all duration-300 px-3.5 py-2.5 text-sm text-white placeholder-gray-500"
              type="email"
              placeholder="name@company.com"
              maxLength="100"
              required
              value={userInput.email}
              onChange={(e) => {
                setUserInput({ ...userInput, email: e.target.value });
                if (error.email) setError({ ...error, email: false });
              }}
              onBlur={() => {
                checkRequired();
                setError((prev) => ({ ...prev, email: !isValidEmail(userInput.email) }));
              }}
            />
            {error.email && (
              <p className="text-xs text-red-400 mt-0.5">Please provide a valid email address.</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Your Message <span className="text-pink-500">*</span>
            </label>
            <textarea
              className="bg-[#101633] w-full border rounded-xl border-[#293056] focus:border-[#16f2b3] ring-0 outline-none transition-all duration-300 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 resize-none"
              maxLength="500"
              name="message"
              placeholder="Details about the role, project scope, or opportunity..."
              required
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>

          {error.required && (
            <p className="text-xs text-red-400">All fields are required!</p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-95 hover:shadow-lg hover:shadow-pink-500/20 disabled:opacity-50 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <TbMailForward size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;