import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB'],
    placeholder: 'Web App'
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Project
        </h2>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 max-w-md">
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                {project.placeholder}
              </span>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
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
              
              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;