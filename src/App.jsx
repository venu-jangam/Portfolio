import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, Sun, Github, Linkedin, Mail, MapPin, 
  ChevronRight, ExternalLink, GraduationCap, 
  Briefcase, Rocket, Cpu, Award, Send 
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('space');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const categories = [
    { id: 'space', label: 'Space & ISRU', icon: <Rocket size={18} /> },
    { id: 'robotics', label: 'Robotics', icon: <Cpu size={18} /> },
    { id: 'leadership', label: 'Engineering & Leadership', icon: <Award size={18} /> },
  ];

  const projects = {
    space: [
      {
        title: "Mechanical & Jr. Systems Engineer",
        org: "Space Copy, Canada",
        period: "10/2024 - Present",
        description: "Systems Engineering for ISRU technologies for Additive Manufacturing on the Moon and extreme environments. Progressed from Intern to Mechanical Engineer to Jr. Systems Engineer.",
        link: "https://linkedin.com/in/Linkedin-Venu-Jangam"
      },
      {
        title: "Lead Mechanical Engineer",
        org: "ISU Team Project",
        period: "10/2025 - Present",
        description: "Design and prototyping of Rover, Drone, EDL Vehicle, and payload deployment for a Mars mission.",
        link: "#"
      },
      {
        title: "Student Researcher (Lunar Regolith)",
        org: "University of Wroclaw",
        period: "12/2025 - Present",
        description: "DEM analysis on lunar regolith simulant to study behavioral properties for future missions.",
        link: "#"
      }
    ],
    robotics: [
      {
        title: "u robot",
        org: "Personal Project",
        period: "Ongoing",
        description: "Developing an autonomous robotic platform. Focused on modular design and integrated sensing.",
        link: "#",
        isGallery: true
      },
      {
        title: "Researcher - Robotics",
        org: "Robotics Research Lab (RRL), India",
        period: "04/2022 - 06/2025",
        description: "Design, prototyping, and manufacturing of ready-to-function parts for human-sized robots.",
        link: "#"
      }
    ],
    leadership: [
      {
        title: "Project Student",
        org: "PQM Lab, IUCAA",
        period: "01/2024 - 04/2025",
        description: "Designed and implemented high precision optical mountings for advanced astronomical instrumentation.",
        link: "#"
      },
      {
        title: "Team Lead & Founder",
        org: "Team Astrophile, GCOEARA",
        period: "04/2023 - 06/2025",
        description: "Led a team of engineering students in designing and competing in various aerospace and astronomy competitions.",
        link: "#"
      }
    ]
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden font-sans transition-colors duration-500 ${darkMode ? 'dark text-white bg-space-900' : 'text-gray-900 bg-gray-50 moon-bg'}`}>
      
      {/* Background Elements */}
      {darkMode && (
        <div className="fixed inset-0 z-0 stars-bg opacity-40 pointer-events-none"></div>
      )}
      
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-space-900/50 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            VJ.
          </motion.div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-white dark:bg-space-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-110 transition-all active:scale-95"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative z-10 container mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-44 h-44 md:w-56 md:h-56 rounded-3xl bg-white dark:bg-space-800 border-4 border-white dark:border-gray-700 shadow-2xl overflow-hidden mb-10 rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center group"
        >
          {/* Replace with <img src="/Profile Venu.png" ... /> */}
          <div className="text-center p-6 text-gray-400 group-hover:scale-110 transition-transform">
             <Rocket size={40} className="mx-auto mb-2 text-blue-500" />
             <p className="text-xs font-mono">Profile Venu.png</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Venu Jangam
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl font-light mb-10 leading-relaxed">
            Mechanical & Systems Engineer <span className="text-blue-500 font-normal">|</span> Space Tech & Robotics
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="https://linkedin.com/in/Linkedin-Venu-Jangam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:-translate-y-1">
            <Linkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="mailto:venujangam.fr@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-space-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <Mail size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="font-medium">Email Me</span>
          </a>
        </motion.div>
      </header>

      {/* Education Section */}
      <section id="education" className="relative z-10 py-24 bg-white/50 dark:bg-space-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-4xl font-bold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white dark:bg-space-800 border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none"
            >
              <div className="text-blue-500 font-mono text-sm mb-2">09/2025 - Present</div>
              <h3 className="text-xl font-bold mb-2">Masters of Space Studies</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Space Engineering & Applications</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} />
                <span>International Space University (ISU), France</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white dark:bg-space-800 border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none"
            >
              <div className="text-blue-500 font-mono text-sm mb-2">06/2021 - 06/2025</div>
              <h3 className="text-xl font-bold mb-2">Bachelor of Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Mechanical Engineering</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} />
                <span>Government College of Engineering and Research, Pune, India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Projects Section */}
      <section id="experience" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500">
                <Briefcase size={32} />
              </div>
              <h2 className="text-4xl font-bold">Experience & Projects</h2>
            </div>

            <div className="flex bg-gray-100 dark:bg-space-800 p-1 rounded-2xl">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeTab === cat.id 
                    ? 'bg-white dark:bg-space-700 shadow-sm text-blue-500' 
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {cat.icon}
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {projects[activeTab].map((project, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-white dark:bg-space-800 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="text-xs font-mono text-blue-500 mb-3">{project.period}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{project.org}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.link} 
                    className="absolute bottom-8 left-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-500 hover:gap-3 transition-all"
                  >
                    {project.isGallery ? 'View Gallery' : 'Read more on LinkedIn'}
                    <ChevronRight size={14} />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 mb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Let's build the future together</h2>
              <p className="text-blue-100">Have a project or opportunity? Send me a message below.</p>
            </div>

            <form 
              action="mailto:venujangam.fr@gmail.com" 
              method="post" 
              enctype="text/plain"
              className="relative z-10 space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  name="name"
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email"
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  required
                />
              </div>
              <textarea 
                placeholder="Message" 
                name="message"
                rows="4"
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full py-4 rounded-2xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-12 text-center text-sm text-gray-500 border-t border-gray-200/50 dark:border-gray-800/50">
        <p>© {new Date().getFullYear()} Venu Jangam. Built with React & Space Tech.</p>
      </footer>
    </div>
  );
}

export default App;
