import { Users, Briefcase, Calendar } from 'lucide-react';
import FocusCard from "../ui/FocusCard.tsx";

// Data can live here or in a separate constants file
const focusAreas = [
    { icon: Briefcase, title: 'Career & Burnout', description: 'Find balance and rediscover purpose in high-stress professional lives.' },
    { icon: Users, title: 'Relationships & Transitions', description: 'Process major life shifts, like divorce, loss, or new beginnings, with resilience.' },
    { icon: Calendar, title: 'Anxiety & Stress Management', description: 'Develop concrete tools to manage daily anxiety and overcome feeling overwhelmed.' },
];

const CoreFocusSection = () => (
    <section id="focus" className="bg-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-[#1D4A47] mb-4">Focusing on Where You Are Going</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Our approach is rooted in mindfulness and evidence-based techniques to address the core challenges facing modern adults.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {focusAreas.map((item, index) => (
                    <FocusCard key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    </section>
);

export default CoreFocusSection;
