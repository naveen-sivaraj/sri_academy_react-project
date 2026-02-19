
import Hero from '../components/Hero';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

const Home = () => {
    const highlights = [
        {
            icon: <Users className="h-8 w-8 text-secondary" />,
            title: 'Small Batch Size',
            description: 'We ensure individual attention by keeping our batch sizes small and focused.',
        },
        {
            icon: <CheckCircle className="h-8 w-8 text-secondary" />,
            title: 'Individual Attention',
            description: 'Every student gets personalized guidance to overcome their specific learning challenges.',
        },
        {
            icon: <Award className="h-8 w-8 text-secondary" />,
            title: 'Expert Faculty',
            description: 'Classes handled by qualified professionals - Yogeswari (BSc Chemistry) & Sriharini (BSc CS).',
        },
        {
            icon: <Clock className="h-8 w-8 text-secondary" />,
            title: 'Convenient Timings',
            description: 'Evening classes from 6:00 PM to 8:30 PM, Monday to Saturday.',
        },
    ];

    return (
        <div className="flex flex-col">
            <Hero />

            {/* Highlights Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                            Why Choose SRI'S TUITION?
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            We focus on building a strong career and academy foundation for every student.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {highlights.map((item, index) => (
                            <div key={index} className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:shadow-lg transition-shadow duration-300">
                                    <div className="-mt-6">
                                        <div className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                                            {item.icon}
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-primary tracking-tight">{item.title}</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Placeholder */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-primary text-center mb-12">Student Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 mb-4">"Great tuition center! The individual attention helped me improve my grades significantly."</p>
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">S</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Student {i}</p>
                                        <p className="text-sm text-gray-500">10th Standard</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
