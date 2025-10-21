import HeroImage from '../ui/HeroImage';

const HeroSection = () => (
    <section id="home" className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1D4A47] leading-tight">
                Navigating Change. <br className="hidden sm:inline" />
                <span className="text-[#C87E5A]">Grounded Counseling</span> for Adults.
            </h1>
            <p className="text-xl text-gray-700">
                Offering secure and collaborative therapy to help you manage **life transitions, stress, and burnout**, and move toward a stronger, more purposeful future.
            </p>
            <div className="flex space-x-4">
                <a
                    href="#onward-counseling"
                    className="px-8 py-3 text-lg rounded-full text-white font-bold bg-[#C87E5A] hover:bg-[#A36A4C] transition duration-200 shadow-lg"
                >
                    Start Your Journey
                </a>
                <a
                    href="#onward-counseling"
                    className="px-8 py-3 text-lg rounded-full text-[#1D4A47] border-2 border-[#1D4A47] hover:bg-[#1D4A47] hover:text-white transition duration-200 font-semibold"
                >
                    Learn Our Approach
                </a>
            </div>
        </div>
        <HeroImage />
    </section>
);

export default HeroSection;
