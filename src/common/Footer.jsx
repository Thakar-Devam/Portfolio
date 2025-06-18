import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0F0F0F] text-white py-6 px-6 md:px-20 h-48">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
                
                {/* Copyright */}
                <div className="text-xs text-gray-400 text-center md:text-left">
                    © {new Date().getFullYear()} Thakar Devam. All rights reserved.
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 justify-center">
                    <a
                        href="www.linkedin.com/in/devam-thakar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/Thakar-Devam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/devammm_12?igsh=MTRydXQ0NzE2b2RoNA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
