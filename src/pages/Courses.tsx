
import { Calculator, FlaskConical, Languages, Atom, Monitor, BookOpen } from 'lucide-react';

const Courses = () => {
    const subjects = [
        { name: 'Physics', icon: <Atom className="h-6 w-6 text-purple-500" />, description: 'Concepts of matter and energy.' },
        { name: 'Chemistry', icon: <FlaskConical className="h-6 w-6 text-green-500" />, description: 'Organic and inorganic chemistry.' },
        { name: 'Mathematics', icon: <Calculator className="h-6 w-6 text-blue-500" />, description: 'Arithmetic, Algebra, and Geometry.' },
        { name: 'Computer Science', icon: <Monitor className="h-6 w-6 text-indigo-500" />, description: 'Programming and digital literacy.' },
        { name: 'Tamil', icon: <Languages className="h-6 w-6 text-red-500" />, description: 'Language and literature.' },
        { name: 'English', icon: <BookOpen className="h-6 w-6 text-yellow-600" />, description: 'Grammar and communication.' },
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

    const fees = [
        { class: 'LKG & UKG', amount: '₹500' },
        { class: '1st, 2nd, 3rd, 4th Std', amount: '₹700' },
        { class: '5th, 6th, 7th, 8th Std', amount: '₹800' },
        { class: '9th & 10th Std', amount: '₹1000' },
        { class: '11th & 12th Std', amount: '₹1800' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Our Courses</h1>
                    <p className="mt-4 text-xl text-secondary">
                        Comprehensive Tuition for LKG to 12th Standard
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {/* Subjects Grid */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Subjects We Cover</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {/* Fees Structure */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fee Structure (Monthly)</h2>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-3xl mx-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Class / Standard
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Monthly Fee
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {fees.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.class}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-bold">
                                            {item.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Levels Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Class Levels Details</h2>
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
