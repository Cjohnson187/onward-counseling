import { Mail } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Onward Counseling. All Rights Reserved.</p>
            <div className="flex space-x-6">
                <a href="#onward-counseling" className="hover:text-[#C87E5A] transition duration-150">Privacy Policy</a>
                <a href="#onward-counseling" className="hover:text-[#C87E5A] transition duration-150">Terms of Service</a>
                <a href="mailto:contact@onwardcounseling.com" className="hover:text-[#C87E5A] transition duration-150 flex items-center">
                    <Mail className="w-4 h-4 mr-1" /> Contact Us
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
