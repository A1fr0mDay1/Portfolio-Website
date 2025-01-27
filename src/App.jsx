import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header/Hero Section */}
            <header className="bg-white shadow-md">
                <div className="max-w-4xl mx-auto py-8 px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">John Hartnett</h1>
                    <p className="text-xl text-gray-600 mt-2">Major: Computer Science</p>
                    <p className="text-lg text-gray-600 mt-1">Minor: Cyber Security</p>
                    
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://github.com/A1fr0mDay1" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/john-hartnett-1695b2277/" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:john.r.hartnett03@gmail.com" className="text-gray-600 hover:text-gray-900">
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
                        Hello and welcome to my website. My name is John Hartnett and i am a Computer Science major with a minor in Cyber Security. I am a full-stack developer with experience in building web applications using React, Node.js, and MongoDB. I am passionate about learning new technologies and solving complex problems. I also love working with others because often times they can see solutions I have not figured out yet. In my free time, I enjoy working on side projects and contributing to open-source.
                    </p>
                </section>

                {/* Projects Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "AFK Leveling",
                                description: "This script simulates pressing number keys (1-5) and clicking the mouse in a controlled, randomized pattern. This appears designed for automating repetitive inputs, potentially for gaming",
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'Java', 'Python', 'HTML/CSS', 'JavaScript', 
                            'React', 'git', 'ARM Assembly','SQL', 
                            'MongoDB', 'Neo4j', 'Excel', 'PowerPoint',
                        ].map((skill) => (
                            <div key={skill} className="bg-white p-4 rounded-lg shadow-md text-center">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Personal Skills Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'Collaborative Leadership', 'Strategic Planning', 'Critical Analysis', 'Project Coordination', 
                            'Communication', 'Project Management', 'Conflict Resolution', 'Process Optimization',
                        ].map((skill) => (
                            <div key={skill} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center min-h-[100px]">
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
                                role: 'Patient Manager Assistant',
                                company: 'Amplifed Wellness',
                                period: 'May 2024 - Present',
                                description: 'Responsible for calling patients to answer questions and provide information Responsible for scheduling seminars around the country, Responsible for tracking and moving data to new systems'
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
                                            Please feel free to reach out!
                                        </p>
                                        <div className="flex gap-4">
                                            <a href="mailto:john.r.hartnett03@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                                                <Mail className="w-5 h-5" />
                                                Email me
                                            </a>
                                            <a
                                                href="/assets/resume.pdf"
                                                download="resume.pdf"
                                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                            >
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
                    © {new Date().getFullYear()} John Hartnett. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;