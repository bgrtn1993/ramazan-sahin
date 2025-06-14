import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Home, Info, ChevronRight } from 'lucide-react';

const HomePage = ({ pageVariants }) => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfa yüklendiğinde en üste kaydır
    }, []);

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="pt-20" // Header yüksekliği kadar padding
        >
            {/* Hero Section */}
            <section
                className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white p-4"
                style={{ backgroundImage: "url('hukuk-burosu-arka-plan.jpg')" }} // Resim yolu güncellendi
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center max-w-4xl mx-auto z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Adaletin Işığında Güvenilir Çözümler
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Deneyimli avukatımız Ramazan Şahin'le hukukun her alanında müvekkillerimize kapsamlı danışmanlık ve dava takibi hizmetleri sunuyoruz.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <button
                            onClick={() => navigate('/faaliyet-alanlari')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Faaliyet Alanlarımızı Keşfedin
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Hakkımızda Kısa Tanıtım */}
            <section className="container mx-auto px-4 py-16 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
                    Ben Kimim?
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="sahin-buro.png"
                            alt="Hukuk Ofisi"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="mb-4 text-lg">
                            Şahin Hukuk ve Danışmanlık Bürosu olarak, 4 yılı aşkın süredir müvekkillerimize hukukun çeşitli alanlarında çözüm odaklı ve yenilikçi hizmetler sunmaktayız. Temel prensibimiz, müvekkil memnuniyetini en üst düzeyde tutarken, etik değerlerden ve hukukun üstünlüğünden ödün vermemektir.
                        </p>
                        <p className="mb-4 text-lg">
                            Alanında uzman avukatlarımızla, her türlü hukuki sorununuzda size özel stratejiler geliştirir ve en doğru sonuca ulaşmanız için titizlikle çalışırız. Güven, şeffaflık ve ulaşılabilirlik, çalışma felsefemizin temel taşlarıdır.
                        </p>
                        <button
                            onClick={() => navigate('/hakkimizda')}
                            className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold transition-colors bg-transparent border-none p-0 cursor-pointer"
                        >
                            Daha Fazlasını Öğrenin <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Faaliyet Alanları Önizleme */}
            <section className="bg-gray-100 py-16 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
                    Uzmanlık Alanlarımız
                </h2>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Alan 1 */}
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Briefcase className="w-16 h-16 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Ticaret ve Şirketler Hukuku</h3>
                        <p className="text-gray-600 mb-4">
                            Şirketlerin kuruluşundan birleşme ve devralmalara kadar geniş bir yelpazede hukuki danışmanlık hizmetleri sunmaktayız.
                        </p>
                        <button
                            onClick={() => navigate('/faaliyet-alanlari#ticaret')}
                            className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center bg-transparent border-none p-0 cursor-pointer"
                        >
                            Detayları Gör <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    </motion.div>

                    {/* Alan 2 */}
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <Home className="w-16 h-16 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-bold text-blue-800 mb-3">Gayrimenkul Hukuku</h3>
                        <p className="text-gray-600 mb-4">
                            Arsa, konut, ticari mülk alım satımı ve kiralama sözleşmeleri gibi konularda uzman desteği sağlıyoruz.
                        </p>
                        <button
                            onClick={() => navigate('/faaliyet-alanlari#gayrimenkul')}
                            className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center bg-transparent border-none p-0 cursor-pointer"
                        >
                            Detayları Gör <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    </motion.div>

                    {/* Alan 3 */}
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Info className="w-16 h-16 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-bold text-blue-800 mb-3">İş ve Sosyal Güvenlik Hukuku</h3>
                        <p className="text-gray-600 mb-4">
                            İşçi-işveren ilişkileri, iş kazaları, sendikal haklar ve tüm SGK süreçlerinde danışmanlık.
                        </p>
                        <button
                            onClick={() => navigate('/faaliyet-alanlari#is-hukuku')}
                            className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center bg-transparent border-none p-0 cursor-pointer"
                        >
                            Detayları Gör <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    </motion.div>
                </div>
                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/faaliyet-alanlari')}
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Tüm Faaliyet Alanlarımız
                    </button>
                </div>
            </section>

            {/* İletişim CTA */}
            <section className="bg-blue-900 text-white py-16 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Hukuki İhtiyaçlarınız İçin Bize Ulaşın</h2>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    Uzman ekibimizle size yardımcı olmaktan memnuniyet duyarız.
                </p>
                <button
                    onClick={() => navigate('/iletisim')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Randevu Alın
                </button>
            </section>
        </motion.div>
    );
};

export default HomePage;
