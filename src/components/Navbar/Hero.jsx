import React, { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Sahil";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewResume = () => {
    window.open('/!Sahil_Pasha_Resume.pdf', '_blank');
  };

  const handleEmailClick = () => {
    const email = 'sahilpasha759153@gmail.com';
    const subject = 'Hello Sahil - Portfolio Contact';
    const body = 'Hi Sahil,\n\nI came across your portfolio and would like to get in touch with you.\n\nBest regards';

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        console.log('Email copied to clipboard as backup');
      });
    }
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sahil-pasha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/sahilpasha20', '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {displayText}
              <span className="text-yellow-400">.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Web Developer
            </p>
            <p className="text-lg mb-8 opacity-80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I create beautiful, functional web applications and digital experiences
              that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex gap-2 justify-center lg:justify-start">
              <button
                onClick={handleViewResume}
                className="group bg-black/20 backdrop-blur-sm border border-white/10 text-white p-3 rounded-lg hover:bg-black/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                title="View Resume"
              >
                <Download size={20} className="group-hover:text-yellow-400 transition-colors duration-300" />
                <span className="text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">Resume</span>
              </button>

              <button
                onClick={handleEmailClick}
                className="group bg-black/20 backdrop-blur-sm border border-white/10 text-white p-3 rounded-lg hover:bg-black/40 transition-all duration-300 hover:scale-105"
                title="Send Email via Gmail"
              >
                <Mail size={20} className="group-hover:text-yellow-400 transition-colors duration-300" />
              </button>

              <button
                onClick={handleLinkedInClick}
                className="group bg-black/20 backdrop-blur-sm border border-white/10 text-white p-3 rounded-lg hover:bg-black/40 transition-all duration-300 hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-yellow-400 transition-colors duration-300" />
              </button>

              <button
                onClick={handleGithubClick}
                className="group bg-black/20 backdrop-blur-sm border border-white/10 text-white p-3 rounded-lg hover:bg-black/40 transition-all duration-300 hover:scale-105"
                title="GitHub"
              >
                <Github size={20} className="group-hover:text-yellow-400 transition-colors duration-300" />
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-md">
              <div className="font-mono text-sm space-y-2">
                <div className="text-white/90">const developer = {`{`}</div>
                <div className="text-white/90 ml-4">name: 'Sahil',</div>
                <div className="text-white/90 ml-4">skills: ['React', 'Tailwind CSS'],</div>
                <div className="text-white/90 ml-4">passion: 'Creating amazing UX'</div>
                <div className="text-white/90">{`};`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;