import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front End",
      skills: [
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          bgColor: "bg-yellow-500"
        },
        { 
          name: "React.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          bgColor: "bg-blue-500"
        },
        { 
          name: "HTML", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          bgColor: "bg-orange-500"
        },
        { 
          name: "CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          bgColor: "bg-blue-600"
        },
        { 
          name: "Tailwind CSS", 
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          bgColor: "bg-teal-500"
        }
      ]
    },
    // Removed the "Databases" category
    {
      title: "Tools & Platforms",
      skills: [
        { 
          name: "GitHub", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          bgColor: "bg-gray-800"
        },
        { 
          name: "VS Code", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          bgColor: "bg-blue-500"
        },
        { 
          name: "Figma", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          bgColor: "bg-purple-500"
        },
        { 
          name: "Vercel", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
          bgColor: "bg-gray-900"
        },
        { 
          name: "Netlify", 
          icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
          bgColor: "bg-teal-600"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-white text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I've worked with throughout my projects and experience
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-110"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 shadow-lg border border-gray-200">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 transition-all duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-8 h-8 items-center justify-center text-gray-600 font-bold text-sm">
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-400 transition-all duration-300"></div>
                    </div>

                    <span className="text-sm text-gray-600 text-center font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and industry best practices. Every project is an opportunity to learn 
              something new.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
