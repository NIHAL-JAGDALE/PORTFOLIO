import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const projects = [
  {
    id: 1,
    title: 'PrepPilot — AI Mock Interviews',
    subtitle: 'Full-Stack AI Interview Platform',
    description:
      'A full-stack AI mock interview platform with adaptive 3-round interviews (DSA, Technical, HR) — minimum 16 questions, scaling dynamically per role and performance, with real-time evaluation and auto-generated performance reports.',
    tech: ['React (Vite)', 'Node.js', 'Express.js', 'PostgreSQL', 'Claude API', 'OpenAI API', 'Groq SDK', 'Monaco Editor', 'JDoodle API', 'JWT'],
    features: [
      '3-tier AI failover: Claude Sonnet → GPT-4o → Groq Llama 3.3-70B with silent auto-switching',
      'Reduced token costs by 90% via Claude prompt caching & rolling context summarization',
      'Live DSA panel with Monaco Editor + JDoodle, pulling real LeetCode problems via GraphQL',
      'Adaptive difficulty by company type (MNC / Startup / FAANG)',
      'AI-powered voice input via Groq Whisper Large V3 Turbo — hands-free, cross-browser STT',
      'Auto-generated performance reports with hiring recommendations & 30-day study plans',
    ],
    github: 'https://github.com/NIHAL-JAGDALE/PrepPilot--AI-Mock-Interviews',
    live: 'https://prep-pilot-ai-mock-interviews.vercel.app/',
    color: '#f59e0b',
    gradient: 'from-[#f59e0b]/20 to-[#d97706]/5',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Project SHASTRA — Bullet Hole Detection',
    subtitle: 'Computer Vision · Defence Automation',
    description:
      'A smart target detection system for the Indian military to automate bullet-hole detection previously performed manually in indoor proof yards — engineered with an end-to-end computer vision pipeline achieving 95%+ detection accuracy.',
    tech: ['Python', 'OpenCV', 'PyQt5', 'Computer Vision', 'Image Segmentation'],
    features: [
      'End-to-end CV pipeline using OpenCV with segmentation & noise reduction',
      '95%+ bullet-hole detection accuracy replacing manual field work',
      'Cross-platform desktop application packaged as a single-file executable',
      'Designed for real-world deployment in Indian military indoor proof yards',
    ],
    github: 'https://github.com/NIHAL-JAGDALE',
    live: null,
    color: '#ef4444',
    gradient: 'from-[#ef4444]/20 to-[#dc2626]/5',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Linkify — Smart URL Shortener',
    subtitle: 'Full-Stack URL Analytics Platform',
    description:
      'A modern URL shortening application built with Java 21, Spring Boot 3.x, and PostgreSQL. Features clean shareable links, powerful analytics with click tracking, geolocation & referral data, and secure JWT authentication for user management.',
    tech: ['Java 21', 'Spring Boot 3.x', 'Spring Security', 'PostgreSQL', 'React.js', 'Tailwind CSS'],
    features: [
      'URL shortening with clean, unique shareable links',
      'Analytics dashboard — clicks, geolocation, referrals',
      'JWT-based secure authentication system',
      'High-performance Spring Boot enterprise backend',
    ],
    github: 'https://github.com/NIHAL-JAGDALE/Linkify',
    live: null,
    color: '#3b82f6',
    gradient: 'from-[#3b82f6]/20 to-[#2563eb]/5',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'CHEMVIZ — Chemical Equipment Visualizer',
    subtitle: 'Hybrid Web + Desktop Application',
    description:
      'A comprehensive hybrid Web + Desktop application for uploading, analyzing, and visualizing chemical equipment data. Features smart CSV upload, real-time analytics, dual visualization with Chart.js & Matplotlib, and automated PDF report generation.',
    tech: ['Django', 'React', 'PyQt5', 'PostgreSQL', 'Chart.js', 'Matplotlib', 'REST API'],
    features: [
      'Smart CSV upload with automatic parameter validation',
      'Real-time analytics: flowrate, pressure, temperature',
      'Dual visualization: Chart.js (Web) + Matplotlib (Desktop)',
      'PDF report generation with embedded visualizations',
    ],
    github: 'https://github.com/NIHAL-JAGDALE/CHEMVIZ',
    live: 'https://chemviz-khaki.vercel.app',
    color: '#10b981',
    gradient: 'from-[#10b981]/20 to-[#059669]/5',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#242424] rounded-3xl overflow-hidden border border-[#333333] hover:border-opacity-0 transition-all duration-700"
    >
      {/* Animated border gradient */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, ${project.color}40, transparent 50%, ${project.color}20)`,
          padding: '1px',
        }}
      ></div>

      <div className="relative bg-[#242424] rounded-3xl m-[1px]">
        {/* Top gradient bar */}
        <div
          className="h-1 w-full transition-all duration-700"
          style={{
            background: isHovered
              ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
              : `linear-gradient(90deg, transparent, ${project.color}40, transparent)`,
          }}
        ></div>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  backgroundColor: `${project.color}15`,
                  color: project.color,
                  boxShadow: isHovered ? `0 8px 30px ${project.color}25` : 'none',
                }}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-[#f4f4f0] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold mt-0.5" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: `${project.color}15`,
                    borderColor: `${project.color}40`,
                    color: project.color,
                  }}
                  title="Live Demo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#333333] flex items-center justify-center text-[#a3a3a3] hover:text-[#f4f4f0] hover:border-[#f59e0b]/40 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed mb-6 font-medium">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }}></div>
                  </div>
                  <span className="text-xs text-[#a3a3a3] leading-relaxed font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-bold rounded-full border transition-all duration-300"
                style={{
                  borderColor: `${project.color}30`,
                  color: project.color,
                  backgroundColor: `${project.color}08`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="projects" className="bg-[#242424] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-block border border-[#f59e0b]/30 rounded-full px-5 py-1.5 text-sm text-[#f59e0b] font-bold mb-6 shadow-sm bg-[#f59e0b]/5">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#f4f4f0] tracking-tight mb-4">
            Featured <span className="text-[#f59e0b]">Projects</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-xl mx-auto">
            Production-grade applications built with modern architecture, AI integration, and polished user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-16">
          <a
            href="https://github.com/NIHAL-JAGDALE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#1a1a1a] border border-[#333333] text-[#f4f4f0] font-bold hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Repositories
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#f59e0b]/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/3 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Projects;
