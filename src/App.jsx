import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Moon, Sun } from 'lucide-react';

// Main Portfolio component
const Portfolio = () => {
    // State for dark mode toggle
    const [darkMode, setDarkMode] = useState(false);

    // Set initial dark mode based on system preference
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    // Apply or remove dark mode class on the root element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Projects data
    const projects = [
        {
            title: "AFK Leveling",
            description: "An automation script utilizing randomized patterns for gaming interactions. Built with Python, featuring configurable timing and failsafe mechanisms.",
            link: "https://github.com/A1fr0mDay1/AFK-Farming",
            tech: ["Python", "Automation"]
        },
        {
            title: "MoxfeildApp",
            description: "A wrapper for the website Moxfeild used for managing and analyzing Magic: The Gathering decks. Coverted into an android app. Built with Java.",
            link: "https://github.com/A1fr0mDay1/MoxfeildApp",
            tech: ["Java", "Android Studio"]
        }
    ];

    // Skills data categorized into technical, cybersecurity, and personal skills
    const skills = {
        technical: [
            'Java', 'Python', 'HTML/CSS', 'JavaScript',
            'React', 'Git', 'ARM Assembly', 'SQL',
            'MongoDB', 'Excel', 'PowerPoint', 'Android Studio',
            'Visual Studio', 'Eclipse', 'IntelliJ', 'Figma'
        ],
        cybersecurity: [
            'Wireshark', 'Nmap', 'Nessus', 'Metasploit'
        ],
        personal: [
            'Communication', 'Leadership', 'Problem-solving', 'Teamwork',
            'Time Management', 'Adaptability', 'Process Optimization', 'Emotional Intelligence'
        ]
    };

    return (
        // Main container with dynamic background based on dark mode
        <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            {/* Dark mode toggle button */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
            >
                {darkMode ? (
                    <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                    <Moon className="w-6 h-6 text-gray-700" />
                )}
            </button>

            {/* Header section */}
            <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-200`}>
                <div className="max-w-4xl mx-auto py-8 px-4 text-center">
                    {/* Name and title */}
                    <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Hartnett</h1>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Computer Science Major</p>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>Cyber Security Minor</p>

                    {/* Social links */}
                    <div className="flex justify-center gap-6 mt-4">
                        <a
                            href="https://github.com/A1fr0mDay1"
                            className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/john-hartnett-1695b2277/"
                            className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:john.r.hartnett03@gmail.com"
                            className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-4xl mx-auto py-12 px-4">
                {/* About Me section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        Hello! I'm John Hartnett, a Computer Science major with a focus on Cyber Security. I'm deeply passionate about
                        exploring new technologies and tackling complex problems. I love computer science and cybersecuirty because the need for it grows every day.
                        I thrive in collaborative environments, valuing the diverse perspectives team members bring to problem-solving.
                    </p>
                </section>

                {/* Projects section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg transition-all duration-200 ${darkMode
                                        ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-700'
                                        : 'bg-white shadow-md hover:shadow-lg'
                                    }`}
                            >
                                {/* Project title */}
                                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </h3>
                                {/* Project description */}
                                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>
                                {/* Project technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`text-sm px-2 py-1 rounded ${darkMode
                                                    ? 'bg-gray-700 text-gray-300'
                                                    : 'bg-gray-200 text-gray-700'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* Project link */}
                                <a
                                    href={project.link}
                                    className="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                    <span className="ml-1">→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Skills section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.technical.map((skill) => (
                            <div
                                key={skill}
                                className={`p-4 rounded-lg text-center transition-colors ${darkMode
                                        ? 'bg-gray-800 text-gray-300'
                                        : 'bg-white shadow-md text-gray-900'
                                    }`}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Personal Skills section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Personal Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.personal.map((skill) => (
                            <div
                                key={skill}
                                className={`p-4 rounded-lg text-center transition-colors ${darkMode
                                        ? 'bg-gray-800 text-gray-300'
                                        : 'bg-white shadow-md text-gray-900'
                                    }`}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cybersecurity Skills section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Cybersecurity Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.cybersecurity.map((skill) => (
                            <div
                                key={skill}
                                className={`p-4 rounded-lg text-center transition-colors ${darkMode
                                        ? 'bg-gray-800 text-gray-300'
                                        : 'bg-white shadow-md text-gray-900'
                                    }`}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact section */}
                <section>
                    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h2>
                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
                        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <div className="flex gap-4">
                            {/* Email link */}
                            <a
                                href="mailto:john.r.hartnett03@gmail.com"
                                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                Email me
                            </a>
                            {/* Resume download link */}
                            <a
                                href="assets/Resume.pdf"
                                download="Resume.pdf"
                                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                                onClick={(e) => {
                                    fetch("assets/Resume.pdf")
                                        .then((response) => {
                                            if (!response.ok) {
                                                alert("Resume file not found. Please contact me directly.");
                                                e.preventDefault();
                                            }
                                        })
                                        .catch(() => {
                                            alert("An error occurred while trying to download the resume.");
                                            e.preventDefault();
                                        });
                                }}
                            >
                                <FileText className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={`mt-12 py-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} John Hartnett. All rights reserved.
            </footer>
        </div>
    );
};

export default Portfolio;
