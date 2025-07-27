import React, { useState } from "react";
import { projects } from "./projectsData.js";
import Galaxy from "./components/Galaxy.js";
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from "./config/emailConfig.js";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Validate form
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

      // Prepare email parameters for you (main contact email)
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        message: contactForm.message,
        to_email: 'parasjagdale15@gmail.com',
        reply_to: contactForm.email,
      };

      // Send email to you (this is the primary email)
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // Only proceed if the main email was successful
      if (response.status === 200) {
        // Try to send auto-reply, but don't fail if it doesn't work
        try {
          const autoReplyParams = {
            to_name: contactForm.name,
            to_email: contactForm.email,
            from_name: 'Paras Jagdale',
            // Try multiple common variable names for email
            user_email: contactForm.email,
            recipient_email: contactForm.email,
            email: contactForm.email,
            // Try multiple common variable names for name
            user_name: contactForm.name,
            recipient_name: contactForm.name,
            name: contactForm.name,
            // Message content
            message: `Hi ${contactForm.name},\n\nThank you for reaching out! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nParas Jagdale\n\nPortfolio: https://parasjagdale.dev\nEmail: parasjagdale15@gmail.com`,
          };

          // Send auto-reply (optional - won't fail main functionality)
          const autoReplyResponse = await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.AUTOREPLY_TEMPLATE_ID,
            autoReplyParams
          );
          
        } catch (autoReplyError) {
          // Auto-reply failed - could log to external service in production
          // Don't fail the whole process if auto-reply fails
        }

        setSubmitStatus("success");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      // Could implement error logging service here
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-950 shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Paras Jagdale</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Galaxy Background */}
        <Galaxy />
        
        {/* Content Layer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-700 to-pink-700 p-1 relative z-20">
                <div className="w-full h-full rounded-full bg-gray-900 p-2">
                  <img
                    src={require("./paras.png")}
                    className="w-full h-full object-cover rounded-full"
                    alt="Paras"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-20">
              Hi, I'm <span className="text-blue-400">Paras Jagdale</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto relative z-20">
              Passionate Student, Purposeful Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm a dedicated developer with a passion for creating innovative
              solutions and bringing ideas to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Story
              </h3>
              <p className="text-gray-400 mb-6">
                With several years of experience in web development, I
                specialize in creating modern, responsive, and user-friendly
                applications. I'm passionate about clean code, best practices,
                and continuous learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                  Full Stack Development
                </span>
                <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">
                  React & Node.js
                </span>
                <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-sm">
                  UI/UX Design
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-gray-400">Full-Stack Projects Built</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">800+</div>
                  <div className="text-gray-400">Hours of Coding Practice</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">4</div>
                  <div className="text-gray-400">Internships & Hackathons</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400">100%</div>
                  <div className="text-gray-400">Commitment to Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-950 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm proficient in a wide range of technologies and always eager to
              learn new ones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Frontend
              </h3>
              <p className="text-gray-400 mb-4">
                Creating beautiful and responsive user interfaces
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  CSS
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  HTML
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
              <p className="text-gray-400 mb-4">
                Building robust and scalable server-side applications
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  Express
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  APIs
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tools</h3>
              <p className="text-gray-400 mb-4">
                Using modern development tools and workflows
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  Git
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  Docker
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  VS Code
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                  AWS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-400">
                      parasjagdale15@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-400">+91 9579201729</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-gray-400">Pune, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
<<<<<<< HEAD
                  <a
                    href="https://github.com/ParasBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/paras-jagdale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/paras__029_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
=======
                  <button className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <a
                      href="https://github.com/parasjagdale"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </button>
                  <button className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <a
                      href="https://www.linkedin.com/in/paras-jagdale/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                  </button>
                  <button className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <a
                      href="https://www.instagram.com/paras__029_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={20} />
                    </a>
                  </button>
>>>>>>> 92834507b3a6428b415eeebe55fe1679a6a0276f
                </div>
              </div>
            </div>

            <div className="bg-gray-950 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <div className="text-green-400 text-center p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                  <div className="font-semibold">Message sent successfully!</div>
                  <div className="text-sm mt-1">Thank you for reaching out. I'll get back to you soon!</div>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-400 text-center p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                  <div className="font-semibold">Oops! Something went wrong.</div>
                  <div className="text-sm mt-1">Please check your information and try again, or contact me directly at parasjagdale15@gmail.com</div>
                </div>
              )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="">© Designed and Developed by Paras Jagdale. </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;