import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-gradient-to-b from-gray-900 to-gray-900 text-gray-100 p-6 text-center md:text-left"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Contact Info */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Get in Touch</p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a
              href="mailto:souravmail003@gmail.com"
              className="hover:text-gray-300"
            >
              souravmail003@gmail.com
            </a>
          </p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a
              href="tel:+91-8405846421"
              className="hover:text-gray-300"
            >
              +91-8405846421
            </a>
          </p>
        </div>

        {/* Location */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Location</p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <a
              href="https://www.google.com/maps/place/Bengaluru,+Karnataka/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Whitefield
            </a>
          </p>
          <p className="py-1 text-sm">
            Current: Bengaluru, Karnataka, 560037, India <br />
            Permanent: Ranchi, Jharkhand 834012
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/sourav-kumar-5814341b8/"
            className="text-gray-100 hover:text-blue-400"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/sourav-003"
            className="text-gray-100 hover:text-blue-400"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>

      <hr className="my-4 border-gray-700" />
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Developed by @Sourav Kumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
