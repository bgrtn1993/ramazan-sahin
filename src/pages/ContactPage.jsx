import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Home } from 'lucide-react';

const ContactPage = ({ pageVariants }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(''); // 'success', 'error', 'sending', ''

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        const FORM_ENDPOINT = "https://formspree.io/f/mpwrrwww";

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData) // Form verilerini doğrudan JSON olarak gönder
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({name: '', email: '', subject: '', message: ''}); // Formu temizle
                console.log("Mail başarıyla gönderildi!");
            } else {
                const errorData = await response.json();
                setFormStatus('error');
                console.error("Formspree hatası:", errorData);
            }
        } catch (error) {
            setFormStatus('error');
            console.error("Form gönderimi sırasında bir ağ hatası oluştu:", error);
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="pt-20 bg-gray-50 min-h-screen"
        >
            <section className="relative bg-blue-900 text-white py-20 text-center shadow-lg">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bize Ulaşın</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Her türlü hukuki sorunuz için bizimle iletişime geçmekten çekinmeyin.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* İletişim Formu */}
                    <motion.div
                        className="bg-white rounded-lg shadow-xl p-8 md:p-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center lg:text-left">İletişim Formu</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Adınız Soyadınız</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="Adınız Soyadınız"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-posta Adresiniz</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="eposta@adresiniz.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Konu</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="Konu"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mesajınız</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition-all"
                                    placeholder="Mesajınızı buraya yazınız..."
                                    required
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
                                    disabled={formStatus === 'sending'}
                                >
                                    {formStatus === 'sending' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                                </button>
                                {formStatus === 'success' && (
                                    <p className="text-green-600 text-sm font-semibold">Mesajınız başarıyla gönderildi!</p>
                                )}
                                {formStatus === 'error' && (
                                    <p className="text-red-600 text-sm font-semibold">Mesaj gönderilirken bir hata oluştu. Lütfen tüm alanları doldurun.</p>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    {/* İletişim Bilgileri ve Harita */}
                    <motion.div
                        className="bg-white rounded-lg shadow-xl p-8 md:p-10"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center lg:text-left">İletişim Detayları</h2>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 mr-4 text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-blue-800 text-lg">Adres</h3>
                                    <p className="text-gray-700">Selamet Mah. Vardar Cd. No:5 Ecevit Sinem 2 İş Hanı K:2 D:24, <br /> Osmangazi, Bursa/Türkiye</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 mr-4 text-yellow-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-blue-800 text-lg">Telefon</h3>
                                    <p className="text-gray-700">+90 541 383 62 44</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-6 h-6 mr-4 text-yellow-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-blue-800 text-lg">E-posta</h3>
                                    <p className="text-gray-700">av.ramazansahinn@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Home className="w-6 h-6 mr-4 text-yellow-500 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-blue-800 text-lg">Çalışma Saatleri</h3>
                                    <p className="text-gray-700">Pazartesi - Cuma: 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-blue-900 mb-4 text-center lg:text-left">Konumumuz</h3>
                        {/* Google Haritalar Gömülü İframe (Yer Tutucu) */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                            <iframe
                                title="Şahin Hukuk ve Danışmanlık Bürosu Konumu"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d190.47574818904693!2d29.063176240868106!3d40.19544811129528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sselamet%20mah.%20vardar%20cd.%20no%3A5%20ecevit%20sinem%202%20i%C5%9F%20han%C4%B1%20k%3A2%20d%3A24%20osmangazi%2Fbursa!5e0!3m2!1str!2str!4v1749906953283!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default ContactPage;
