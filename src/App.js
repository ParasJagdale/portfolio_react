import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  Twitter,
  X,
  FileText,
} from "lucide-react";
import { projects } from "./projectsData";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import { blogs } from "./data/blogs";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const experiences = [
  {
    role: "Full-Stack Intern",
    company: "Product Studio",
    period: "2025 · 6 months",
    details:
      "Built scalable UI systems and collaborated on backend API integrations to ship production features.",
  },
  {
    role: "Hackathon Finalist",
    company: "AI Solutions Challenge",
    period: "2024",
    details:
      "Led a small team to deliver an AI-driven interview practice platform focused on student outcomes.",
  },
  {
    role: "Open Source Contributor",
    company: "React Community",
    period: "2023 - Present",
    details:
      "Contributed UI improvements and documentation updates to community tools.",
  },
];

const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Testing",
  "UI Systems",
];

const MotionSection = ({ id, children, className }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 p-6"
    >
      <div className="glass-card w-full max-w-3xl border-slate-200/60 bg-white/90 p-6 dark:border-white/10 dark:bg-slate-900/70">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Resume Preview
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              Paras Jagdale
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200/60 p-2 text-slate-500 transition hover:text-slate-900 dark:border-white/10 dark:text-slate-300"
            aria-label="Close resume preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200/50 bg-white/70 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300">
          <p>
            Add your PDF resume as public/resume.pdf to enable the embedded
            preview.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200/60 bg-white dark:border-white/10 dark:bg-slate-950">
            <iframe
              title="Resume preview"
              src="/resume.pdf"
              className="h-96 w-full"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            <FileText className="h-4 w-4" /> Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

const Home = ({ onOpenResume }) => {
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [],
  );

  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">
              Hello,
              <br />
              My name is Paras
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              I'm currently a software engineering student.
            </p>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              My areas of interest include full-stack development, cloud
              infrastructure, machine learning, and building scalable systems.
            </p>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              With a detail-oriented focus, I enjoy creating simple but
              effective solutions to improve application performance, ease of
              maintenance, and user experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-500 dark:text-white dark:decoration-slate-600 dark:hover:decoration-slate-400"
              >
                View My Projects
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-500 dark:text-white dark:decoration-slate-600 dark:hover:decoration-slate-400"
              >
                Get My Resume
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative h-96 w-96 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800">
              <img
                src="/paras.png"
                alt="Paras Jagdale"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <MotionSection id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
            I design and build interfaces that stay consistent at scale. My
            approach combines clean architecture, performance budgets, and
            design system thinking to ship reliable experiences for users and
            teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="featured" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="projects" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          All Projects
        </h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
          These are my open source projects which are fetched directly from
          GitHub. If you're a developer, feel free to make a pull request!
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <FileText className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                {project.techStack.slice(0, 2).map((tech, i) => (
                  <span key={tech} className="flex items-center gap-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-yellow-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="experience" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Experience
        </h2>
        <div className="mt-10 max-w-3xl space-y-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {experience.company} · {experience.period}
              </p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                {experience.details}
              </p>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="blogs" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Recent Blogs
          </h2>
          <Link
            to="/blogs"
            className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-500 dark:text-white dark:decoration-slate-600"
          >
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link to={`/blogs/${blog.slug}`}>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {blog.summary}
                </p>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
                  {blog.date} · {blog.readTime}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Have a project idea or opportunity? I respond within 24 hours.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="h-5 w-5" />
                <span>parasjagdale15@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="h-5 w-5" />
                <span>India</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/ParasJagdale"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </MotionSection>
    </main>
  );
};

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        message: contactForm.message,
        to_email: "parasjagdale15@gmail.com",
        reply_to: contactForm.email,
      };

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
          placeholder="Your name"
        />
      </div>
      <div>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={contactForm.email}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <textarea
          id="contact-message"
          name="message"
          value={contactForm.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {submitStatus === "success" && (
        <p className="mt-4 text-sm text-emerald-500">
          Message sent. I will reply soon.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-sm text-rose-500">
          Please complete all fields and try again.
        </p>
      )}
    </form>
  );
};

const AppShell = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const nextTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const scrollToSection = (id) => {
    if (!isHome) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-blue-500"
        style={{ scaleX }}
      />
      <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-xl font-bold text-slate-900 dark:text-white"
          >
            Paras Jagdale
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <NavLink
              to="/blogs"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Blog
            </NavLink>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-200/60 p-2 text-slate-600 transition hover:text-slate-900 dark:border-white/10 dark:text-slate-300"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </nav>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-full border border-slate-200/60 p-2 text-slate-600 transition hover:text-slate-900 dark:border-white/10 dark:text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="border-t border-slate-200/60 bg-white/80 px-6 py-4 dark:border-white/10 dark:bg-slate-950/90 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-semibold text-slate-600 dark:text-slate-300"
                >
                  {item.label}
                </button>
              ))}
              <NavLink
                to="/blogs"
                className="text-left text-sm font-semibold text-slate-600 dark:text-slate-300"
              >
                Blog
              </NavLink>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-left text-sm font-semibold text-slate-600 dark:text-slate-300"
              >
                Toggle theme
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={<Home onOpenResume={() => setIsResumeOpen(true)} />}
          />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
        </Routes>
      </div>

      <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Paras Jagdale. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/ParasJagdale"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

const App = () => (
  <>
    <ScrollToTop />
    <AppShell />
  </>
);

export default App;
