import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "My Experience";

  useEffect(() => {
    if (window.innerWidth > 768) {
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
    } else {
      setDisplayText(fullText);
    }
  }, []);

  return (
    <section id="experience" className="min-h-screen bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-black">
            {displayText}
            <span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-700">
            Professional Journey & Achievements
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Building innovative solutions and growing through diverse challenges in the tech industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;