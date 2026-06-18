import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#a3a3a3] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-[#333333]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Full Stack Development</p>
          <p>Backend Systems Architecture</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <p>B.E. Information Technology</p>
          <p>Army Institute of Technology, Pune</p>
          <a href="#projects" className="underline hover:text-[#f59e0b] transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>Pune, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2
          className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter select-none text-[#242424] w-full text-center"
          style={{ WebkitTextStroke: '1px #f59e0b22' }}
        >
          Nihal
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-[#f59e0b] transition-colors underline-offset-4 decoration-1 font-bold text-[#f4f4f0]">Contact</a>
          <p className="text-[#a3a3a3] font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Nihal Jagdale | Built with React & TailwindCSS
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-center">
          <a href="mailto:nihaljagdale2003@gmail.com" className="underline hover:text-[#f59e0b] transition-colors underline-offset-4 decoration-1 lowercase">nihaljagdale076@gmail.com</a>
          <div className="flex gap-4 md:justify-center">
            <a href="https://github.com/NIHAL-JAGDALE" target="_blank" rel="noopener noreferrer" className="hover:text-[#f59e0b] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nihal-jagdale" target="_blank" rel="noopener noreferrer" className="hover:text-[#f59e0b] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#resume" className="underline hover:text-[#f59e0b] transition-colors underline-offset-4 decoration-1">Resume</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
