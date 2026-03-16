"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, Github, ExternalLink, Menu } from "lucide-react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

  function OrbitIcon({ src, size = 20 }: { src: string; size?: number }) {
    return (
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black border border-red-500/60
      flex items-center justify-center
      shadow-[0_0_15px_rgba(255,0,0,0.6)]">

        <Image src={src} alt="" width={size} height={size} />

      </div>
    );
  }


export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "CareerGPS",
      tag: "Ongoing",
      image: "/projects/careergps.png",
      description: "AI-powered career path and skill mapping platform",
      desc: "AI-powered career path and skill mapping platform.",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com/alishabukhari/CareerGPS",
    },
    {
      title: "Pygame Chess",
      tag: "Game",
      image: "/projects/chess.png",
      description: "Two-player chess game with full rule validation",
      desc: "Two-player chess game with full rule validation and move highlighting.",
      tech: ["Python", "Pygame"],
      github: "https://github.com/alishabukhari/Pygame-Chess",
    },
    {
      title: "RFID Attendance System",
      tag: "Embedded",
      image: "/projects/rfid.png",
      description: "RFID-based logging with STM32",
      desc: "STM32 based attendance logger using RFID, RTC timestamps and EEPROM storage.",
      tech: ["C", "STM32", "RFID", "EEPROM"],
      github: "https://github.com/alishabukhari/rfid-attendace-system-stm32",
    },
    {
      title: "Self-Balancing Seesaw",
      tag: "Embedded",
      image: "/projects/seesaw.png",
      description: "PID-controlled balancing system",
      desc: "PID-controlled balancing system using MPU6050 IMU and STM32 motor control..",
      tech: ["C", "STM32", "MPU6050", "PID"],
      github: "https://github.com/alishabukhari/stm32-self-balancing-seesaw",
    },
    {
      title: "Library Management System",
      tag: "System",
      image: "/projects/library.png",
      description: "Console-based library management",
      desc: "Console-based library management system with issuing, returning and search functionality.",
      tech: ["C", "File Handling"],
      github: "https://github.com/alishabukhari/library-management-system",
    },
    {
      title: "Voting System",
      tag: "System",
      image: "/projects/voting.png",
      description: "Election simulation with secure voting",
      desc: "Election simulation with candidate registration, secure voting and result calculation.",
      tech: ["C"],
      github: "https://github.com/alishabukhari/voting-system-c",
    },
     {
    title: "Wanderlust UI",
    tag: "UI/UX",
    image: "/projects/wanderlust.png",
    description: "Modern travel discovery app UI designed in Figma.",
    desc: "Travel discovery interface designed in Figma with modern search and destination cards.",
    tech: ["Figma", "UX Design", "Prototype"],
    github: "https://github.com/alishabukhari/ui-ux-projects",
  },
  {
    title: "CraveMore UI",
    tag: "UI/UX",
    image: "/projects/burger.png",
    description: "Fast-food ordering mobile UI designed in Figma.",
    desc: "Food delivery mobile interface design focused on playful visual hierarchy.",
    tech: ["Figma", "Mobile UI", "UX"],
    github: "https://github.com/alishabukhari/ui-ux-projects",
  },
  {
    title: "Portfolio",
    tag: "Website",
    image: "/projects/portfolio.png",
    description: "Interactive developer portfolio built with Next.js.",
    desc: "Personal developer portfolio built with Next.js, TailwindCSS, and Framer Motion to showcase projects, technical skills, and design work through a modern interactive interface.",
    tech: ["CSS", "Next.js", "TailwindCSS"],
    github: "https://github.com/alishabukhari/alisha-portfolio",
    
  },
  {
    title: "To-Do App",
    tag: "Internship Task",
    image: "/projects/todo.png",
    description: "Minimal task management app built with HTML, CSS, and JavaScript.",
    desc: "A lightweight task management interface developed as part of an internship assignment. The project features a clean mobile-inspired UI with card-based sections and a soft color palette to organize tasks efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/alishabukhari/to-do"
  }
  ];

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const sectionVariant: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [sent, setSent] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const titles = [
    "Computer Engineer",
  ];
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

