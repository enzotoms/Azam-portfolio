import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Smartphone,
   Code, TrendingUp, DollarSign, Wallet, ShieldCheck,
    Database, LayoutGrid, Palette, Rocket, User, Briefcase, Star, Send, Calendar, Link, 
    MessageCircle,
    Phone,
    MapPin,
    Twitter} from 'lucide-react'; // Using Lucide React for icons
import { PiTelegramLogo } from "react-icons/pi";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    requirements: '',
    budget: '',
    deadline: '',
    examples: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

   // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email body
    const emailBody = `
New Project Inquiry from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not specified'}

Project Details:
- Project Type: ${formData.projectType}
- Requirements: ${formData.requirements}
- Budget: ${formData.budget}
- Deadline: ${formData.deadline}
- Reference Examples: ${formData.examples || 'None provided'}
- Additional Information: ${formData.additionalInfo || 'None provided'}

Please respond to this inquiry at your earliest convenience.
    `.trim();

      // Create mailto link
    const mailtoLink = `mailto:zamzamdestiny@gmail.com?subject=New Project Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a brief delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        requirements: '',
        budget: '',
        deadline: '',
        examples: '',
        additionalInfo: ''
      });

      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your email client should open with your project details. Please send the email to complete your inquiry.');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };


  // Smooth scrolling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80; // Adjust for fixed header
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const skills = [
    { category: 'Blockchain & Smart Contracts', icon: <ShieldCheck size={24} />, items: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'Truffle', 'IPFS', 'ERC Standards (20, 721, 1155)', 'DeFi Protocols'] },
    { category: 'Web Development', icon: <Code size={24} />, items: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'] },
    { category: 'Mobile Development', icon: <Smartphone size={24} />, items: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Flutter', 'Firebase', 'APIs for Mobile'] },
    { category: 'General Programming', icon: <Database size={24} />, items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Git & GitHub', 'CI/CD'] },
  ];

  const projects = [
    {
      title: 'Decentralized Exchange (DEX) TraceonAI',
      description: 'A non-custodial decentralized exchange built on Ethereum, allowing users to swap ERC-20 tokens directly from their wallets. Features include liquidity pools, yield farming, and real-time price charts.',
      tech: ['Solidity', 'React.js', 'Web3.js', 'Node.js', 'Hardhat', 'Tailwind CSS'],
      image: '/img/traceioimg.jpg', // Placeholder image
      link: 'https://www.traceonai.io/'
    },
    {
      title: 'NFT Marketplace',
      description: 'A full-stack NFT marketplace platform enabling users to mint, buy, sell, and auction unique digital collectibles. Integrated with IPFS for decentralized storage of metadata.',
      tech: ['Solidity', 'Next.js', 'Ethers.js', 'Moralis', 'MongoDB', 'IPFS'],
      image: '/img/boominu.jpg', // Placeholder image
      link: 'https://bombshelterinu.com/'
    },
    {
      title: 'Cross-Platform Crypto Wallet App',
      description: 'A secure mobile wallet application supporting multiple cryptocurrencies and NFTs. Features include transaction history, QR code scanning, and dApp browser integration.',
      tech: ['React Native', 'Firebase', 'Redux', 'WebSockets', 'Swift', 'Kotlin'],
      image: '/img/dexswap.jpg', // Placeholder image
      link: 'https://www.dextools.io/app/en/ether/pairs'
    },
    {
      title: 'Blockchain-based Supply Chain Traceability',
      description: 'A proof-of-concept application leveraging blockchain to ensure transparency and traceability of goods in a supply chain, from manufacturer to consumer.',
      tech: ['Hyperledger Fabric', 'Node.js', 'React.js', 'Docker'],
      image: '/img/kima.jpg', // Placeholder image
      link: 'https://kimaeth.xyz/'
    }
  ];


  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Product Manager at TechCorp',
      quote: 'Azam delivered exceptional blockchain solutions that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'CTO at StartupX',
      quote: 'Working with Azam was a game-changer for our project. His full-stack development skills and blockchain knowledge are impressive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Founder of CryptoVentures',
      quote: 'Azam built our entire DeFi platform from scratch. The code quality and user experience are top-notch. Highly recommended!',
      rating: 5
    }
  ];

  

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 font-inter antialiased">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter Font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Configuration for Tailwind CSS */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', sans-serif;
        }
        .text-gradient {
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bg-gradient-hover:hover {
          background: linear-gradient(90deg, #6366f1, #a855f7);
        }
        .skill-item {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }
        .skill-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent);
            transition: all 0.5s ease-in-out;
        }
        .skill-item:hover::before {
            left: 100%;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg shadow-lg py-4 px-6 md:px-12 flex justify-between items-center rounded-b-xl">
        <div className="text-2xl font-bold text-gradient">
          &lt;AzamDev /&gt;
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              className={`text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group
                ${activeSection === item.id ? 'text-purple-400' : ''}`}
            >
              {item.name}
              <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : ''}`}></span>
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md rounded-b-xl py-4 md:hidden animate-fade-in-down">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className={`text-gray-300 text-lg hover:text-purple-400 transition-colors duration-300 ${activeSection === item.id ? 'text-purple-400 font-semibold' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] flex items-center justify-center text-center p-6 bg-cover bg-center"
          style={{ backgroundImage:  "url('/img/darker_blurred_hero_image.png')" }}>
          <div className="absolute inset-0 bg-gray-950/70"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4 drop-shadow-lg">
              Hi, I'm <span className="text-gradient">Azam Destiny</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-8">
              A <span className="text-purple-300">Full-Stack Crypto, Web & Mobile Developer</span>
            </p>
            <p className="text-md sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Transforming innovative ideas into robust, secure, and scalable decentralized applications, intuitive web platforms, and cutting-edge mobile experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View My Work <Rocket className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="inline-flex items-center justify-center px-8 py-3 border border-purple-500 text-base font-medium rounded-full text-purple-300 bg-gray-800 hover:bg-purple-900 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch <Mail className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-900 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="/img/about.jpg"
                alt="Your Photo"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-purple-600 animate-fade-in"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Hello! I'm Azam Destiny, a passionate and results-driven developer with a strong focus on the intersection of blockchain technology, modern web applications, and intuitive mobile experiences. My journey began with a fascination for decentralized systems, which quickly evolved into a dedicated pursuit of mastering the tools and technologies that power the future of digital interaction.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My goal is to create impactful solutions that not only solve complex problems but also deliver exceptional user experiences. Let's build something amazing together!
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-gray-950 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {skills.map((skillCategory, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-purple-700/30 transition-shadow duration-300 border border-gray-700 flex flex-col items-center skill-item">
                  <div className="text-purple-400 mb-4">{skillCategory.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-6 text-gradient">{skillCategory.category}</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skillCategory.items.map((skill, i) => (
                      <span key={i} className="bg-gray-700 text-gray-200 text-sm px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-gray-900 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-700/30 transition-all duration-300 transform hover:-translate-y-2 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1e293b/a8a29e?text=Image+Not+Found'; }} // Fallback
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-2xl font-semibold text-white mb-3 text-gradient">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-gray-700 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-md"
                    >
                      View Project <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

  {/* Testimonials Section (Optional) */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-950 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              What People <span className="text-gradient">Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-blue-700/30 transition-shadow duration-300 border border-gray-700 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <User className="text-blue-400 mr-3" size={28} />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base flex-grow mb-4">"{testimonial.quote}"</p>
                  <div className="flex justify-start text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" stroke="none" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} stroke="currentColor" fill="none" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> 



        {/* Contact Section */}
        {/* <section id="contact" className="py-16 md:py-24 bg-gray-900 px-6 sm:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to new opportunities, collaborations, and exciting projects. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
              <a
                href="mailto:zamzamdestiny@gmail.com"
                className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
              >
                <Mail className="mr-3" size={20} /> zamzamdestiny@gmail.com
              </a>
              <a
                href="https://t.me/AZAM_DESTINY"
                className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
              >
                <PiTelegramLogo className="mr-3" size={20} /> Telegram
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/azamdestiny" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={36} />
              </a>
              <a href="https://linkedin.com/in/azamdestiny" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={36} />
              </a>
              {/* Add more social icons if needed, e.g., Twitter, Medium */}
            {/* </div>
          </div>
        </section> */} 
        </main>
      


      {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-900 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to bring your project to life? Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Briefcase className="mr-3 text-purple-400" size={24} />
                  Project Inquiry Form
                </h3>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-200 text-sm">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="blockchain-dapp">Blockchain/DApp Development</option>
                      <option value="web-application">Web Application</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="smart-contracts">Smart Contracts</option>
                      <option value="nft-marketplace">NFT Marketplace</option>
                      <option value="defi-platform">DeFi Platform</option>
                      <option value="full-stack">Full-Stack Development</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Requirements */}
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Requirements *
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Describe your project requirements, features needed, target audience, etc."
                    />
                  </div>

                  {/* Budget and Deadline Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Deadline *
                      </label>
                      <select
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Details / Sample Links
                    </label>
                    <textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Any additional information, specific technologies, or questions you'd like to discuss..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <MessageCircle className="mr-3 text-purple-400" size={24} />
                    Let's Connect
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Email</h4>
                        <p className="text-gray-300">zamzamdestiny@gmail.com</p>
                        <p className="text-sm text-gray-400">I typically respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Phone</h4>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-400">Available Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Location</h4>
                        <p className="text-gray-300">San Francisco, CA</p>
                        <p className="text-sm text-gray-400">Available for remote work worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
                  <h3 className="text-2xl font-semibold text-white mb-6">Follow My Work</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/zamzamdesi"
                      className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 group"
                    >
                      <Github className="text-gray-300 group-hover:text-white" size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/azam-destiny"
                      className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 group"
                    >
                      <Linkedin className="text-gray-300 group-hover:text-white" size={24} />
                    </a>
                    <a
                      href="https://x.com/dosant45?s=21"
                      className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 group"
                    >
                      <Twitter className="text-gray-300 group-hover:text-white" size={24} />
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
                  <h3 className="text-2xl font-semibold text-white mb-6">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                      <div className="text-sm text-gray-300">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                      <div className="text-sm text-gray-300">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">24h</div>
                      <div className="text-sm text-gray-300">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-400 text-sm border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Azam Portfolio. All rights reserved.</p>
      </footer>
    
    </div>
    
  );
};

export default App;
