import { useState, useEffect } from "react"
import {
  SiEspressif,  
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiJupyter,
  SiNumpy,
  SiFlutter,
  SiMqtt,
  SiDotnet,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiReact,
  SiVite,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiVercel
} from "react-icons/si"
import { PiAvocadoBold } from "react-icons/pi";
import { TbBrandCSharp } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("joaobrito.cassiano@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/background-pixeled.gif')" }}
    >
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none" : "bg-transparent"
        }`}
      >
        <div className="flex gap-4 text-xl items-center">
          <a href="https://github.com/JoaoCassianoo" target="_blank">
            <FaGithub className="hover:text-[#7fffd4] transition" size={50}/>
          </a>
          <a href="https://www.linkedin.com/in/joaocassiannoo/" target="_blank">
            <FaLinkedin className="hover:text-[#7fffd4] transition" size={50}/>
          </a>
          <button onClick={copyEmail} className="relative group">
            <MdEmail className="hover:text-[#7fffd4] transition" size={55} />
            <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-lg bg-[#7fffd4] text-black font-medium whitespace-nowrap transition-all duration-300 ${copied ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              Copied!
            </span>
          </button>
        </div>
        <p>Let’s Connect</p>
      </nav>

      <div className="min-h-screen bg-black/75 backdrop-blur-sm">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer copyEmail={copyEmail} copied={copied} />

      </div>
    </div>
  )
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-white/60 mb-2"
      >
        Hello there 👋, I'm
      </motion.p>

      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-[#7fffd4] mb-4"
      >
        João Cassiano
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-white"
      >
        🚀 Back-End Developer | .NET + React 👨🏽‍💻
      </motion.h2>

    </section>
  )
}

/* ================= ABOUT (FIXED) ================= */

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#7fffd4]/60 text-sm uppercase tracking-[0.3em] mb-16 text-center"
        >
          — Who I Am —
        </motion.p>

        {/* Main Card */}
        <div className="relative">

          {/* Glow behind card */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 30% 50%, #7fffd4 0%, transparent 70%)" }}
          />

          <div className="relative border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md bg-white/5">

            <div className="flex flex-col md:grid md:grid-cols-2">

              {/* LEFT — Image Column */}
              <div className="relative flex flex-col items-center justify-end bg-gradient-to-b from-[#7fffd4]/5 to-transparent min-h-[320px] md:min-h-[420px] overflow-hidden pt-10">

                {/* Decorative circles — centered absolutely */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 rounded-full border border-[#7fffd4]/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-52 h-52 rounded-full border border-[#7fffd4]/15" />
                </div>

                {/* Floating badge — above the image, won't overlap */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 bg-[#7fffd4]/10 border border-[#7fffd4]/30 rounded-full px-4 py-2 mb-16 z-10"
                >
                  <span className="w-2 h-2 rounded-full bg-[#7fffd4] animate-pulse" />
                  <span className="text-[#7fffd4] text-xs font-medium tracking-wider">Open to Work</span>
                </motion.div>

                <motion.img
                  src="/Me.png"
                  alt="João Cassiano"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="relative md:bottom-20 z-10 w-56 md:w-64 object-contain drop-shadow-[0_0_40px_rgba(127,255,212,0.3)]"
                />
              </div>

              {/* RIGHT — Text Column */}
              <div className="p-10 md:p-14 flex flex-col justify-center">

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-white mb-1"
                >
                  João Cassiano
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[#7fffd4] text-sm tracking-widest uppercase mb-8"
                >
                  Back-End Developer · 19 y/o
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-5 text-white/70 leading-relaxed text-base"
                >
                  <p>
                    Focused on <span className="text-white font-medium">.NET Back-End development</span>, I'm currently
                    building and evolving a complete SaaS platform from scratch.
                  </p>
                  <p>
                    Through it, I've been deepening my knowledge in business rules,
                    subscription systems, payment integrations and
                    <span className="text-white font-medium"> scalable architecture</span>.
                  </p>
                  <p>
                    I'm constantly improving while building real-world systems
                    and always eager to learn something new.
                  </p>
                </motion.div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { value: "3+", label: "Projects" },
                    { value: ".NET", label: "Main Stack" },
                    { value: "100%", label: "Committed" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-[#7fffd4]">{stat.value}</p>
                      <p className="text-xs text-white/40 mt-1 tracking-wider uppercase">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
/* ================= SKILLS ================= */

function Skills() {
  const skillGroups = [
    {
      title: "🚀 Backend (Main Focus)",
      skills: [
        { name: "C#", icon: <TbBrandCSharp /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "🗄 Database & Architecture",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      title: "🎨 Frontend (Supporting)",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "⚙ Tools",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <SiDocker /> },
      ],
    },
  ]

  return (
    <section className="py-40 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#7fffd4] mb-4"
        >
          Tech Stack
        </motion.h2>

        <div className="space-y-20">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-white/80 mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-10">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center group transition"
                  >
                    <div className="text-5xl text-white/70 group-hover:text-[#7fffd4] group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="mt-3 text-sm text-white/60 group-hover:text-white transition">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= PROJECTS ================= */

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-40 px-6"
    >
      <h2 className="text-4xl font-bold text-center text-[#7fffd4] mb-12">
        Projects
      </h2>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center lg:mx-50">

        {/* SAAS Project CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 h-auto backdrop-blur-lg w-full">

          {/* MOCKUP */}
          <div className="relative flex justify-center mb-12">
            <img 
              src="/meuateliePC.png" 
              className="w-full max-w-2xl rounded-xl shadow-2xl"
            />
          </div>

          {/* TITLE */}
          <h3 className="text-lg md:text-3xl font-semibold text-center mb-3">
            SaaS Management Platform
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-white/70 text-center leading-relaxed max-w-2xl mx-auto mb-5">
            Full-stack SaaS management platform built with .NET,
            featuring financial control, inventory and sales management,
            subscription lifecycle automation, secure payment integration,
            and event-driven webhook architecture designed for scalability and security.
          </p>

          {/* STACK */}
          <div className="mb-5">
            <h4 className="text-center text-white/60 mb-3 tracking-wider uppercase text-sm">
              Technologies
            </h4>

            <div className="flex flex-wrap justify-center gap-10">

              {[
                { icon: <SiDotnet />, name: ".NET" },
                { icon: <SiReact />, name: "React" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiSupabase />, name: "Supabase" },
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiVercel />, name: "Vercel" },
                { icon: <PiAvocadoBold />, name: "Abacate Pay" },
              ].map((tech) => (
                <div 
                  key={tech.name}
                  className="flex flex-col items-center group"
                >
                  <div className="text-4xl t text-[#7fffd4] scale-110 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm text-white transition">
                    {tech.name}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <a
              href="https://github.com/JoaoCassianoo/meuatelie-api"
              target="_blank"
              className="text-center px-8 py-3 rounded-xl border border-[#7fffd4] text-[#7fffd4] font-semibold hover:bg-[#7fffd4] hover:text-black transition"
            >
              Backend Repository
            </a>

            <a
              href="https://github.com/JoaoCassianoo/meuatelie-frontend"
              target="_blank"
              className="text-center px-8 py-3 rounded-xl border border-[#7fffd4] text-[#7fffd4] font-semibold hover:bg-[#7fffd4] hover:text-black transition"
            >
              Frontend Repository
            </a>

          </div>

        </div>

        {/* PROJECT CARD - AI */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 h-auto backdrop-blur-lg w-full">

          <div className="relative flex justify-center mb-12">
            <img 
              src="/ia.png" 
              className="w-full max-w-2xl rounded-xl shadow-2xl"
            />
          </div>

          <h3 className="text-lg md:text-3xl font-semibold text-center mb-3">
            Fraud Detection AI System
          </h3>

          <p className="text-sm text-white/70 text-center leading-relaxed max-w-2xl mx-auto mb-5">
            Machine Learning project focused on fraud detection in financial transactions
            using Ensemble Learning techniques. Developed in Python with data preprocessing,
            model training, evaluation and performance optimization.
          </p>

          <div className="mb-5">
            <h4 className="text-center text-white/60 mb-3 tracking-wider uppercase text-sm">
              Technologies
            </h4>

            <div className="flex flex-wrap justify-center gap-10">
              {[
                { icon: <SiPython />, name: "Python" },
                { icon: <SiScikitlearn />, name: "Scikit-Learn" },
                { icon: <SiPandas />, name: "Pandas" },
                { icon: <SiJupyter />, name: "Jupyter" },
                { icon: <SiNumpy />, name: "NumPy" },
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="text-4xl text-[#7fffd4]">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm text-white">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="LINK_DO_REPOSITORIO_DA_IA_AQUI"
              target="_blank"
              className="text-center px-8 py-3 rounded-xl border border-[#7fffd4] text-[#7fffd4] font-semibold hover:bg-[#7fffd4] hover:text-black transition"
            >
              View Repository
            </a>
          </div>

        </div>
        {/* PROJECT CARD - TCC */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 h-auto backdrop-blur-lg w-full">

          <div className="relative flex justify-center mb-12">
            <img 
              src="/tcc.png" 
              className="w-full max-w-2xl rounded-xl shadow-2xl"
            />
          </div>

          <h3 className="text-lg md:text-3xl font-semibold text-center mb-3">
            EduCare - Smart Autism Support System
          </h3>

          <p className="text-sm text-white/70 text-center leading-relaxed max-w-2xl mx-auto mb-5">
            IoT-based smart bracelet developed with ESP32 to monitor physiological signals 
            and behavioral patterns in children within the autism spectrum.  
            Integrated with a Python-based AI model to predict potential crisis episodes.  
            The system uses MQTT for real-time communication and Supabase for cloud data management, 
            alongside a Flutter mobile application for monitoring and alerts.
          </p>

          <div className="mb-5">
            <h4 className="text-center text-white/60 mb-3 tracking-wider uppercase text-sm">
              Technologies
            </h4>

            <div className="flex flex-wrap justify-center gap-10">
              {[
                { icon: <SiEspressif />, name: "ESP32" },
                { icon: <SiPython />, name: "Python AI Model" },
                { icon: <SiFlutter />, name: "Flutter" },
                { icon: <SiSupabase />, name: "Supabase" },
                { icon: <SiMqtt />, name: "MQTT Protocol" },
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="text-4xl text-[#7fffd4]">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm text-white">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://github.com/cc22153/EduCare"
              target="_blank"
              className="text-center px-8 py-3 rounded-xl border border-[#7fffd4] text-[#7fffd4] font-semibold hover:bg-[#7fffd4] hover:text-black transition"
            >
              View Repository
            </a>
          </div>

        </div>
        {/* PROJECT CARD - ALL REPOSITORIES */}
        <div className="bg-gradient-to-br from-[#0f172a] to-black border border-[#7fffd4]/30 rounded-3xl p-10 backdrop-blur-lg w-full flex flex-col justify-center items-center text-center">

          <div className="mb-8 text-6xl text-[#7fffd4] animate-pulse">
            <FaGithub />
          </div>

          <h3 className="text-lg md:text-3xl font-semibold mb-4">
            Explore More Projects
          </h3>

          <p className="text-sm text-white/70 leading-relaxed max-w-xl mb-8">
            Discover additional experiments, backend architectures, 
            APIs, automation systems and ongoing learning projects 
            available on my GitHub profile.
          </p>

          <a
            href="https://github.com/JoaoCassianoo"
            target="_blank"
            className="px-10 py-3 rounded-xl bg-[#7fffd4] text-black font-semibold hover:scale-105 transition-transform duration-300"
          >
            Visit GitHub Profile
          </a>

        </div>
      </div>
    </motion.section>
  )
}

/* ================= FOOTER ================= */

function Footer({ copyEmail, copied }) {
  return (
    <footer className="relative py-24 px-6 mt-10">

      {/* Top divider line */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#7fffd4]/30 to-transparent mb-20" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#7fffd4]/50 text-sm uppercase tracking-[0.3em] mb-3">— Let's Connect —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in touch
          </h2>
          <p className="text-white/40 mt-4 text-base max-w-md">
            Open to new opportunities, collaborations, or just a good conversation about tech.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* GitHub */}
          <a
            href="https://github.com/JoaoCassianoo"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:border-[#7fffd4]/50 hover:bg-[#7fffd4]/10 transition-all duration-300 group"
          >
            <FaGithub size={22} className="text-white/60 group-hover:text-[#7fffd4] transition" />
            <span className="text-white/70 group-hover:text-white text-sm font-medium transition">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joaocassiannoo/"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:border-[#7fffd4]/50 hover:bg-[#7fffd4]/10 transition-all duration-300 group"
          >
            <FaLinkedin size={22} className="text-white/60 group-hover:text-[#7fffd4] transition" />
            <span className="text-white/70 group-hover:text-white text-sm font-medium transition">LinkedIn</span>
          </a>

          {/* Email copy */}
          <button
            onClick={copyEmail}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:border-[#7fffd4]/50 hover:bg-[#7fffd4]/10 transition-all duration-300 group relative"
          >
            <MdEmail size={22} className="text-white/60 group-hover:text-[#7fffd4] transition" />
            <span className="text-white/70 group-hover:text-white text-sm font-medium transition">
              {copied ? "Copied!" : "joaobrito.cassiano@gmail.com"}
            </span>
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-lg bg-[#7fffd4] text-black font-semibold whitespace-nowrap animate-bounce">
                ✓ Copied to clipboard!
              </span>
            )}
          </button>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-2 text-white/20 text-sm pt-6 border-t border-white/5 w-full justify-between"
        >
          <p>© {new Date().getFullYear()} João Cassiano</p>
          <p>Built with React + Tailwind + ☕</p>
        </motion.div>

      </div>
    </footer>
  )
}
