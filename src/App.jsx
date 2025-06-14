import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Bileşen ve Sayfa Importları
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import ContactPage from './pages/ContactPage';

// Sayfa Geçiş Animasyonları İçin Yeni Varyantlar (Baloncuk Efekti)
const pageVariants = {
    initial: {
        opacity: 0,
        y: "100vh", // Aşağıdan başla (ekran yüksekliği kadar aşağıda)
        scale: 0.8, // Biraz küçülmüş başla
    },
    in: {
        opacity: 1,
        y: 0, // Kendi yerine gel
        scale: 1, // Tam boyutuna ulaş
        transition: {
            type: "spring", // Yay efekti için spring animasyonu
            stiffness: 100,
            damping: 20,
            duration: 0.7
        }
    },
    out: {
        opacity: 0,
        y: "-50vh", // Yukarı doğru kayarak çık
        scale: 0.9, // Çıkarken hafifçe küçül
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.4
        }
    },
};

const App = () => {
    const location = useLocation(); // Mevcut konumu almak için

    return (
        <div className="min-h-screen flex flex-col font-inter">
            {/* Header bileşeni sabit kalacak */}
            <Header />

            {/* Sayfa geçişleri için AnimatePresence */}
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage pageVariants={pageVariants} />} />
                    <Route path="/hakkimizda" element={<AboutPage pageVariants={pageVariants} />} />
                    <Route path="/faaliyet-alanlari" element={<PracticeAreasPage pageVariants={pageVariants} />} />
                    <Route path="/iletisim" element={<ContactPage pageVariants={pageVariants} />} />
                    {/* 404 Sayfası */}
                    <Route path="*" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            className="pt-20 text-center py-20 min-h-[50vh] flex flex-col items-center justify-center"
                        >
                            <h1 className="text-4xl text-blue-900 font-bold mb-4">404 - Sayfa Bulunamadı</h1>
                            <p className="text-gray-700 mb-8">Aradığınız sayfa mevcut değil. Lütfen URL'yi kontrol edin veya ana sayfaya dönün.</p>
                            <button
                                onClick={() => window.location.href = '/'} // Tamamen farklı bir yolu ele al
                                className="mt-8 inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition-colors"
                            >
                                Ana Sayfaya Dön
                            </button>
                        </motion.div>
                    } />
                </Routes>
            </AnimatePresence>

            {/* Footer bileşeni sabit kalacak */}
            <Footer />
        </div>
    );
};

export default App;