useEffect(() => {
  const current = titles[index];

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      setText(current.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex + 1 === current.length) {
        setIsDeleting(true);
      }
    } else {
      setText(current.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);

      if (charIndex === 0) {
        setIsDeleting(false);
        setIndex((index + 1) % titles.length);
      }
    }
  }, isDeleting ? 70 : 140);

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, index]);

if (!mounted) return null;

  return (
    <main className="relative w-full min-h-[100vh] bg-black text-white overflow-y-hidden pt-28 scroll-smooth">

      <div className="relative z-10 flex flex-col">

        {/* NAVBAR */}
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">

          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-24 py-6">
            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex gap-10 text-sm tracking-wide items-center ml-2">
            
                <a
                  href="#home"
                  className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
                  >
                  Home
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                  </a>

                <a href="#about" className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
                >
                  About
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>

                <a
                  href="#skills"
                  className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
                >
                  Skills
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>

                <a
                  href="#projects"
                  className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
                >
                  Projects
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>

                <a
                  href="#contact"
                  className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
                >
                  Contact
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>  

            </div>

            <a
              href="#contact"
              className="px-4 py-2 md:px-6 border border-white/30 rounded-full text-xs md:text-sm ml-auto
              hover:border-red-500 hover:text-red-400
              hover:shadow-[0_0_12px_rgba(255,0,0,0.5)]
              transition duration-300"
            >
              Let's Connect
            </a>

          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden fixed top-20 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 z-40"
           >

            <div className="flex flex-col items-center gap-8 py-8 text-sm">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
              >
                Home
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
              >
                About
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
              >
                Skills
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
              >
                Projects
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="relative inline-block text-white/70 hover:text-red-400 transition-colors duration-300 group"
              >
                Contact
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>

            </div>         

          </motion.div>
        )}


        {/* HERO */}
        <section id="home" className="scroll-mt-28">
          <div className="flex items-start pt-12 md:pt-20 px-6 md:px-24 min-h-screen">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-28 items-center w-full">

              {/* LEFT SIDE */}
              <div>

                <h1 className="text-5xl font-bold">
                  Hi, I'm <span className="text-red-500">Alisha</span>
                </h1>

                <p className="text-red-500 text-xl h-[28px]">
                  {text}
                </p>

                <p className="text-white/60 text-sm mt-2">
                  Aspiring AI Software Engineer
                </p>

                <p className="mt-6 text-white/60 max-w-md leading-relaxed">
                  Building intelligent software products at the intersection of
                  AI, scalable systems, and modern web engineering.
                </p>

                <div className="flex gap-4 mt-8">

                  <a href="#projects"
                    className="inline-block px-6 py-2 bg-red-500 rounded-full text-sm hover:bg-red-600 transition cursor-pointer">
                    My Work
                  </a>

                  <a href="#contact"
                    className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm hover:border-red-400 transition cursor-pointer">
                    Contact Me
                  </a>

                </div>

              </div>


              {/* RIGHT SIDE PROFILE */}
              <div className="flex justify-center">

                <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center mx-auto">

                  {/* RED GLOW */}
                  <div className="absolute w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full bg-red-500/20 blur-3xl"></div>

                  {/* black RING */}
                  <div className="absolute w-[300px] h-[300px] rounded-full border-[1px] border-black
                  shadow-[0_0_0px_rgba(255,0,0,0),0_0_0px_rgba(255,0,0,0)]"></div>

                  {/* PROFILE IMAGE */}
                  <div className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden border border-white/20 z-10">
                  
                      <Image
                        src="/myphoto.jpeg"
                        alt="profile"
                        fill
                        className="object-cover"
                      />
                    
                  </div>


                  {/* ICON ORBIT */}
                <div className="absolute w-[300px] h-[300px] md:w-[340px] md:h-[340px] animate-spin-slow pointer-events-none">

                  {/* REACT */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2">
                  <OrbitIcon src="/icons/react.svg" />
                  </div>

                  {/* FIGMA */}
                  <div className="absolute top-[12%] right-[15%]">
                  <OrbitIcon src="/icons/figma.svg" size={11}/>
                  </div>

                  {/* PYTHON */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2">
                  <OrbitIcon src="/icons/python.svg" />
                  </div>

                  {/* next */}
                  <div className="absolute bottom-[15%] right-[12%]">
                  <OrbitIcon src="/icons/next.svg" />
                  </div>

                  {/* c++ ICON */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                  <OrbitIcon src="/icons/c.svg" />
                  </div>

                  {/* JS */}
                  <div className="absolute bottom-[15%] left-[12%]">
                  <OrbitIcon src="/icons/javascript.svg" />
                  </div>

                  {/* GIT */}
                  <div className="absolute top-1/2 left-[1%] -translate-y-1/2">
                  <OrbitIcon src="/icons/git.svg" />
                  </div>

                  {/* SUPABASE */}
                  <div className="absolute top-[12%] left-[15%]">
                  <OrbitIcon src="/icons/supabase.svg" />
                  </div>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>  


        {/* ================= ABOUT ================= */}

      <motion.section
      id="about"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      className="pt-16 pb-32 border-t border-white/5 scroll-mt-28">

        <div className="max-w-6xl mx-auto px-8 md:px-12">

          {/* TITLE */}
          <div className="mb-16">

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              About <span className="text-red-500">Me</span>
            </h2>

            <div className="w-25 h-[2px] bg-red-500 mt-4"></div>

          </div>


          {/* MAIN GRID */}

          <div className="grid md:grid-cols-[260px_1fr] gap-14 items-start">

            {/* LEFT IMAGE */}

            <div className="flex justify-center">

              <div className="relative group">

                {/* Animated Gradient Glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-red-500 via-red-400 to-red-600 blur-2xl opacity-30 animate-pulse group-hover:opacity-60 transition"></div>

                {/* Image Container */}
                <div className="relative w-[240px] h-[240px] rounded-2xl overflow-hidden border border-white/10">

                  <Image
                    src="/myphoto.jpeg"
                    alt="Alisha"
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

            </div>


            {/* RIGHT CONTENT */}

            <div>

              <p className="text-white/70 leading-relaxed mb-6">
                Computer Engineering student at Ilia State University building scalable
                software systems and intelligent products.
                </p>

                <p className="text-white/70 leading-relaxed mb-2">
                  • Full-Stack Development — FastAPI, Next.js 
                </p>
                <p className="text-white/70 leading-relaxed mb-2">
                  • AI Product Development — CareerGPS platform   
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  • Embedded Systems — STM32, RFID, PID control  
                </p>

                <p className="text-white/70 leading-relaxed mb-10">
                  Aspiring AI Software Engineer focused on creating intelligent systems
                  that combine machine learning with robust software architecture.
                </p>

              {/* CTA CARDS */}
              <div className="relative">

                <div className="absolute inset-0 bg-red-500/5 blur-3xl opacity-40 pointer-events-none"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[780px]">


                  {/* EDUCATION */}

                  <div className="px-8 py-7 rounded-xl border border-red-500/40 bg-black/40
                                  transition transform hover:-translate-y-2 hover:border-red-500
                                  hover:shadow-[0_10px_30px_rgba(255,0,0,0.25)]">

                    <h3 className="text-red-500 font-semibold mb-3 text-lg tracking-wide">
                      Education
                    </h3>

                    <p className="text-white/60 text-sm">
                      2024 - Present
                    </p>

                    <p className="text-white/70 text-sm mt-1">
                      Computer Engineering
                    </p>

                    <p className="text-white/60 text-sm">
                      Ilia State University
                    </p>

                    <p className="text-white/60 text-sm">
                      Tbilisi, Georgia
                    </p>

                  </div>


                  {/* EXPERIENCE */}

                  <div className="px-8 py-7 rounded-xl border border-red-500/40 bg-black/40
                                  transition transform hover:-translate-y-2 hover:border-red-500
                                  hover:shadow-[0_10px_30px_rgba(255,0,0,0.25)]">

                    <h3 className="text-red-500 font-semibold mb-3 text-lg tracking-wide">
                      Experience
                    </h3>

                    <p className="text-white/60 text-sm">
                      Full-Stack Developer
                    </p>

                    <p className="text-white/70 text-sm mt-1">
                      CareerGPS - AI Platform
                    </p>

                    <p className="text-white/60 text-sm">
                      Product Development
                    </p>

                  </div>


                  {/* SOFTWARE */}

                  <div className="px-8 py-7 rounded-xl border border-red-500/40 bg-black/40
                                  transition transform hover:-translate-y-2 hover:border-red-500
                                  hover:shadow-[0_10px_30px_rgba(255,0,0,0.25)]">

                    <h3 className="text-red-500 font-semibold mb-3 text-lg tracking-wide">
                      Tech Stack
                    </h3>

                    <p className="text-white/60 text-sm">
                      VS Code
                    </p>

                    <p className="text-white/60 text-sm">
                      Figma
                    </p>

                    <p className="text-white/60 text-sm">
                      Git & GitHub
                    </p>

                    <p className="text-white/60 text-sm">
                      React, Next.Js
                    </p>

                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= SKILLS ================= */}

      <motion.section
        id="skills"
        className="pt-24 pb-32 border-t border-white/5 scroll-mt-28"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="max-w-6xl mx-auto px-6 md:px-16">

          {/* TITLE */}

          <div className="mb-20">

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Technical <span className="text-red-500">Skills</span>
            </h2>

            <div className="w-24 h-[2px] bg-red-500 mt-4"></div>

          </div>


          {/* GRID */}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">


            {/* ================= FRONTEND ================= */}

            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40
            backdrop-blur-md hover:border-red-500/60 transition
            hover:shadow-[0_10px_40px_rgba(255,0,0,0.25)]">

              <h3 className="text-lg font-semibold mb-8 text-red-400">
                Frontend Development
              </h3>

              {[
                { name: "React", level: 85 },
                { name: "Next.js", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "TailwindCSS", level: 80 },
                { name: "Responsive UI", level: 85 },
              ].map((skill, i) => (

                <div key={i} className="mb-7">

                  {/* SKILL HEADER */}

                  <div className="flex justify-between items-center mb-2 text-sm">

                    <div className="flex items-center gap-2">

                      {/* WHITE DOT */}
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>

                      <span className="text-white/90">
                        {skill.name}
                      </span>

                    </div>

                    <span className="text-white/50">
                      {skill.level}%
                    </span>

                  </div>


                  {/* PROGRESS BAR */}

                  <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r
                      from-red-600 via-red-500 to-red-400
                      shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                    />

                  </div>

                </div>

              ))}

            </div>



            {/* ================= BACKEND ================= */}

            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40
            backdrop-blur-md hover:border-red-500/60 transition
            hover:shadow-[0_10px_40px_rgba(255,0,0,0.25)]">

              <h3 className="text-lg font-semibold mb-8 text-red-400">
                Backend Development
              </h3>

              {[
                { name: "Python", level: 90 },
                { name: "FastAPI", level: 85 },
                { name: "PostgreSQL", level: 75 },
                { name: "REST APIs", level: 85 },
                { name: "System Architecture", level: 75 },
              ].map((skill, i) => (

                <div key={i} className="mb-7">

                  <div className="flex justify-between items-center mb-2 text-sm">

                    <div className="flex items-center gap-2">

                      {/* WHITE DOT */}
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>

                      <span className="text-white/90">
                        {skill.name}
                      </span>

                    </div>

                    <span className="text-white/50">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r
                      from-red-600 via-red-500 to-red-400
                      shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                    />

                  </div>

                </div>

              ))}

            </div>



            {/* ================= TOOLS ================= */}

            <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40
            backdrop-blur-md hover:border-red-500/60 transition
            hover:shadow-[0_10px_40px_rgba(255,0,0,0.25)]">

              <h3 className="text-lg font-semibold mb-8 text-red-400">
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "VS Code",
                  "Git",
                  "GitHub",
                  "Figma",
                  "Supabase",
                  "PostgreSQL",
                  "STM32",
                  "Embedded C",
                  "REST APIs",
                  "AI Tools",
                  "Terminal",
                  "Debugging",
                ].map((tool, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg
                    border border-white/10 bg-black/40
                    hover:border-red-500 hover:text-red-400
                    hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]
                    transition cursor-default"
                  >

                    {/* WHITE DOT */}
                    <span className="w-2 h-2 bg-white rounded-full"></span>

                    {tool}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ================= PROJECTS ================= */}

        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-20 pb-24 border-t border-white/5 scroll-mt-28">

          <div className="max-w-6xl mx-auto px-6 md:px-16">

            {/* TITLE */}

            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Projects
              </h2>

              <div className="w-24 h-[2px] bg-red-500 mt-4"></div>
            </div>

            {/* GRID */}

            <div className="grid md:grid-cols-3 gap-10">

              {projects.map((project, i) => (

                <motion.div
                  key={i}
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative rounded-2xl border border-white/10 bg-[#0b0b0b]
                  backdrop-blur-md p-5 transition hover:border-red-500/60
                  hover:shadow-[0_20px_60px_rgba(255,0,0,0.25)]"
                >

                  {/* PROJECT IMAGE */}

                 <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-5 group">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* color normalizer */}
                    <div className="absolute inset-0 bg-black/40"></div>

                  {/* unified gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                </div>

                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 mb-4">
                    {project.tag}
                  </span>

                  {/* TITLE */}

                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="text-white/70 text-sm mb-6">
                    {project.description}
                  </p>

                  {/* TECH TAGS */}

                  <div className="flex flex-wrap gap-2 mb-8">

                    {project.tech.map((t, idx) => (

                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                      >
                        {t}
                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}

                  <div className="flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10"
                    >
                      <Github size={16} />
                      GitHub
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-sm hover:bg-red-500"
                    >
                      <ExternalLink size={16} />
                      Details
                    </button>

                  </div>

                </motion.div>
              

              ))}

            </div>

          </div>

        </motion.section>

        {/* PROJECT MODAL */}

        {selectedProject && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 max-w-xl w-full relative">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-white/50 hover:text-white"
            >
              <X size={20} />
            </button>

            <span className="inline-block text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 mb-4">
              {selectedProject.tag}
            </span>

            <h3 className="text-3xl font-semibold mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-white/60 mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">

              {selectedProject.tech.map((t:any,i:number)=>(
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {t}
                </span>
              ))}

            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-red-600 hover:bg-red-500"
            >
              <Github size={18}/>
              View on GitHub
            </a>

          </div>

        </div>

        )}

        {/* ================= CONTACT ================= */}

    <motion.section
      id="contact"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="pt-20 pb-24 border-t border-white/5 scroll-mt-28">

      <div className="max-w-6xl mx-auto px-6 md:px-16">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT SIDE */}

          <div className="mb-24">

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Contact
            </h2>

            <div className="w-24 h-[2px] bg-red-500 mt-4 mb-10"></div>

            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              I’m always open to connecting, collaborating, or discussing exciting
              projects in AI, software engineering, and product design.
              Feel free to reach out anytime.
            </p>


            {/* CONTACT DETAILS */}

            <div className="space-y-6">

              {/* EMAIL */}

              <div className="flex items-center gap-3">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
                  1.1.9 2 2 2h16c1.1 0 2-.9 
                  2-2V6c0-1.1-.9-2-2-2zm0 
                  4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>

                <a>
                  alishabuk12@gmail.com
                </a>

              </div>


              {/* PHONE */}
              <div className="flex items-center gap-3 group">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0012.05 0C5.4 0 .02 5.37.02 12c0 
                  2.11.55 4.18 1.6 6.02L0 24l6.2-1.63A11.93 11.93 0 
                  0012.05 24C18.7 24 24.08 18.63 24.08 12c0-3.2-1.25-6.22-3.56-8.52zM12.05 
                  21.8c-1.8 0-3.55-.48-5.08-1.39l-.36-.21-3.68.97.98-3.59-.23-.37A9.77 
                  9.77 0 012.27 12c0-5.39 4.39-9.77 9.78-9.77s9.77 4.38 9.77 
                  9.77-4.38 9.8-9.77 9.8zm5.36-7.33c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 
                  1.12-.16.19-.33.21-.62.07-.29-.14-1.23-.45-2.35-1.43-.87-.78-1.45-1.74-1.62-2.03-.17-.29-.02-.45.12-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.12-.23-.55-.46-.47-.64-.48-.17-.01-.36-.01-.55-.01-.19 
                  0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.18 
                  3 .14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 
                  1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
                </svg>
                
                <a>
                  +995 568 107 278
                </a>

              </div>

              {/* LOCATION */}
            
              <div className="flex items-center gap-3 group">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 
                  13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                  9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 
                  6.5 12 6.5s2.5 1.12 2.5 
                  2.5S13.38 11.5 12 11.5z"/>
                </svg>

                <span className="text-white">Tbilisi, Georgia</span>

              </div>

            </div>


            {/* SOCIAL ICONS */}

            <div className="flex gap-4 mt-10">

              {/* GITHUB */}

              <a
                href="https://github.com/alishabukhari"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center border border-white/10 rounded-full
                text-white/80 hover:border-red-500
                hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]
                transition duration-300 cursor-pointer z-10"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="pointer-events-none transition-colors duration-300 group-hover:text-red-400"
                >
                  <path d="M12 .5C5.7.5.7 5.5.7 11.8c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.3c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2.2 2.8 1.6.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 .1.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.1-.4 3-.1 3-.1.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.1-5.1 5.4.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.3 5.5 18.3.5 12 .5z"/>
                </svg>

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/alisha-bukhari/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 flex items-center justify-center border border-white/10 rounded-full
                text-white/80 hover:border-red-500
                hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]
                transition duration-300 cursor-pointer z-10"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="pointer-events-none transition-colors duration-300 group-hover:text-red-400"
                >
                  <path d="M20.4 20.4h-3.6v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.5.6-1.8 1.2-.1.2-.1.5-.1.8v5.8H9.6s.1-9.4 0-10.4h3.6v1.5c.5-.8 1.4-1.8 3.3-1.8 2.4 0 4.1 1.6 4.1 4.9v5.8zM5.3 7.8c-1.2 0-2-.8-2-1.8 0-1 .8-1.8 2-1.8s2 .8 2 1.8c0 1-.8 1.8-2 1.8zM7.1 20.4H3.5V10h3.6v10.4z"/>
                </svg>

              </a>

              
              {/* GMAIL */}

              <a
                href="mailto:alishabuk12@gmail.com"
                className="group w-12 h-12 flex items-center justify-center border border-white/10 rounded-full
                text-white/80 hover:border-red-500
                hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]
                transition duration-300 cursor-pointer z-10"
              >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="pointer-events-none transition-colors duration-300 group-hover:text-red-400"
              >
                <path d="M12 13.5L2 6.75V18h20V6.75L12 13.5zm10-9H2l10 6.75L22 4.5z"/>
              </svg>

              </a>


            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <div className="relative">

            <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-3xl pointer-events-none"></div>

            <div className="relative bg-[#0b0b0b] border border-red-500/20 rounded-2xl p-6 md:p-10 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            
              {sent ? (
                <div className="text-center py-20">
                  <p className="text-2xl text-white font-semibold mb-2">
                    Message Sent 🚀
                  </p>
                  <p className="text-white/60">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.target;

                    emailjs.sendForm(
                      "service_d8mil0r",
                      "template_w0krleb",
                      form,
                      "LwHhZMH82Vjiyvioz"
                    ).then(
                      () => {
                        setSent(true);

                        // clear inputs
                        form.reset();

                        // return to form after 3 seconds
                        setTimeout(() => {
                          setSent(false);
                        }, 3000);
                      },
                      (error) => {
                        console.log(error);
                      }
                    );
                  }}
                >

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none transition"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none transition"
                  />

                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none transition"
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]
                    text-white py-3 rounded-lg transition font-medium cursor-pointer "
                  >
                    Send Message
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>

    </motion.section>

      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-11 h-11 md:w-12 md:h-12 rounded-full
          bg-red-600 hover:bg-red-500
          flex items-center justify-center
          shadow-[0_0_20px_rgba(255,0,0,0.4)]
          transition transform hover:scale-110 cursor-pointer"
        >
          ↑
        </button>
      )}

    </main>
  );
}