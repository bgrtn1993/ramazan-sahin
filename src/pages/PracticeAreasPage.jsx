import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Home, Info, Mail, ChevronRight, Sparkle } from 'lucide-react';
import SummaryModal from '../components/SummaryModal'; // SummaryModal'ı import et

const PracticeAreasPage = ({ pageVariants }) => {
    const navigate = useNavigate();

    // State for summary modal
    const [showSummaryModal, setShowSummaryModal] = useState(false);
    const [summaryText, setSummaryText] = useState('');
    const [isLoadingSummary, setIsLoadingSummary] = useState(false);
    const [summaryError, setSummaryError] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const practiceAreas = [
        {
            id: "ticaret",
            title: "Ticaret ve Şirketler Hukuku",
            icon: Briefcase,
            description: "Şirketlerin kuruluşundan birleşme ve devralmalara, şirketler arası sözleşmelerden uyuşmazlıkların çözümüne kadar geniş bir yelpazede hukuki danışmanlık ve dava takibi hizmetleri sunmaktayız. Ticari hayatın dinamik yapısına uygun, yenilikçi çözümlerle müvekkillerimizin ticari faaliyetlerini güvence altına alıyoruz.",
            services: [
                "Şirket kuruluşu, ana sözleşme değişiklikleri",
                "Birleşme ve devralmalar (M&A)",
                "Ortaklık sözleşmeleri ve hissedarlar arası uyuşmazlıklar",
                "Haksız rekabet davaları",
                "Ticari sözleşmelerin hazırlanması ve incelenmesi",
                "İflas ve konkordato süreçleri",
                "Ticari davalar ve tahkim"
            ]
        },
        {
            id: "gayrimenkul",
            title: "Gayrimenkul Hukuku",
            icon: Home,
            description: "Arsa, konut, ticari mülk alım satımı, kiralama sözleşmeleri, ipotek ve irtifak hakları gibi gayrimenkul ile ilgili tüm hukuki konularda müvekkillerimize kapsamlı danışmanlık ve temsil hizmetleri sunuyoruz. Tapu tescil, kadastro ve imar hukuku konularında da uzman desteği sağlıyoruz.",
            services: [
                "Gayrimenkul alım-satım sözleşmeleri",
                "Kira sözleşmeleri ve tahliye davaları",
                "Tapu iptal ve tescil davaları",
                "İpotek ve irtifak hakları tesisi",
                "Kat mülkiyeti hukuku uyuşmazlıkları",
                "İmar hukuku danışmanlığı",
                "Kamulaştırma davaları"
            ]
        },
        {
            id: "is-hukuku",
            title: "İş ve Sosyal Güvenlik Hukuku",
            icon: Info, // Geçici bir ikon, uygun bir ikon bulunabilir
            description: "İşçi ve işveren arasındaki hukuki ilişkileri düzenleyen mevzuat çerçevesinde, iş sözleşmelerinin hazırlanmasından işçi alacaklarına, iş kazalarından sendikal haklara kadar geniş bir yelpazede hukuki danışmanlık ve dava takibi hizmetleri sunmaktayız. Sosyal Güvenlik Hukuku alanında da emeklilik, sigorta primleri gibi konularda destek veriyoruz.",
            services: [
                "İş sözleşmelerinin hazırlanması ve feshi",
                "Kıdem ve ihbar tazminatı davaları",
                "İşçi alacakları davaları (ücret, fazla mesai vb.)",
                "İş kazası ve meslek hastalığı davaları",
                "Sendikal haklar ve toplu iş sözleşmeleri",
                "Sosyal güvenlik mevzuatı danışmanlığı",
                "İşveren danışmanlığı ve uyum süreçleri"
            ]
        },
        {
            id: "aile",
            title: "Aile Hukuku",
            icon: Briefcase, // Geçici bir ikon, uygun bir ikon bulunabilir
            description: "Evlilik birliğinin kurulması, boşanma, velayet, nafaka, mal rejimi ve miras gibi aile hukukunun her alanında hassasiyetle ve gizlilik prensibiyle hukuki destek sağlıyoruz. Amacımız, zorlu süreçlerde müvekkillerimize en doğru ve adil çözümleri sunmaktır.",
            services: [
                "Anlaşmalı ve çekişmeli boşanma davaları",
                "Nafaka davaları (iştirak, yoksulluk, tedbir)",
                "Velayet ve kişisel ilişki kurulması davaları",
                "Mal rejimi tasfiyesi davaları",
                "Evlat edinme süreçleri",
                "Ailenin korunması ve kadına şiddetin önlenmesi",
                "Miras hukuku davaları ve miras taksimi"
            ]
        },
        {
            id: "ceza",
            title: "Ceza Hukuku",
            icon: Mail, // Geçici bir ikon, uygun bir ikon bulunabilir
            description: "Türk Ceza Kanunu ve ilgili mevzuat çerçevesinde, soruşturma aşamasından infaz aşamasına kadar tüm ceza yargılaması süreçlerinde müvekkillerimizi etkin bir şekilde temsil ediyoruz. Ağır ceza davaları, ekonomik suçlar ve bilişim suçları konularında derinlemesine bilgi ve deneyime sahibiz.",
            services: [
                "Soruşturma ve kovuşturma aşamalarında sanık/mağdur vekilliği",
                "Tutukluluğa itiraz ve tahliye talepleri",
                "Asliye Ceza ve Ağır Ceza Mahkemelerinde savunma",
                "Ekonomik suçlar ve dolandırıcılık davaları",
                "Bilişim suçları",
                "İnfaz hukuku işlemleri",
                "Suç duyurusu ve şikayet dilekçelerinin hazırlanması"
            ]
        },
    ];

    // Function to call Gemini API for summarization
    const handleSummarize = async (description) => {
        setIsLoadingSummary(true);
        setSummaryError('');
        setSummaryText('');
        setShowSummaryModal(true); // Open modal immediately

        try {
            const prompt = `Özetlemek istediğim hukuk alanı açıklaması: '${description}'. Bu açıklamayı basit ve anlaşılır bir dille, 2-3 cümlelik kısa bir paragraf halinde özetler misin? Hukuki terimleri basitleştir ve genel bir kullanıcı kitlesinin anlayabileceği şekilde ifade et.`;

            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json(); // Await the JSON parsing

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setSummaryText(text);
            } else {
                setSummaryError("Özet alınamadı. Lütfen tekrar deneyin.");
                console.error("Gemini API'den beklenmeyen yanıt yapısı:", result);
            }
        } catch (error) {
            setSummaryError("Özetleme sırasında bir hata oluştu: " + error.message);
            console.error("Özetleme hatası:", error);
        } finally {
            setIsLoadingSummary(false);
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
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Faaliyet Alanlarımız</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Hukukun çeşitli alanlarında uzmanlaşmış ekibimizle müvekkillerimize kapsamlı hizmetler sunuyoruz.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 gap-12">
                    {practiceAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            id={area.id}
                            className="bg-white rounded-lg shadow-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="flex-shrink-0 mb-6 md:mb-0">
                                <area.icon className="w-20 h-20 text-yellow-500 mx-auto" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-blue-900 mb-4 md:text-left text-center">{area.title}</h2>
                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    {area.description}
                                </p>
                                <h3 className="text-xl font-bold text-blue-800 mb-3">Sunulan Hizmetler:</h3>
                                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                    {area.services.map((service, sIndex) => (
                                        <li key={sIndex} className="flex items-start">
                                            <ChevronRight className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-blue-600" />
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <button
                                        onClick={() => handleSummarize(area.description)}
                                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
                                        disabled={isLoadingSummary && showSummaryModal} // Disable if already loading a summary
                                    >
                                        <Sparkle className="w-5 h-5 mr-2" />
                                        Alanı Özetle
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Summary Modal Component */}
            {showSummaryModal && (
                <AnimatePresence>
                    <SummaryModal
                        summaryText={summaryText}
                        isLoading={isLoadingSummary}
                        error={summaryError}
                        onClose={() => setShowSummaryModal(false)}
                    />
                </AnimatePresence>
            )}
        </motion.div>
    );
};

export default PracticeAreasPage;
