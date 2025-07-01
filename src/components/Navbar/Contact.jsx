import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const templateParams = {
      name: 'Sahil',
      time: new Date().toLocaleString(),
      from_name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_an6h33w',
      'template_t4op5nb',
      templateParams,
      'ofa2bLE90lMFGO26E'
    )
    .then((response) => {
      alert('Message sent successfully! Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again or contact me directly.');
      console.error('EmailJS error:', error);
    });
  };

  const handleEmailClick = () => {
    const email = 'sahilpasha759153@gmail.com';
    const subject = 'Hello Sahil - Portfolio Contact';
    const body = 'Hi Sahil,\n\nI came across your portfolio and would like to get in touch with you.\n\nBest regards';
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'sahilpasha759153@gmail.com',
      action: handleEmailClick,
      isEmail: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahil-pasha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      isEmail: false
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sahilpasha20',
      isEmail: false
    },
    {
      icon: MapPin,
      label: 'Bangalore, India',
      isLocation: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
           Contact Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Get in touch
            </h3>
            
            <div className="space-y-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                
                if (link.isEmail) {
                  return (
                    <button
                      key={index}
                      onClick={link.action}
                      className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors w-full text-left"
                    >
                      <Icon size={20} />
                      <span className="font-medium">{link.label}</span>
                    </button>
                  );
                }
                
                if (link.isLocation) {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <Icon size={20} />
                      <span className="font-medium">{link.label}</span>
                    </div>
                  );
                }
                
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Icon size={20} />
                    <span className="font-medium">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;