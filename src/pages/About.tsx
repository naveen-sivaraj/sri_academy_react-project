
import { Award, Target, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">About SRI'S TUITION</h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Dedicated to empowering students with knowledge and confidence.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Founded with a passion for teaching, SRI'S TUITION has been a beacon of quality education in
                            Sri Krishna Nagar, Coimbatore. We believe that every student has potential, and our goal is to
                            unlock it through personalized attention and innovative teaching methods.
                        </p>
                        <p className="text-lg text-gray-600">
                            Our small batch sizes ensure that no student is left behind, and our experienced faculty
                            provides the mentorship needed for academic excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-secondary">
                            <div className="flex items-center mb-3">
                                <Target className="h-6 w-6 text-primary mr-3" />
                                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                            </div>
                            <p className="text-gray-600">
                                To provide high-quality, accessible education that fosters critical thinking and continuous learning.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-secondary">
                            <div className="flex items-center mb-3">
                                <BookOpen className="h-6 w-6 text-primary mr-3" />
                                <h3 className="text-xl font-bold text-primary">Our Vision</h3>
                            </div>
                            <p className="text-gray-600">
                                To be a trusted partner in every student's academic journey, helping them build a strong foundation for a bright future.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-secondary">
                            <div className="flex items-center mb-3">
                                <Award className="h-6 w-6 text-primary mr-3" />
                                <h3 className="text-xl font-bold text-primary">Our Values</h3>
                            </div>
                            <p className="text-gray-600">
                                Integrity, Dedication, Excellence, and Student-Centric Learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
