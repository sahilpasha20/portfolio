import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              A goal-oriented software developer with experience in building web applications using modern technologies like React, Tailwind css, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;