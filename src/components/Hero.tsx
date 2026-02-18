import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative bg-primary overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Building Strong</span>{' '}
                                <span className="block text-secondary xl:inline">Foundations for a Bright Future</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                SRI'S TUITION provides quality education for LKG to 10th Standard students.
                                Experience small batch sizes, individual attention, and expert faculty in a
                                conducive learning environment.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/contact"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-yellow-400 md:py-4 md:text-lg transition-all duration-200 transform hover:scale-105"
                                    >
                                        Join Now
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        to="/courses"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 md:py-4 md:text-lg transition-all duration-200"
                                    >
                                        Explore Courses
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
                    src="https://images.pexels.com/photos/4397200/pexels-photo-4397200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Students studying together in a library"
                />
                <div className="absolute inset-0 bg-primary opacity-20 lg:hidden"></div>
            </div>
        </div>
    );
};

export default Hero;
