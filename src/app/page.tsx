import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Zap } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { highlights, profile, projects, services, skills, strengths, timeline } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-mesh text-slate-100">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 glass-effect border-b border-slate-700/50 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Yash
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">About Me</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 btn-gradient rounded-lg px-6 py-2.5 text-sm font-semibold text-white">
            Get in Touch <Mail className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 border border-purple-400/30 w-fit">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight">
                <span className="gradient-text">Full Stack</span>
                <br />
                Developer
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                Building fast, polished web applications with practical backend systems, clean interfaces, and deployment-ready foundations.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span>{profile.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="inline-flex items-center gap-2 btn-gradient rounded-lg px-8 py-3 text-base font-bold text-white shadow-lg">
                View My Work <ArrowUpRight className="h-5 w-5" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-outline-gradient rounded-lg px-8 py-3 text-base font-bold">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass-effect rounded-lg px-8 py-3 text-base font-bold text-slate-300 border border-slate-600 hover:border-purple-400/50 transition-all duration-300">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side - Featured Image */}
          <div className="relative h-[500px] sm:h-[600px] hidden lg:block">
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass-effect border border-purple-400/20 group">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                fill
                priority
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 right-6 glass-effect border border-purple-400/30 rounded-xl p-6 backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{item.value}</div>
                    <div className="mt-1 text-xs font-semibold text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 border-t border-slate-700/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="gradient-text">What I Build</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Expert in creating full-stack solutions that combine beautiful frontends with robust backends</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="card-hover group glass-effect rounded-xl p-8 border border-slate-600 hover:border-purple-400/50 transition-all duration-300">
                  <div className="glow-animation w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 border-t border-slate-700/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Code2 className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Featured Work</span>
            </div>
            <h2 className="text-5xl font-black mb-4">
              <span className="gradient-text">Projects That Stand Out</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">Carefully crafted projects showcasing product thinking and engineering depth</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="card-hover group glass-effect rounded-xl overflow-hidden border border-slate-600 hover:border-purple-400/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30">
                    <Zap className="h-3 w-3 text-purple-400" />
                    <span className="text-xs font-bold text-purple-300">{project.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/50 border border-slate-600 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 border-t border-slate-700/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-5xl font-black mb-4">
              <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <p className="text-slate-400">Tools and technologies I master</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill} className="group glass-effect rounded-full px-6 py-3 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer">
                <span className="font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-20 border-t border-slate-700/50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-black mb-16">
            <span className="gradient-text-secondary">My Journey</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Strengths */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Core Strengths</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="card-hover glass-effect rounded-lg p-6 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300">
                      <Icon className="h-6 w-6 text-cyan-400 mb-3" />
                      <p className="font-bold">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div key={item.title} className="card-hover glass-effect rounded-lg p-6 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 relative pl-8">
                    <div className="absolute left-3 top-6 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                    <div className="text-sm font-bold text-cyan-400 mb-1">{item.label}</div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 border-t border-slate-700/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-black mb-6">
                  <span className="gradient-text">Let&apos;s Work Together</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out and let&apos;s create something amazing together.
              </p>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-lg font-bold text-purple-400 hover:text-purple-300 transition-colors">
                {profile.email} <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-700/50 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500 text-sm">
          <p>© 2024 Yash. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
