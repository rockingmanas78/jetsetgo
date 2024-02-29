import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001b2d] text-white py-5 px-3 m-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 Your Company Name</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="hover:text-blue-500">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
