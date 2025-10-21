const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <span className="text-4xl text-[#1D4A47] font-bold">O</span>
                <span className="text-2xl font-semibold text-gray-800 tracking-wider">Onward Counseling</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
                <a href="#onward-counseling" className="text-gray-600 hover:text-[#1D4A47] transition duration-150">Home</a>
                <a href="#onward-counseling" className="text-gray-600 hover:text-[#1D4A47] transition duration-150">Our Focus</a>
                <a href="#onward-counseling" className="text-gray-600 hover:text-[#1D4A47] transition duration-150">About</a>
                <a href="#onward-counseling" className="text-gray-600 hover:text-[#1D4A47] transition duration-150">Contact</a>
            </nav>

            {/* CTA Button */}
            <a
                href="#onward-counseling"
                className="px-6 py-2 rounded-full text-white font-semibold bg-[#C87E5A] hover:bg-[#A36A4C] transition duration-200 shadow-md"
            >
                Book Consultation
            </a>
        </div>
    </header>
);

export default Header;
