import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-8 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-secondary">SRI'S TUITION</h3>
                    <p className="text-gray-300">Building Strong Foundations for a Bright Future.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4 text-secondary">Contact</h3>
                    <div className="flex items-start space-x-2 text-gray-300 mb-2">
                        <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                        <p>Sri Krishna Nagar, Ponnaiyarajapuram, Coimbatore - 641001</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                        <Phone className="h-5 w-5" />
                        <p>+91 90426 44053</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4 text-secondary">Follow Us</h3>
                    <a
                        href="https://www.instagram.com/shrrrii__"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-gray-300 hover:text-pink-500 transition-colors"
                    >
                        <Instagram className="h-6 w-6" />
                        <span>@shrrrii__</span>
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} SRI'S TUITION. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
