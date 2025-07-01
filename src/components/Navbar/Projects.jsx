import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Weather API',
      description: 'A responsive weather web app that provides real-time weather information for any city worldwide.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      liveDemo: 'https://benevolent-hamster-897919.netlify.app/',
      github: 'https://github.com/sahilpasha20',
      type: 'weather'
    }
  ];

  const renderProjectPreview = (project) => {
    return (
      <div className="h-48 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 overflow-auto flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 rounded-3xl p-6 max-w-sm mx-auto text-white shadow-2xl transform scale-75">
          <div className="bg-white bg-opacity-90 rounded-full px-4 py-3 mb-6 flex items-center">
            <span className="text-gray-600 flex-1 text-sm">Bengaluru</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-400 rounded-full relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-yellow-400"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-yellow-400"></div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-3 h-0.5 bg-yellow-400"></div>
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-0.5 bg-yellow-400"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-16 h-8 bg-blue-300 bg-opacity-80 rounded-full"></div>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="text-4xl font-bold mb-1">27°C</div>
            <div className="text-sm opacity-90">Bengaluru</div>
          </div>

          <div className="flex justify-between text-xs">
            <div className="flex items-center">
              <div className="w-4 h-4 mr-1 opacity-70">💧</div>
              <div>
                <div className="font-semibold">60%</div>
                <div className="opacity-80">humidity</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-1 opacity-70">💨</div>
              <div>
                <div className="font-semibold">5.55</div>
                <div className="opacity-80">km/h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Project
        </h2>
        
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 max-w-md">
              {renderProjectPreview(project)}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;