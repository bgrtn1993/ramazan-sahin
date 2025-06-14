import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Info, Briefcase, Mail } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobil menü durumu
    const location = useLocation(); // Mevcut yolu almak için
    const navigate = useNavigate(); // Programatik navigasyon için

    // Navigasyon linkleri
    const navLinks = [
        { name: 'Ana Sayfa', path: '/', icon: Home },
        { name: 'Hakkımızda', path: '/hakkimizda', icon: Info },
        { name: 'Faaliyet Alanları', path: '/faaliyet-alanlari', icon: Briefcase },
        { name: 'İletişim', path: '/iletisim', icon: Mail },
    ];

    // Mobil menüyü kapatma fonksiyonu
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg fixed w-full z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
                {/* Logo Alanı */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                    <Briefcase className="w-8 h-8 text-yellow-400" />
                    <span className="text-2xl font-bold tracking-wide text-yellow-400">
            Şahin Hukuk ve Danışmanlık Bürosu
          </span>
                </div>

                {/* Hamburger Menü Butonu (Mobil) */}
                <button
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>

                {/* Navigasyon Linkleri */}
                <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-lg">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <motion.button
                                    onClick={() => {
                                        navigate(link.path);
                                        closeMenu(); // Mobil menüyü kapat
                                    }}
                                    className={`flex items-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300
                    ${location.pathname === link.path ? 'bg-blue-700 text-yellow-400 font-semibold' : ''}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <link.icon className="w-5 h-5 mr-2" />
                                    {link.name}
                                </motion.button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
