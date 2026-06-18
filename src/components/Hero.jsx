import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroPic from '../assets/main.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#1a1a1a]">
      {/* Background Image */}
      <img
        src={heroPic}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

        {/* Left: Text & Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <div
            data-aos="fade-up"
            className="inline-block border border-[#f59e0b]/30 rounded-full px-4 py-1 text-xs text-[#f59e0b] font-bold mb-4 bg-[#f59e0b]/5 backdrop-blur-md"
          >
            Full Stack Developer
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#f4f4f0] text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-[1.1]"
          >
            Hi, I'm <span className="text-[#f59e0b]">Nihal Jagdale</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#f4f4f0]/70 text-sm md:text-lg font-semibold mb-8 max-w-lg drop-shadow-md leading-relaxed"
          >
            Full Stack Engineer focused on building production-grade software and AI-powered applications.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full bg-[#f59e0b] text-[#1a1a1a] font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full bg-white/10 border border-[#f59e0b]/40 text-[#f4f4f0] font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
            <a
              href="#resume"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full bg-transparent border border-[#f4f4f0]/20 text-[#f4f4f0]/80 font-bold hover:border-[#f59e0b]/40 hover:text-[#f4f4f0] transition-all duration-300 backdrop-blur-md"
            >
              Resume ↓
            </a>
          </div>

          {/* Social Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="https://github.com/NIHAL-JAGDALE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f4f4f0]/70 hover:text-[#f4f4f0] hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-[#f59e0b]/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nihal-jagdale"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f4f4f0]/70 hover:text-[#f4f4f0] hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-[#f59e0b]/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/Nihal_Jagdale373/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f4f4f0]/70 hover:text-[#f4f4f0] hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-[#f59e0b]/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </a>
            <a
              href="mailto:nihaljagdale2003@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#f4f4f0]/70 hover:text-[#f4f4f0] hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-[#f59e0b]/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-[#f59e0b] drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
