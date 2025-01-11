import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 ml-60">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul>
            <li className="mb-2">Email: 
              <a href="mailto:Sinanmhd154@gmail.com" className="hover:text-gray-300">
                Sinanmhd154@gmail.com
              </a>
            </li>
            <li className="mb-2">Phone: +91 9072276965</li>
           
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2 hover:text-gray-300">
              <a href="#home">Home</a>
            </li>
            <li className="mb-2 hover:text-gray-300">
              <a href="#about">About Us</a>
            </li>
            <li className="mb-2 hover:text-gray-300">
              <a href="#products">Products</a>
            </li>
            <li className="mb-2 hover:text-gray-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
          
            
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
         
          
          
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500">
        © 2025 azaakki. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
