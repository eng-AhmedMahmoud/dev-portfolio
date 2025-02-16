import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Menu, X, ExternalLink, Mail, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack Next.js 14 e-commerce with server components and streaming",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      tags: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
      title: "AI Dashboard",
      description: "Real-time analytics dashboard with AI-powered insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      tags: ["Next.js", "React Query", "Framer Motion"]
    },
    {
      title: "SaaS Platform",
      description: "Modern SaaS application with authentication and payments",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      tags: ["Next.js", "Prisma", "tRPC"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold text-red-600 tracking-[0.27em] hover:text-red-500 transition-colors">
              NEXTDEV
            </span>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-red-500 transition-colors text-xl font-bold ">About</a>
              <a href="#projects" className="text-white hover:text-red-500 transition-colors text-xl font-bold ">Projects</a>
              <a href="#contact" className="text-white hover:text-red-500 transition-colors text-xl font-bold ">Contact</a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-white hover:text-red-500">About</a>
              <a href="#projects" className="block px-3 py-2 text-white hover:text-red-500">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-red-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="absolute w-[707px] h-[707px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[37px] border-[#E40037] rounded-full blur-[40px] opacity-20 animate-pulse"></div>
          <div className="absolute w-[707px] h-[707px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[37px] border-[#E40037] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mt-16 mb-4">
               John Ficher
                <p className="block text-red-600/80 mt-2 text-7xl z-20">Front-end</p>
                <p className="block text-red-600/80 mt-2 ml-10 text-7xl z-20"> Developer</p>
              </h1>
              <p className="text-xl text-gray-400 mb-8 mt-4">
                Crafting exceptional digital experiences with Next.js and React
              </p>
              <div className="flex gap-4">
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-red-600/20"
                >
                  View Projects <ArrowRight className="animate-pulse" size={20} />
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-4 border-2 border-red-600 text-white rounded-full hover:bg-red-600/10 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=1000"
                alt="Profile"
                className="relative w-full h-[600px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-red-600">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-red-600/20"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-sm px-3 py-1 bg-red-600/20 rounded-full text-red-400 border border-red-600/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-red-600">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Currently open for freelance projects and full-time opportunities
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Mail size={24} />, href: "mailto:hello@example.com" },
              { icon: <Github size={24} />, href: "https://github.com" },
              { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
              { icon: <Twitter size={24} />, href: "https://twitter.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-br from-gray-900 to-black rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 border border-red-600/20 group"
              >
                <div className="text-red-500 group-hover:text-white transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 hover:text-red-500 transition-colors">
            © 2025 NextDev. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;