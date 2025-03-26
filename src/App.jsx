import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const projects = [
        {
            title: "AFK Leveling",
            description: "A sophisticated automation script utilizing randomized patterns for gaming interactions. Built with Python, featuring configurable timing and failsafe mechanisms.",
            link: "https://github.com/A1fr0mDay1/AFK-Farming",
            tech: ["Python", "Automation"]
        },
    ];

    const skills = {
        technical: [
            'Java', 'Python', 'HTML/CSS', 'JavaScript',
            'React', 'Git', 'ARM Assembly', 'SQL',
            'MongoDB', 'Neo4j', 'Excel', 'PowerPoint'
        ],
        personal: [
            'Communication', 'Leadership', 'Problem-solving', 'Teamwork',
            'Time Management', 'Adaptability', 'Process Optimization', 'Emotional Intelligence'
        ]
    };

    return (
        <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
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

            <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-200`}>
                <div className="max-w-4xl mx-auto py-8 px-4 text-center">
                    <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Hartnett</h1>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Computer Science Major</p>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>Cyber Security Minor</p>

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

            <main className="max-w-4xl mx-auto py-12 px-4">
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        Hello! I'm John Hartnett, a Computer Science major with a focus on Cyber Security. I'm deeply passionate about
                        exploring new technologies and tackling complex problems. I love computer science and cybersecuirty because the need for it grows every day.
                        I thrive in collaborative environments, valuing the diverse perspectives team members bring to problem-solving.
                </section>

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
                                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>
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

                <section>
                    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h2>
                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
                        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="mailto:john.r.hartnett03@gmail.com"
                                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                Email me
                            </a>
                            <a
                                href="/assets/resume.pdf"
                                download="resume.pdf"
                                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                            >
                                <FileText className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={`mt-12 py-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} John Hartnett. All rights reserved.
            </footer>
        </div>
    );
};

export default Portfolio;
