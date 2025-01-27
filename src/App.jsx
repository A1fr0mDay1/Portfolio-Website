import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            /* Header/Hero Section */
            <header className="bg-white shadow-md">
                <div className="max-w-4xl mx-auto py-8 px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Your Name</h1>
                    <p className="text-xl text-gray-600 mt-2">Full Stack Developer</p>
                    
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto py-12 px-4">
                {/* About Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-gray-700">
                        A passionate developer with experience in building web applications.
                    </p>
                    <p className="text-gray-700">
                        Skilled in: Java, Javascript, Python, SQL, Neo4j, MongoDB, React, HTML.
                    </p>
                    <p className="text-gray-700">
                        Intermediate knowledge in: C/C#, React, CSS.
                    </p>
                </section>

                {/* Projects Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Project 1",
                                description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, product catalog, and payment processing.",
                                link: "#"
                            },
                            {
                                title: "Project 2",
                                description: "Developed a real-time chat application using Socket.io and React. Features include private messaging, group chats, and file sharing.",
                                link: "#"
                            },
                            {
                                title: "Project 3",
                                description: "Created a task management system with React and Firebase. Includes features like task assignment, due dates, and progress tracking.",
                                link: "#"
                            },
                            {
                                title: "Project 4",
                                description: "Built a weather dashboard using React and OpenWeather API. Displays current weather, forecasts, and weather maps.",
                                link: "#"
                            }
                        ].map((project, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                                    View Project 
                                    <span className="ml-1">→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            'React', 'Node.js', 'TypeScript',
                            'Python', 'SQL', 'AWS',
                            'Git', 'Docker', 'CI/CD'
                        ].map((skill) => (
                            <div key={skill} className="bg-white p-4 rounded-lg shadow-md text-center">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
                    <div className="space-y-6">
                        {[
                            {
                                role: 'Senior Developer',
                                company: 'Company A',
                                period: '2020 - Present',
                                description: 'Led development of key features and mentored junior developers.'
                            },
                            {
                                role: 'Full Stack Developer',
                                company: 'Company B',
                                period: '2018 - 2020',
                                description: 'Developed and maintained multiple web applications.'
                            }
                        ].map((job, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">{job.role}</h3>
                                <p className="text-gray-600">{job.company} | {job.period}</p>
                                <p className="text-gray-700 mt-2">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            Interested in working together? Get in touch!
                        </p>
                        <div className="flex gap-4">
                            <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                                <Mail className="w-5 h-5" />
                                Email me
                            </a>
                            <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                                <FileText className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white shadow-lg mt-12">
                <div className="max-w-4xl mx-auto py-6 px-4 text-center text-gray-600">
                    © {new Date().getFullYear()} Your Name. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;