import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* 1. Contact Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="flex items-center justify-center md:justify-start group">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-500 group-hover:text-blue-400" />
              <a
                href="mailto:souravmail003@gmail.com"
                className="hover:text-blue-300 transition-colors"
              >
                souravmail003@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start group">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-500 group-hover:text-blue-400" />
              <a
                href="tel:+918405846421"
                className="hover:text-blue-300 transition-colors"
              >
                +91-8405846421
              </a>
            </div>
          </div>

          {/* 2. Location */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white mb-4">Location</h3>
            <div className="flex items-start justify-center md:justify-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 mt-1 text-blue-500" />
              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Whitefield+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors block font-medium"
                >
                  Whitefield, Bengaluru
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Current: Bengaluru, Karnataka (560037)<br />
                  Permanent: Ranchi, Jharkhand (834012)
                </p>
              </div>
            </div>
          </div>

          {/* 3. Social Links */}
          <div className="flex flex-col items-center md:items-end justify-start">
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/sourav-kumar-5814341b8/"
                className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/sourav-003"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Developed by <span className="text-blue-400">Sourav Kumar</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;