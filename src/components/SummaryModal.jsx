import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

const SummaryModal = ({ summaryText, isLoading, error, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative"
            >
                <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <Sparkle className="w-6 h-6 mr-2 text-yellow-500" />
                    Hukuki Alan Özeti
                </h2>
                {isLoading ? (
                    <div className="text-center py-8">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-r-transparent mb-2" role="status">
                            <span className="visually-hidden">Yükleniyor...</span>
                        </div>
                        <p className="text-gray-600">Özet oluşturuluyor...</p>
                    </div>
                ) : error ? (
                    <p className="text-red-600 mb-4">{error}</p>
                ) : (
                    <p className="text-gray-700 leading-relaxed mb-6">{summaryText || "Özet bulunamadı."}</p>
                )}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                    aria-label="Kapat"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </motion.div>
        </div>
    );
};

export default SummaryModal;
