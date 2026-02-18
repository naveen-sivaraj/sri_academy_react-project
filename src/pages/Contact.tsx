
import { MapPin, Phone, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Contact Us</h1>
                    <p className="mt-4 text-xl text-secondary">
                        Get in touch to enroll or learn more.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p className="font-medium text-gray-900">Address:</p>
                                    <p>SRI'S TUITION</p>
                                    <p>Sri Krishna Nagar, Ponnaiyarajapuram,</p>
                                    <p>Coimbatore – 641001</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p className="font-medium text-gray-900">Phone:</p>
                                    <p>+91 90426 44053</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p className="font-medium text-gray-900">Class Timings:</p>
                                    <p>6:00 PM – 8:30 PM (Monday to Saturday)</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-10 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3275997237346!2d76.94276707482467!3d11.011681289151525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85906599ccb29%3A0xc3b4482c3f156d0d!2sPonnaiyarajapuram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <EnquiryForm />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
