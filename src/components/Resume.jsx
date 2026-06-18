import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [isViewing, setIsViewing] = useState(false);

  const resumeGoogleDriveLink = 'https://drive.google.com/drive/folders/1lgHd2k8v7s5JmphMhSKjXw2ywg7nmM1o';
  const resumeDownloadPath = '/NihalJagdale_230299.pdf';

  const education = {
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Army Institute of Technology, Pune',
    cgpa: '8.68 / 10',
    status: 'Expected July 2027',
  };

  const achievements = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Certifications',
      text: 'Java Spring Framework 6, Spring Boot 3 & Spring AI (Udemy | 53 Hours).',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Competitive Programming',
      text: 'Solved 300+ problems on LeetCode; strong command over DSA.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Hackathons',
      text: 'Amazon HackOn 2026 (Round 2 selection), Adobe India Hackathon 2025, Suvidha Hackathon 2025.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Community',
      text: 'Active tech community member & college sports team player (football & cricket).',
    },
  ];

  return (
    <section id="resume" className="bg-[#1a1a1a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-[#333333]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block border border-[#f59e0b]/30 rounded-full px-5 py-1.5 text-sm text-[#f59e0b] font-bold mb-6 shadow-sm bg-[#f59e0b]/5">
            Resume
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#f4f4f0] tracking-tight mb-4">
            My <span className="text-[#f59e0b]">Resume</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-xl mx-auto">
            Full Stack Software Engineer — open to SDE roles, internships, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Resume Preview Card */}
          <div data-aos="fade-right" className="lg:col-span-2">
            <div className="bg-[#242424] rounded-3xl border border-[#333333] overflow-hidden group hover:border-[#f59e0b]/30 transition-all duration-500">
              {/* Resume visual preview */}
              <div className="relative bg-gradient-to-br from-[#f59e0b]/10 via-[#242424] to-[#242424] p-8 flex flex-col items-center">
                {/* Document icon */}
                <div className="w-24 h-32 bg-[#f4f4f0] rounded-lg shadow-2xl relative mb-6 group-hover:scale-105 transition-transform duration-500">
                  {/* Document header */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-[#f59e0b] rounded-t-lg"></div>
                  {/* Document lines */}
                  <div className="absolute top-10 left-3 right-3 space-y-2">
                    <div className="h-1.5 bg-[#e5e5e5] rounded-full"></div>
                    <div className="h-1.5 bg-[#e5e5e5] rounded-full w-4/5"></div>
                    <div className="h-1.5 bg-[#e5e5e5] rounded-full w-3/5"></div>
                    <div className="h-1.5 bg-[#e5e5e5] rounded-full w-4/5"></div>
                    <div className="h-1.5 bg-[#e5e5e5] rounded-full w-2/5"></div>
                    <div className="h-1.5 bg-[#e5e5e5] rounded-full"></div>
                    <div className="h-1.5 bg-[#e5e5e5] rounded-full w-3/4"></div>
                  </div>
                  {/* Fold corner */}
                  <div className="absolute top-0 right-0 w-5 h-5 bg-[#d4d4d4] rounded-bl-lg"></div>
                </div>

                <h3 className="text-lg font-bold text-[#f4f4f0] mb-1">Nihal Jagdale</h3>
                <p className="text-sm text-[#a3a3a3] mb-6">NihalJagdale_230299.pdf</p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 w-full">
                  <a
                    href={resumeGoogleDriveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-[#f59e0b] text-[#1a1a1a] font-bold text-sm hover:bg-[#fbbf24] transition-all duration-300 shadow-[0_8px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.5)] hover:scale-[1.02]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Resume
                  </a>
                  <a
                    href={resumeDownloadPath}
                    download="NihalJagdale_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-[#1a1a1a] border border-[#f59e0b]/30 text-[#f59e0b] font-bold text-sm hover:bg-[#f59e0b]/10 transition-all duration-300 group/dl"
                  >
                    <svg className="w-5 h-5 group-hover/dl:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Resume Details */}
          <div data-aos="fade-left" data-aos-delay="200" className="lg:col-span-3 flex flex-col gap-6">
            {/* Education Card */}
            <div className="bg-[#242424] rounded-2xl border border-[#333333] p-6 hover:border-[#f59e0b]/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f4f4f0]">Education</h3>
                </div>
              </div>
              <div className="pl-13">
                <p className="text-[#f4f4f0] font-bold text-base">{education.degree}</p>
                <p className="text-[#a3a3a3] text-sm font-medium mt-1">{education.institution}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold border border-[#f59e0b]/20">
                    CGPA: {education.cgpa}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] text-xs font-bold border border-[#10b981]/20">
                    {education.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements & Extras Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((h, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={300 + i * 100}
                  className="bg-[#242424] rounded-2xl border border-[#333333] p-5 hover:border-[#f59e0b]/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] group-hover:bg-[#f59e0b]/20 transition-colors">
                      {h.icon}
                    </div>
                    <h4 className="text-sm font-bold text-[#f4f4f0]">{h.title}</h4>
                  </div>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed font-medium">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#f59e0b]/3 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Resume;
