import React from 'react';
import stackImage from '../assets/card.png';

const About = () => {
  return (
    <section id="about" className="bg-[#242424] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#f59e0b]/30 transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-[#f59e0b]/60 rounded border border-[#f59e0b]/40 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(245,158,11,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-[#1a1a1a] w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-[#f59e0b]/10">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#1a1a1a] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#242424] border-2 border-[#f59e0b]/20">
                <img src={stackImage} alt="Nihal Jagdale" className="w-full h-full object-cover" />
              </div>

              {/* Name on badge */}
              <div className="text-center mt-3 pb-2">
                <p className="text-[#f4f4f0] font-black text-lg tracking-tight">NIHAL JAGDALE</p>
                <p className="text-[#f59e0b] text-xs font-bold tracking-widest uppercase">Full Stack Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-[#f4f4f0] mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#f59e0b] mb-4">About Me</h2>
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-[#f4f4f0]/70">
            Hi, I'm <span className="text-[#f59e0b] text-xl font-black mx-1 tracking-wide uppercase">Nihal</span>, a Full Stack Software Engineer based in <span className="text-[#f4f4f0]">Pune, India</span>.
          </p>
          <p className="text-base font-medium mb-6 leading-relaxed max-w-3xl text-[#f4f4f0]/60">
            Currently pursuing a <span className="text-[#f4f4f0]/80 font-bold">Bachelor of Engineering in Information Technology</span> at Army Institute of Technology, Pune. I focus on building production-grade, end-to-end systems that combine deep backend architecture with intelligent AI-driven experiences.
          </p>
          <p className="text-base font-medium mb-8 leading-relaxed max-w-3xl text-[#f4f4f0]/60">
            I specialize in designing scalable backend systems, modern web applications, and intelligent user experiences using<span className="text-[#f59e0b] font-bold"> Spring Boot, React, Node.js, PostgreSQL,</span> and<span className="text-[#f59e0b] font-bold"> cloud technologies.</span> My work combines strong software engineering fundamentals with practical AI integration to deliver reliable and impactful products.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { number: '3+', label: 'Projects Shipped' },
              { number: '300+', label: 'DSA Problem Solved' },
              { number: '8.68', label: 'CGPA' },
              { number: '10+', label: 'Technologies' },
            ].map((stat, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 100}
                className="bg-[#242424] border border-[#333333] rounded-xl p-4 text-center hover:border-[#f59e0b]/30 transition-all duration-300"
              >
                <div className="text-2xl font-black text-[#f59e0b]">{stat.number}</div>
                <div className="text-xs text-[#a3a3a3] font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Torn divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#1a1a1a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-[#f59e0b] opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#f59e0b] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default About;
