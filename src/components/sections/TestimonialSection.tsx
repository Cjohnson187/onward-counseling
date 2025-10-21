// Data can live here or in a separate constants file
const testimonials = [
    "\"The change in my outlook after a few months was incredible. I finally feel equipped to handle pressure and move forward.\"",
    "\"Spenser's approach is grounded and practical. It helped me navigate a huge career transition without losing myself in the process.\"",
];

const TestimonialSection = () => (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 py-20">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1D4A47]">Voices of Progress</h2>
            <p className="text-lg text-gray-600">Hear from clients who have found their way forward.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((quote, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#C87E5A]">
                    <p className="text-2xl italic text-gray-700 leading-relaxed mb-4">
                        {quote}
                    </p>
                    <p className="text-right font-semibold text-[#1D4A47]">- Client (Anonymized)</p>
                </div>
            ))}
        </div>
    </section>
);

export default TestimonialSection;
