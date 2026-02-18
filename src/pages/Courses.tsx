
import { Book, Calculator, FlaskConical, Languages } from 'lucide-react';

const Courses = () => {
    const subjects = [
        { name: 'Mathematics', icon: <Calculator className="h-6 w-6 text-yellow-500" />, description: 'Foundational concepts to advanced problem solving.' },
        { name: 'Science', icon: <FlaskConical className="h-6 w-6 text-green-500" />, description: 'Physics, Chemistry, and Biology with practical understanding.' },
        { name: 'English', icon: <Book className="h-6 w-6 text-blue-500" />, description: 'Grammar, literature, and communication skills.' },
        { name: 'Languages', icon: <Languages className="h-6 w-6 text-red-500" />, description: 'Tamil and other language subjects.' },
    ];

    const levels = [
        {
            title: 'Kindergarten (LKG & UKG)',
            description: 'Focus on literacy, numeracy, and social skills through play-way method.',
            features: ['Phonics', 'Basic Math', 'Storytelling', 'Handwriting']
        },
        {
            title: 'Primary School (1st - 5th Std)',
            description: 'Building strong fundamentals in core subjects.',
            features: ['Homework Assistance', 'Concept Clarity', 'Regular Tests', 'Reading Practice']
        },
        {
            title: 'Middle School (6th - 8th Std)',
            description: 'Preparing for higher classes with in-depth understanding.',
            features: ['Subject Specialization', 'Project Guidance', 'Foundation for Board Exams', 'Analytical Skills']
        },
        {
            title: 'High School (9th & 10th Std)',
            description: 'Rigorous preparation for board exams with focus on scoring.',
            features: ['Board Exam Strategies', 'Mock Tests', 'Previous Year Papers', 'Individual Doubt Clearing']
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Our Courses</h1>
                    <p className="mt-4 text-xl text-secondary">
                        Comprehensive Tuition for LKG to 10th Standard (All Boards)
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {/* Subjects Grid */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Subjects We Cover</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {subjects.map((sub) => (
                            <div key={sub.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 mb-4 mx-auto">
                                    {sub.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 text-center">{sub.name}</h3>
                                <p className="mt-2 text-sm text-gray-500 text-center">{sub.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Levels Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Class Levels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {levels.map((level, index) => (
                            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg font-medium leading-6 text-primary">{level.title}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{level.description}</p>
                                    <div className="mt-4">
                                        <ul className="list-disc pl-5 space-y-1">
                                            {level.features.map((feature, idx) => (
                                                <li key={idx} className="text-sm text-gray-600">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-secondary">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Timings</h3>
                    <p className="text-lg text-primary font-semibold">Monday to Saturday</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">6:00 PM – 8:30 PM</p>
                </div>

            </div>
        </div>
    );
};

export default Courses;
