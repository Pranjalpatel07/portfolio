"use client";

import { useState } from "react";
import { Snowfall } from "falling-snow/react";

export default function Home() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<"all" | "ai" | "fullstack">("all");
  const [activeSkillCategory, setActiveSkillCategory] = useState<"all" | "frontend" | "backend" | "ai" | "devops">("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [snowEnabled, setSnowEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBubble, setSelectedBubble] = useState<string | null>(null);

  const email = "pranjalpatel8827@gmail.com";
  const phone = "+91 7000460233";
  const githubUrl = "https://github.com/Pranjalpatel07";
  const linkedinUrl = "https://linkedin.com/in/pranjal-patel-36a12b33b";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projects = [
    {
      id: "igris-ai",
      title: "IgrisAI: Multi-Agent AI Workspace",
      category: "ai",
      badge: "Flagship Project",
      tagline: "Microservices AI platform orchestrating LangChain & LangGraph agents",
      description:
        "Built a chat-based AI workspace with a multi-agent workflow that routes requests across general chat, coding, and Tavily-powered web search agents using Groq, Google Generative AI, and OpenRouter models.",
      highlights: [
        "Architected microservices backend (API gateway, auth, chat, agent, billing Express services) with Google sign-in & cookie-based session verification.",
        "Integrated Redis for lightning-fast session caching and persistent agent memory; MongoDB for core data storage.",
        "Implemented PDF question answering, vision/image analysis, and automated PDF/PowerPoint generation stored on AWS S3 with signed temporary download links.",
        "Integrated Razorpay checkout for tiered credit packages (Free, Starter, Pro), containerized microservices with Docker, and built GitHub Actions CI/CD to AWS."
      ],
      tech: [
        "React",
        "Vite",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "LangChain",
        "LangGraph",
        "AWS S3",
        "Docker",
        "Razorpay",
        "CI/CD"
      ],
      liveUrl: "https://github.com/Pranjalpatel07",
      githubUrl: "https://github.com/Pranjalpatel07"
    },
    {
      id: "interview-maker",
      title: "Interview Maker: AI Job Match & Prep",
      category: "ai",
      badge: "AI / EdTech",
      tagline: "Smart resume-to-job matching, competency gap analysis & dynamic prep roadmaps",
      description:
        "Built an AI-powered MERN stack platform that analyzes a user's resume or self-description against target job descriptions to calculate an accurate compatibility match score and generate actionable study plans.",
      highlights: [
        "Engineered a skill gap analysis engine comparing candidate competencies with employer requirements to pinpoint missing skills.",
        "Integrated generative AI to auto-synthesize role-specific technical and behavioral interview questions for realistic practice.",
        "Created an algorithmic 5-day personalized learning roadmap generator that structures day-wise learning modules to bridge identified skill gaps."
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AI/NLP APIs",
        "Tailwind CSS",
        "REST APIs"
      ],
      liveUrl: "https://github.com/Pranjalpatel07",
      githubUrl: "https://github.com/Pranjalpatel07"
    },
    {
      id: "shopit",
      title: "ShopIT: Full-Stack E-Commerce Platform",
      category: "fullstack",
      badge: "Full-Stack System",
      tagline: "High-performance online shopping platform with cart engine & secure checkout",
      description:
        "Engineered a responsive, full-stack e-commerce web application utilizing the MERN stack with dynamic catalog browsing, live multi-criteria filtering, and real-time checkout processing.",
      highlights: [
        "Built a stateful cart management system supporting instant item additions, quantity updates, removal, and real-time subtotal/tax calculations.",
        "Implemented secure JWT authentication and role-based authorization to protect user accounts, active sessions, and sensitive order history.",
        "Integrated an end-to-end payment gateway for seamless order confirmation, handling transaction lifecycles and invoice generation."
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
        "Payment Gateway",
        "Tailwind CSS"
      ],
      liveUrl: "https://github.com/Pranjalpatel07",
      githubUrl: "https://github.com/Pranjalpatel07"
    }
  ];

  const filteredProjects =
    activeProjectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeProjectFilter);

  // Skills Bubble Logos Data with custom brand SVGs, floating animations & categories
  const skillBubbles = [
    {
      name: "React.js",
      category: "frontend",
      level: "Advanced",
      animClass: "bubble-anim-1",
      glowColor: "rgba(0, 216, 254, 0.45)",
      borderColor: "border-cyan-500/40",
      textColor: "text-cyan-300",
      icon: (
        <svg className="w-6 h-6 text-[#00d8fe]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: "Next.js",
      category: "frontend",
      level: "Proficient",
      animClass: "bubble-anim-3",
      glowColor: "rgba(255, 255, 255, 0.4)",
      borderColor: "border-zinc-500/40",
      textColor: "text-zinc-100",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 180 180" fill="none">
          <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
            <rect x="115" y="54" width="12" height="72" fill="white" />
          </g>
        </svg>
      )
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: "Proficient",
      animClass: "bubble-anim-2",
      glowColor: "rgba(49, 120, 198, 0.45)",
      borderColor: "border-blue-500/40",
      textColor: "text-blue-300",
      icon: (
        <div className="w-6 h-6 rounded bg-[#3178c6] text-white font-bold flex items-center justify-center text-[10px] tracking-tighter">
          TS
        </div>
      )
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: "Advanced",
      animClass: "bubble-anim-4",
      glowColor: "rgba(247, 223, 30, 0.45)",
      borderColor: "border-yellow-500/40",
      textColor: "text-yellow-300",
      icon: (
        <div className="w-6 h-6 rounded bg-[#f7df1e] text-black font-extrabold flex items-center justify-center text-[10px] tracking-tighter">
          JS
        </div>
      )
    },
    {
      name: "Node.js",
      category: "backend",
      level: "Advanced",
      animClass: "bubble-anim-1",
      glowColor: "rgba(104, 160, 99, 0.45)",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-300",
      icon: (
        <svg className="w-6 h-6 text-[#68a063]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7.2v10.4l9 5.2 9-5.2V7.2L12 2zm-1 16.5l-5-2.9v-5.8l5 2.9v5.8zm2 0v-5.8l5-2.9v5.8l-5 2.9zm-1-8.1L7 7.5l5-2.9 5 2.9-5 2.9z" />
        </svg>
      )
    },
    {
      name: "Express.js",
      category: "backend",
      level: "Advanced",
      animClass: "bubble-anim-3",
      glowColor: "rgba(229, 231, 235, 0.35)",
      borderColor: "border-zinc-500/40",
      textColor: "text-zinc-200",
      icon: (
        <div className="w-6 h-6 rounded bg-zinc-800 text-zinc-100 font-bold flex items-center justify-center text-[9px] border border-zinc-700">
          EX
        </div>
      )
    },
    {
      name: "MongoDB",
      category: "backend",
      level: "Advanced",
      animClass: "bubble-anim-2",
      glowColor: "rgba(71, 162, 72, 0.45)",
      borderColor: "border-green-500/40",
      textColor: "text-green-300",
      icon: (
        <svg className="w-6 h-6 text-[#47a248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.2c-.3 0-.6.1-.8.3-2.5 2.2-6.2 6.8-6.2 12.3 0 4.8 3.1 7.2 7 7.2s7-2.4 7-7.2c0-5.5-3.7-10.1-6.2-12.3-.2-.2-.5-.3-.8-.3zm0 17.5c-2.8 0-4.8-1.7-4.8-5.3 0-3.5 2.2-7.2 4.8-9.4 2.6 2.2 4.8 5.9 4.8 9.4 0 3.6-2 5.3-4.8 5.3z" />
        </svg>
      )
    },
    {
      name: "Redis",
      category: "backend",
      level: "Proficient",
      animClass: "bubble-anim-4",
      glowColor: "rgba(220, 56, 45, 0.45)",
      borderColor: "border-red-500/40",
      textColor: "text-red-300",
      icon: (
        <svg className="w-6 h-6 text-[#dc382d]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 8.5l10 5.5 10-5.5L12 3zm0 8.5L4.5 7.2 12 3.1l7.5 4.1L12 11.5zM2 11.5l10 5.5 10-5.5-2.2-1.2L12 14.6 4.2 10.3 2 11.5zm0 4.5l10 5.5 10-5.5-2.2-1.2L12 19.1l-7.8-4.3L2 16z" />
        </svg>
      )
    },
    {
      name: "LangChain",
      category: "ai",
      level: "Advanced",
      animClass: "bubble-anim-1",
      glowColor: "rgba(168, 85, 247, 0.45)",
      borderColor: "border-purple-500/40",
      textColor: "text-purple-300",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      name: "LangGraph",
      category: "ai",
      level: "Advanced",
      animClass: "bubble-anim-3",
      glowColor: "rgba(139, 92, 246, 0.45)",
      borderColor: "border-violet-500/40",
      textColor: "text-violet-300",
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      name: "Multi-Agent AI",
      category: "ai",
      level: "Specialist",
      animClass: "bubble-anim-2",
      glowColor: "rgba(56, 189, 248, 0.45)",
      borderColor: "border-sky-500/40",
      textColor: "text-sky-300",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Docker",
      category: "devops",
      level: "Proficient",
      animClass: "bubble-anim-4",
      glowColor: "rgba(36, 150, 237, 0.45)",
      borderColor: "border-blue-400/40",
      textColor: "text-blue-300",
      icon: (
        <svg className="w-6 h-6 text-[#2496ed]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.95 9.9c-.382-.607-1.15-.9-1.928-.79-.17-.79-.762-1.428-1.528-1.636-.264-.072-.544-.092-.82-.06-1.536.177-2.61 1.488-2.61 3.03 0 .428.084.846.24 1.229-.427.234-.897.412-1.398.528H1.722c-.636 0-1.168.49-1.22 1.124-.492 5.922 4.095 8.91 8.847 8.91 5.924 0 10.742-3.834 11.83-9.52 1.348-.15 2.502-1.077 2.771-2.428.08-.396.068-.787-.002-1.173" />
        </svg>
      )
    },
    {
      name: "AWS S3",
      category: "devops",
      level: "Proficient",
      animClass: "bubble-anim-1",
      glowColor: "rgba(255, 153, 0, 0.45)",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-300",
      icon: (
        <svg className="w-6 h-6 text-[#ff9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      name: "Java",
      category: "backend",
      level: "Strong Foundation",
      animClass: "bubble-anim-2",
      glowColor: "rgba(248, 152, 32, 0.45)",
      borderColor: "border-orange-500/40",
      textColor: "text-orange-300",
      icon: (
        <div className="w-6 h-6 rounded bg-gradient-to-tr from-amber-600 to-red-500 text-white font-bold flex items-center justify-center text-[10px]">
          ☕
        </div>
      )
    },
    {
      name: "C++",
      category: "backend",
      level: "DSA & Systems",
      animClass: "bubble-anim-3",
      glowColor: "rgba(0, 89, 156, 0.45)",
      borderColor: "border-indigo-500/40",
      textColor: "text-indigo-300",
      icon: (
        <div className="w-6 h-6 rounded bg-[#00599c] text-white font-bold flex items-center justify-center text-[10px] tracking-tight">
          C++
        </div>
      )
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Advanced",
      animClass: "bubble-anim-4",
      glowColor: "rgba(56, 189, 248, 0.45)",
      borderColor: "border-sky-500/40",
      textColor: "text-sky-300",
      icon: (
        <svg className="w-6 h-6 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      )
    },
    {
      name: "Redux Toolkit",
      category: "frontend",
      level: "Proficient",
      animClass: "bubble-anim-1",
      glowColor: "rgba(118, 74, 188, 0.45)",
      borderColor: "border-purple-600/40",
      textColor: "text-purple-300",
      icon: (
        <svg className="w-6 h-6 text-[#764abc]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.74 8.7a5.55 5.55 0 00-4.08-1.74c-.42 0-.83.05-1.23.14a5.45 5.45 0 00-4.47 5.37c0 1.25.42 2.4 1.14 3.32l1.64-1.28a3.42 3.42 0 01-.78-2.04 3.46 3.46 0 012.83-3.41c.26-.06.52-.09.79-.09a3.52 3.52 0 012.59 1.11l1.57-1.38z" />
        </svg>
      )
    },
    {
      name: "Git & GitHub",
      category: "devops",
      level: "Advanced",
      animClass: "bubble-anim-3",
      glowColor: "rgba(240, 80, 50, 0.45)",
      borderColor: "border-orange-500/40",
      textColor: "text-orange-300",
      icon: (
        <svg className="w-6 h-6 text-[#f05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8a2.76 2.76 0 013.9 0l1.34 1.34-2.3 2.3a2.02 2.02 0 00-1.87.52 2 2 0 00-.54 1.83L6.7 13a2.02 2.02 0 101.42 1.41l2.2-2.2a2 2 0 001.37.04l2.12 2.12a2.02 2.02 0 101.41-1.42l-2.12-2.12a2.02 2.02 0 00-.04-1.37l2.29-2.3 3.97 3.97a2.76 2.76 0 010 3.9l-5.78 5.79a2.76 2.76 0 01-3.9 0L2.6 14.49a2.76 2.76 0 010-3.9z" />
        </svg>
      )
    },
    {
      name: "REST APIs & JWT",
      category: "backend",
      level: "Advanced",
      animClass: "bubble-anim-2",
      glowColor: "rgba(20, 184, 166, 0.45)",
      borderColor: "border-teal-500/40",
      textColor: "text-teal-300",
      icon: (
        <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      name: "Vercel / Render",
      category: "devops",
      level: "Deployment",
      animClass: "bubble-anim-4",
      glowColor: "rgba(161, 161, 170, 0.4)",
      borderColor: "border-zinc-500/40",
      textColor: "text-zinc-300",
      icon: (
        <svg className="w-6 h-6 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      )
    }
  ];

  const filteredBubbles =
    activeSkillCategory === "all"
      ? skillBubbles
      : skillBubbles.filter((b) => b.category === activeSkillCategory);

  return (
    <div className="relative min-h-screen w-full bg-[#07080c] text-zinc-100 selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
      {/* Background Animated Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-violet-600/15 rounded-full blur-[100px] sm:blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 w-80 sm:w-[28rem] h-80 sm:h-[28rem] bg-cyan-600/10 rounded-full blur-[110px] sm:blur-[140px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
        <div className="absolute -bottom-32 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[130px] animate-pulse-glow" style={{ animationDelay: "5s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px"
          }}
        />
      </div>

      {/* Falling Snow Effect (User's ambient package) */}
      {snowEnabled && (
        <div className="fixed inset-0 pointer-events-none z-10 opacity-30">
          <Snowfall fullScreen wind={1} spin={1} />
        </div>
      )}

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07080c]/80 border-b border-zinc-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/25 group-hover:scale-105 transition-transform">
              P
            </span>
            <span className="font-semibold tracking-tight text-white group-hover:text-violet-300 transition-colors text-sm sm:text-base">
              Pranjal<span className="text-violet-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSnowEnabled(!snowEnabled)}
              title={snowEnabled ? "Pause ambient snow" : "Enable ambient snow"}
              className="p-1.5 sm:p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all text-xs flex items-center gap-1.5"
            >
              <span className={`w-2 h-2 rounded-full ${snowEnabled ? "bg-cyan-400 animate-pulse" : "bg-zinc-600"}`} />
              <span className="hidden sm:inline">{snowEnabled ? "Snow On" : "Snow Off"}</span>
            </button>

            {/* Resume Button in Navbar on top */}
            <a
              href="/Pranjal_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-600/15 hover:bg-violet-600/25 border border-violet-500/40 text-violet-200 hover:text-white transition-all shadow-sm group hover:scale-[1.02]"
              title="View Pranjal Patel's Resume (PDF)"
            >
              <svg className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
              <span className="text-violet-400 text-[10px]">↗</span>
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-600/20 transition-all hover:scale-[1.02]"
            >
              Get In Touch
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-5 bg-[#090b12]/95 backdrop-blur-2xl border-b border-zinc-800 space-y-3.5 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-zinc-300 hover:text-violet-300 py-1">About</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="block text-zinc-300 hover:text-violet-300 py-1">Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="block text-zinc-300 hover:text-violet-300 py-1">Skills & Bubbles</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#education" className="block text-zinc-300 hover:text-violet-300 py-1">Education</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block text-zinc-300 hover:text-violet-300 py-1">Contact</a>
            <div className="pt-2 border-t border-zinc-800/80 space-y-2">
              <a
                href="/Pranjal_Patel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600/20 border border-violet-500/40 text-violet-200 font-semibold text-xs shadow-md"
              >
                <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View Resume (PDF) ↗</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-xs shadow-md"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20 sm:space-y-28">
        {/* HERO SECTION */}
        <section id="hero" className="pt-4 sm:pt-8 pb-6 sm:pb-10 flex flex-col items-center text-center">
          {/* Status Badges & Attached Resume Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-inner backdrop-blur max-w-full">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-zinc-300 truncate">
                Open to Full-Stack & AI Roles / Internships
              </span>
            </div>

            <a
              href="/Pranjal_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 text-violet-300 hover:text-white text-[11px] sm:text-xs font-medium transition-all group shadow-sm hover:scale-105 active:scale-95"
            >
              <svg className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume Attached</span>
              <span className="text-zinc-400 group-hover:text-white">↗</span>
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.18] sm:leading-[1.12]">
            Engineering intelligent web apps &{" "}
            <span className="gradient-text-animated">multi-agent AI systems.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed px-2">
            Hi, I’m <span className="text-zinc-100 font-semibold">Pranjal Patel</span>. A Full-Stack MERN & AI Developer passionate about microservices, LLM orchestration, clean APIs, and responsive digital experiences.
          </p>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg shadow-violet-600/25 transition-all hover:scale-105 active:scale-95"
            >
              Explore Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Direct Resume CTA Button */}
            <a
              href="/Pranjal_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900/90 hover:bg-zinc-800 border border-violet-500/35 hover:border-violet-500 text-violet-200 hover:text-white transition-all shadow-md shadow-violet-500/10 active:scale-95 group"
            >
              <svg className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Resume (PDF)</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 transition-all active:scale-95"
            >
              {copiedEmail ? (
                <>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all flex justify-center items-center"
                title="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all flex justify-center items-center"
                title="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Stats Bento */}
          <div className="mt-10 sm:mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md hover:border-violet-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                100+
              </div>
              <div className="mt-1 text-[11px] sm:text-xs text-zinc-400 font-medium">LeetCode DSA Solved</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md hover:border-cyan-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                MERN + AI
              </div>
              <div className="mt-1 text-[11px] sm:text-xs text-zinc-400 font-medium">Full-Stack Specialization</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md hover:border-emerald-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                7.16
              </div>
              <div className="mt-1 text-[11px] sm:text-xs text-zinc-400 font-medium">B.Tech CSE CGPA</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md hover:border-amber-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                2027
              </div>
              <div className="mt-1 text-[11px] sm:text-xs text-zinc-400 font-medium">Graduation Year</div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-20 sm:scroll-mt-24">
          <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between">
              <div className="space-y-3.5 max-w-2xl">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-violet-400">About Me</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Crafting Scalable Backends & Fluid User Interfaces
                </h2>
                <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm md:text-base">
                  I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with extensive experience in building multi-agent AI workspaces and e-commerce platforms.
                </p>
                <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm md:text-base">
                  My background spans end-to-end product development: from architecting modular microservices and Redis session caches to designing responsive interfaces and automated CI/CD pipelines with Docker and AWS.
                </p>
              </div>

              {/* Quick Profile Snapshot */}
              <div className="w-full lg:w-72 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-3 text-xs">
                <div className="text-zinc-400 font-medium pb-2 border-b border-zinc-800">Developer Profile</div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Degree:</span>
                  <span className="text-zinc-200 font-medium">B.Tech CSE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">College:</span>
                  <span className="text-zinc-200 font-medium text-right">Baderia Global Inst.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Location:</span>
                  <span className="text-zinc-200 font-medium">India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Focus:</span>
                  <span className="text-violet-300 font-medium">Full Stack & AI Agents</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-zinc-800/80">
                  <span className="text-zinc-500">Resume:</span>
                  <a
                    href="/Pranjal_Patel_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>View PDF</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS BUBBLE LOGOS SECTION */}
        <section id="skills" className="scroll-mt-20 sm:scroll-mt-24 space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Interactive Tech Cloud</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Skills & Bubble Logos
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 max-w-xl">
                Hover or tap any floating tech bubble to highlight its proficiency level.
              </p>
            </div>

            {/* Bubble Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 max-w-full">
              {[
                { id: "all", label: "All Tech" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend & DB" },
                { id: "ai", label: "AI & Agents" },
                { id: "devops", label: "DevOps & Langs" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${activeSkillCategory === tab.id
                      ? "bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-105"
                      : "bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Floating Bubble Cloud Showcase */}
          <div className="relative p-6 sm:p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-xl overflow-hidden min-h-[380px] flex flex-col justify-center items-center">
            {/* Ambient Background Gradient for the bubble pool */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-cyan-500/5 to-transparent pointer-events-none" />

            {/* Bubble Grid / Cluster */}
            <div className="relative z-10 w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4.5 py-4">
              {filteredBubbles.map((bubble, idx) => {
                const isSelected = selectedBubble === bubble.name;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedBubble(isSelected ? null : bubble.name)}
                    style={{
                      boxShadow: isSelected ? `0 0 25px ${bubble.glowColor}` : undefined
                    }}
                    className={`group relative flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-2xl sm:rounded-full bg-zinc-900/85 hover:bg-zinc-800/95 border ${bubble.borderColor} backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer text-left ${bubble.animClass}`}
                  >
                    {/* Floating Tech Logo */}
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {bubble.icon}
                    </div>

                    {/* Tech Name & Quick Level Tag */}
                    <div className="flex flex-col">
                      <span className={`text-xs sm:text-sm font-semibold tracking-wide ${bubble.textColor}`}>
                        {bubble.name}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline-block">
                        {bubble.level}
                      </span>
                    </div>

                    {/* Selected Dot Indicator */}
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Bubble Info Bar */}
            {selectedBubble && (
              <div className="mt-4 px-4 py-2 rounded-xl bg-zinc-950/80 border border-violet-500/30 text-xs text-zinc-300 animate-in fade-in flex items-center gap-2 text-center">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span>
                  Focused on <strong>{selectedBubble}</strong>: integrated into production microservices and real-world architectures.
                </span>
              </div>
            )}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-20 sm:scroll-mt-24 space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-cyan-400">Portfolio Work</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
                Featured Projects
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="inline-flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-medium self-start sm:self-auto overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveProjectFilter("all")}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${activeProjectFilter === "all"
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveProjectFilter("ai")}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${activeProjectFilter === "ai"
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                AI & Agents
              </button>
              <button
                onClick={() => setActiveProjectFilter("fullstack")}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${activeProjectFilter === "fullstack"
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                Full-Stack Web
              </button>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative p-5 sm:p-9 rounded-3xl bg-zinc-900/50 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 sm:gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-cyan-300/90">
                      {project.tagline}
                    </p>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pt-1">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-zinc-950/80 border border-zinc-800 text-zinc-300 hover:border-zinc-700 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="flex sm:flex-row lg:flex-col items-center gap-2.5 sm:gap-3 w-full lg:w-44 shrink-0 pt-2 lg:pt-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial lg:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial lg:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <section id="education" className="scroll-mt-20 sm:scroll-mt-24 space-y-6 sm:space-y-8">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-emerald-400">Academic & Honors</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              Education & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Degree Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold mb-2">
                <span>2023 – 2027</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  CGPA: 7.16
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Bachelor of Technology in CSE
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-1">
                Baderia Global Institute of Engineering & Management
              </p>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Computer Science and Engineering with a deep focus on core algorithms, object-oriented systems, distributed databases, and modern software architectures.
              </p>
            </div>

            {/* Achievements Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                <span>Problem Solving</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  Competitive DSA
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                100+ LeetCode DSA Solutions
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-1">
                Data Structures & Algorithms Mastery
              </p>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Consistent problem-solving track record tackling arrays, dynamic programming, tree traversals, graphs, and algorithmic optimizations for high-performance software.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-20 sm:scroll-mt-24">
          <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 text-center relative overflow-hidden">
            <div className="max-w-xl mx-auto space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-violet-400">Let’s Connect</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Have an opportunity or project in mind?
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                I’m always open to discussing full-stack roles, freelance software engineering, or AI systems development. Reach out anytime!
              </p>

              {/* Direct Info Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all hover:scale-105 active:scale-95 break-all sm:break-normal"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{email}</span>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-medium text-xs transition-all active:scale-95"
                >
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{phone}</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white text-xs inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub: Pranjalpatel07</span>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white text-xs inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn: pranjal-patel</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 sm:mt-20 border-t border-zinc-900 bg-[#06070a] py-6 sm:py-8 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p>© {new Date().getFullYear()} Pranjal Patel. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js, React 19 & Tailwind CSS</span>
          </p>
          <a href="#hero" className="hover:text-zinc-300 transition-colors">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
