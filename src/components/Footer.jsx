import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Mail, Phone, MapPin, Linkedin, X, Facebook, ChevronRight, Instagram} from 'lucide-react';

const Footer = () => {
    const navigate = useNavigate(); // Programatik navigasyon için
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Hukuk Bürosu Bilgileri */}
                <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Şahin Hukuk ve Danışmanlık Bürosu</h3>
                    <p className="text-sm leading-relaxed mb-4">
                        Müvekkillerimize hukukun her alanında güvenilir ve etkin çözümler sunan, adaleti rehber edinen köklü bir hukuk bürosuyuz.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/av.ramazansahinn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        {/*<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6"/>
                        </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="w-6 h-6" />
                            </a>*/}
                    </div>
                </div>

                {/* Hızlı Bağlantılar */}
                <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Hızlı Bağlantılar</h3>
                    <ul className="space-y-2">
                        <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors flex items-center bg-transparent border-none p-0 cursor-pointer text-left"><ChevronRight className="w-4 h-4 mr-2" />Ana Sayfa</button></li>
                        <li><button onClick={() => navigate('/hakkimizda')} className="hover:text-white transition-colors flex items-center bg-transparent border-none p-0 cursor-pointer text-left"><ChevronRight className="w-4 h-4 mr-2" />Hakkımızda</button></li>
                        <li><button onClick={() => navigate('/faaliyet-alanlari')} className="hover:text-white transition-colors flex items-center bg-transparent border-none p-0 cursor-pointer text-left"><ChevronRight className="w-4 h-4 mr-2" />Faaliyet Alanları</button></li>
                        <li><button onClick={() => navigate('/iletisim')} className="hover:text-white transition-colors flex items-center bg-transparent border-none p-0 cursor-pointer text-left"><ChevronRight className="w-4 h-4 mr-2" />İletişim</button></li>
                    </ul>
                </div>

                {/* İletişim Bilgileri */}
                <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">İletişim</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <MapPin className="w-5 h-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
                            <a
                                href="https://www.google.com/maps?ll=40.195448,29.063176&z=19&t=m&hl=tr&gl=TR&mapclient=embed&cid=13759398979621655973"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Selamet Mah. Vardar Cd. No:5 Ecevit Sinem 2 İş Hanı K:2 D:24, <br /> Osmangazi, Bursa/Türkiye
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-5 h-5 mr-3 text-gray-400" />
                            <span>+90 541 383 62 44</span>
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-5 h-5 mr-3 text-gray-400" />
                            <a href="mailto:av.ramazansahinn@gmail.com" className="hover:text-white transition-colors">av.ramazansahinn@gmail.com</a>

                        </li>
                    </ul>
                </div>
            </div>

            {/* Telif Hakkı */}
            <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Şahin Hukuk ve Danışmanlık Bürosu. Tüm Hakları Saklıdır.
            </div>
        </footer>
    );
};

export default Footer;
