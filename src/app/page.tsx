import {
  ArrowRight,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile, projects, services, skills, strengths, timeline } from "@/lib/data";

const skillGroups = [
  { title: "Languages", items: [["Python", 90], ["JavaScript", 82], ["TypeScript", 78]] },
  { title: "Frameworks", items: [["Next.js", 84], ["React", 80], ["Node.js", 75]] },
  { title: "Infrastructure", items: [["Docker", 85], ["Kubernetes", 76], ["AWS", 82], ["CI/CD", 80]] },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Yash Khandelwal home">
          <span className="brand-mark">YK</span>
          <span>Yash Khandelwal</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-socials">
          <a href={profile.github} aria-label="GitHub"><Github size={19} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19} /></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="eyebrow"><Sparkles size={15} /> Software Developer</p>
          <h1>Yash Khandelwal</h1>
          <h2>Full Stack Developer &amp; Cloud Builder</h2>
          <p className="hero-copy">Building responsive web applications and scalable cloud infrastructure with clean code, thoughtful design, and reliable delivery.</p>
          <div className="stats">
            <div><strong>3+</strong><span>Projects Built</span></div>
            <div><strong>10+</strong><span>Technologies</span></div>
            <div><strong>AWS</strong><span>Cloud Focus</span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Work <ArrowRight size={17} /></a>
            <a className="button" href="#about">About Me</a>
            <a className="button" href="#contact">Get In Touch</a>
          </div>
          <div className="hero-socials">
            <a href={profile.github}><Github size={18} /> GitHub</a>
            <a href={profile.linkedin}><Linkedin size={18} /> LinkedIn</a>
            <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /></a>
      </section>

      <section className="section section-soft" id="about">
        <div className="section-heading"><p className="eyebrow">About</p><h2>About Me</h2></div>
        <div className="about-grid">
          <div className="about-copy">
            <p>I&apos;m a software developer and infrastructure enthusiast who enjoys turning complex ideas into dependable, useful products. I care about the details that make software fast, accessible, and easy to maintain.</p>
            <div className="copy-block"><h3>Current Focus</h3><p>Building cloud-native applications with modern web technologies, AWS, Kubernetes, Docker, and infrastructure as code.</p></div>
            <div className="copy-block"><h3>What I Care About</h3><p>Clean architecture, automated delivery, scalable systems, and practical interfaces that solve real problems.</p></div>
          </div>
          <div className="focus-cards">
            {services.map((service) => { const Icon = service.icon; return <article className="focus-card" key={service.title}><Icon size={22} /><h3>{service.title}</h3><p>{service.text}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading"><p className="eyebrow">Capabilities</p><h2>Skills &amp; Technologies</h2><p>I use a balanced toolkit to build robust products from interface to infrastructure.</p></div>
        <div className="skill-grid">
          {skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3>{group.items.map(([name, amount]) => <div className="skill-row" key={name as string}><div><span>{name}</span><b>{amount}%</b></div><i><em style={{ width: `${amount}%` }} /></i></div>)}</div>)}
        </div>
        <div className="tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section section-soft" id="projects">
        <div className="section-heading"><p className="eyebrow">Selected Work</p><h2>Featured Projects</h2><p>A selection of work spanning machine learning, cloud infrastructure, and full-stack development.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <article className="project-card" key={project.title}>
            <div className="project-number">0{index + 1}</div>
            <div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
            <a className="circle-link" href={profile.github} aria-label={`View ${project.title} on GitHub`}><ArrowRight size={20} /></a>
          </article>)}
        </div>
      </section>

      <section className="section journey">
        <div className="section-heading"><p className="eyebrow">Journey</p><h2>How I Work</h2></div>
        <div className="journey-grid"><div>{strengths.map(({ title, icon: Icon }) => <div className="strength" key={title}><Icon size={20} /><span>{title}</span></div>)}</div><div className="timeline">{timeline.map((item) => <article key={item.title}><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading"><p className="eyebrow">Contact</p><h2>Let&apos;s Connect</h2><p>Have an idea, an opportunity, or a project in mind? I&apos;d love to hear from you.</p></div>
        <div className="contact-grid"><div className="contact-links"><h3>Get In Touch</h3><a href={`mailto:${profile.email}`}><Mail size={20}/><span><b>Email</b>{profile.email}</span></a><a href={profile.linkedin}><Linkedin size={20}/><span><b>LinkedIn</b>Connect with me</span></a><a href={profile.github}><Github size={20}/><span><b>GitHub</b>Explore my code</span></a><div className="collab"><h4>Open to collaborating on</h4><div className="tags"><span>Web apps</span><span>Cloud systems</span><span>DevOps</span><span>APIs</span></div></div></div><div><h3 className="form-title">Send a Message</h3><ContactForm /></div></div>
      </section>
      <footer><span>Built with care to showcase my work and ideas.</span><span>© 2026 Yash Khandelwal</span></footer>
    </main>
  );
}
