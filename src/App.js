import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Globe, Server, Monitor, Smartphone, Menu, X } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'projects', 'resume', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const skills = [
        { name: 'ASP.NET Core', icon: <Code className="w-6 h-6" />, level: 90 },
        { name: 'C#', icon: <Code className="w-6 h-6" />, level: 85 },
        { name: 'Node.js', icon: <Server className="w-6 h-6" />, level: 75 },
        { name: 'React', icon: <Globe className="w-6 h-6" />, level: 20 },
        { name: 'MSSQL', icon: <Database className="w-6 h-6" />, level: 80 },
        { name: 'MySQL', icon: <Database className="w-6 h-6" />, level: 80 },
        { name: 'Bootstrap', icon: <Monitor className="w-6 h-6" />, level: 80 },
        { name: 'WPF', icon: <Monitor className="w-6 h-6" />, level: 80 }
    ];

    const projects = [
        {
            id: 1,
            title: 'Online POS System for Retail Sales (Company Project)',
            role: 'Junior Software Engineer',
            description: 'Comprehensive Point of Sale system handling sales, purchases, and credit sales with real-time inventory management.',
            tech: ['ASP.NET Core', 'C#', 'MSSQL', 'WPF' ,'Razors Pages', 'API'],
            features: ['Real-time inventory tracking', 'Sales reporting', 'All Platform Support', 'Credit sale management'],
            github: '#',
            demo: '#'
        },
        {
            id: 2,
            title: 'Clinic Management System (Company Project)',
            role: 'Junior Software Engineer',
            description: 'Medical clinic POS system with patient management, appointment scheduling, and billing integration.',
            tech: ['WPF', 'C#', 'MSSQL', 'ASP.NET Core'],
            features: ['Patient records', 'Appointment scheduling', 'Billing system', 'Medical history tracking'],
            github: '#',
            demo: '#'
        },
        {
            id: 3,
            title: 'Restaurant POS System (Company Project)',
            role: 'Junior Software Engineer',
            description: 'Full-featured restaurant management system with order processing, kitchen management, and payment integration.',
            tech: ['ASP.NET Core', 'WPF', 'MySQL', 'C#'],
            features: ['Order management', 'Kitchen display', 'Payment processing', 'Menu management'],
            github: '#',
            demo: '#'
        },
        {
            id: 4,
            title: 'Credit Sale API Backend (Company Project)',
            role: 'Junior Software Engineer',
            description: 'RESTful API backend for managing credit sales, customer accounts, and payment tracking across multiple POS systems.',
            tech: ['C#', 'ASP.NET Core', 'MSSQL', 'API'],
            features: ['RESTful API design', 'Authentication system', 'Credit tracking', 'Payment processing'],
            github: '#',
            demo: '#'
        },
        {
    id: 5,
    title: 'Motor Match (Students Project)',
    description: 'A comprehensive vehicle marketplace platform where users can create their own shops, post vehicles (cars, motorcycles), and compare multiple vehicles with detailed comparison results displayed through interactive graphs and charts.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'API', 'EJS', 'Chart.js'],
    features: [
        'RESTful API design', 
        'Authentication system', 
        'Vehicle marketplace with shop creation',
        'Multi-vehicle comparison tool',
        'Interactive comparison graphs',
        'Vehicle posting and management'
    ],
    github: 'https://github.com/Ray-Hub-Academy/motor-match',
    demo: '#'
        }
    ];

    const NavBar = () => (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                            Ye Min Aung
                        </h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 capitalize ${activeSection === section
                                        ? 'bg-blue-600 text-white'
                                        : isScrolled
                                            ? 'text-gray-900 hover:bg-gray-100'
                                            : 'text-white hover:bg-white/10'
                                        }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                                }`}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 capitalize ${activeSection === section
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );

    const HeroSection = () => (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Ye Min Aung
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-300">
                        Full-Stack Developer
                    </p>
                    <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in delay-500">
                        Crafting robust web applications and desktop solutions with modern technologies.
                        Specialized in ASP.NET Core, Node.js, and building comprehensive POS systems.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </button>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-white/70" />
                </div>
            </div>
        </section>
    );

    const AboutSection = () => (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Passionate full-stack developer with expertise in building scalable web applications and desktop solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                I'm a dedicated full-stack developer with a strong foundation in Microsoft technologies,
                                particularly ASP.NET Core and C#. My expertise spans across web development, desktop
                                applications, and database management.
                            </p>
                            <p>
                                In 2023, I've expanded my skill set by working with Node.js and Express
                                during my internship, gaining valuable experience in different technology stacks by developing 
                                Mega Music App as a backend intern developer. Currently,
                                I'm diving deep into React to enhance my frontend capabilities.
                            </p>
                            <p>
                                I hold a B.C.Sc degree from the University of Computer Studies, Sittway, which provided
                                me with a solid theoretical foundation that I've built upon through practical experience.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Education</h4>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-semibold text-gray-900">Bachelor of Computer Science</p>
                                <p className="text-gray-600">University of Computer Studies, Sittway</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <div className="text-blue-600 mr-3">{skill.icon}</div>
                                            <span className="font-semibold text-gray-900">{skill.name}</span>
                                        </div>
                                        <span className="text-sm text-gray-600">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2 shadow-inner">
    <div
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-sm"
        style={{ width: `${skill.level}%` }}
    ></div>
</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ProjectsSection = () => (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Here are some of the projects I've built, showcasing my expertise in full-stack development
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <Monitor className="w-16 h-16 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                {project.role && (
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Role:</h4>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>{project.role}</li>
                                    </ul>
                                </div>
                                )}


                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    const ResumeSection = () => (
        <section id="resume" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
                    <p className="text-xl text-gray-600">
                        Download my resume to learn more about my experience and qualifications
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Full-Stack Developer</h4>
                                    <p className="text-gray-600">CGM Golden Land Myanmar</p>
                                    <p className="text-sm text-gray-500 mb-2">2024 - Present</p>
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>• Built multiple POS systems for retail, clinic, and restaurant businesses</li>
                                        <li>• Developed backend APIs for credit sale management of retail pos</li>
                                        <li>• Created desktop applications using WPF and C#</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900">Node.js Developer Intern</h4>
                                    <p className="text-gray-600">Tech Company</p>
                                    <p className="text-sm text-gray-500 mb-2">6 months (Mega Music App)</p>
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>• Gained hands-on experience with Node.js and Express</li>
                                        <li>• Worked with MySQL database management</li>
                                        <li>• Contributed to backend API development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Backend Technologies</h4>
                                    <p className="text-gray-600 text-sm">ASP.NET Core, Node.js, Express, C#</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900">Frontend Technologies</h4>
                                    <p className="text-gray-600 text-sm">React (learning), Razor Pages, Bootstrap</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900">Databases</h4>
                                    <p className="text-gray-600 text-sm">MSSQL, MySQL</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900">Desktop Development</h4>
                                    <p className="text-gray-600 text-sm">WPF, Windows Forms</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900">Specialized Projects</h4>
                                    <p className="text-gray-600 text-sm">POS Systems, API Development, Database Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
                            <Download className="w-5 h-5" />
                            Download Full Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

    const ContactSection = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all fields');
                return;
            }

            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        };

        return (
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-xl text-gray-600">
                            Let's discuss your next project or opportunity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-gray-600">yeminaung0901@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <p className="text-gray-600">+95 9 685 325 999</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Location</p>
                                        <p className="text-gray-600">Yangon, Myanmar</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    };

    const Footer = () => (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Ye Min Aung</h3>
                    <p className="text-gray-400 mb-6">Full-Stack Developer</p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        © 2025 Ye Min Aung. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );

    return (
        <div className="min-h-screen">
            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

            <NavBar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ResumeSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Portfolio;