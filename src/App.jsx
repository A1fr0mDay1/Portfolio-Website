import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if user has a dark mode preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Update document class when dark mode changes
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
            >
                {darkMode ? (
                    <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                    <Moon className="w-6 h-6 text-gray-700" />
                )}
            </button>

            {/* Header/Hero Section */}
            <header className={`${darkMode ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-md'}`}>
                <div className="max-w-4xl mx-auto py-8 px-4 text-center">
                    <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Hartnett</h1>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Major: Computer Science</p>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>Minor: Cyber Security</p>

                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://github.com/A1fr0mDay1" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/john-hartnett-1695b2277/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:john.r.hartnett03@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto py-12 px-4">
                {/* About Section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Hello and welcome to my website. My name is John Hartnett and I am a Computer Science major with a minor in Cyber Security. I am a full-stack developer with experience in building web applications using React, Node.js, and MongoDB. I am passionate about learning new technologies and solving complex problems. I also love working with others because often times they can see solutions I have not figured out yet. In my free time, I enjoy working on side projects and contributing to open-source.
                    </p>
                </section>

                {/* Projects Section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "AFK Leveling",
                                description: "This script simulates pressing number keys (1-5) and clicking the mouse in a controlled, randomized pattern.",
                                link: "https://github.com/A1fr0mDay1/AFK-Farming"
                            },
                        ].map((project, index) => (
                            <div key={index} className={`p-6 rounded-lg transition-shadow ${darkMode ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-700' : 'bg-white shadow-md hover:shadow-lg'}`}>
                                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                                <a href={project.link} className="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center">
                                    View Project
                                    <span className="ml-1">→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-12">
                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'Java', 'Python', 'HTML/CSS', 'JavaScript',
                            'React', 'git', 'ARM Assembly', 'SQL',
                            'MongoDB', 'Neo4j', 'Excel', 'PowerPoint',
                        ].map((skill) => (
                            <div key={skill} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white shadow-md text-gray-900'}`}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className={`mt-12 py-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    © {new Date().getFullYear()} John Hartnett. All rights reserved.
                </footer>
            </main>
        </div>
    );
};

export default Portfolio;