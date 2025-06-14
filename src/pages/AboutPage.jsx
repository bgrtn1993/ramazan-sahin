import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage = ({ pageVariants }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teamMembers = [
        {
            name: "Av. Ramazan Şahin",
            title: "Kurucu",
            specialty: "Ticaret Hukuku, Sözleşmeler Hukuku",
            image: "https://placehold.co/200x200/0A1B4B/FFFFFF?text=RŞ"
        },
    ];

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
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hakkımızda</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Hukukun üstünlüğüne olan inancımızla, müvekkillerimize en iyi hukuki hizmeti sunmak için buradayız.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Misyonumuz ve Vizyonumuz</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        [Hukuk Bürosu Adı] olarak misyonumuz; müvekkillerimizin hukuki ihtiyaçlarını en üst düzeyde karşılayarak, şeffaf, güvenilir ve etik değerlere bağlı bir hizmet sunmaktır. Hukukun her alanında güncel gelişmeleri takip ederek, müvekkillerimize proaktif ve sonuç odaklı çözümler üretmek temel hedefimizdir.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Vizyonumuz ise; Türkiye'de ve uluslararası alanda saygın, güvenilir ve tercih edilen bir hukuk bürosu olmak, hukuki danışmanlık ve dava takibi süreçlerinde öncü rol oynamaktır. Alanında uzmanlaşmış kadromuzla, adaletin tecellisine katkıda bulunmayı sürdürmekteyiz.
                    </p>
                    {/*<h2 className="text-3xl font-bold text-blue-900 mt-12 mb-8 text-center">Ekibimiz</h2>*/}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-100 rounded-lg shadow-md p-6 text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-500"
                                />
                                <h3 className="text-xl font-bold text-blue-800 mb-2">{member.name}</h3>
                                <p className="text-yellow-600 font-semibold mb-2">{member.title}</p>
                                <p className="text-gray-600 text-sm">{member.specialty}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;
