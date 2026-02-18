import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        grade: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await addDoc(collection(db, "enquiries"), {
                ...formData,
                timestamp: serverTimestamp()
            });

            setSubmitStatus('success');
            setFormData({ name: '', phone: '', grade: '', subject: '', message: '' });
        } catch (error) {
            console.error("Error adding document: ", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-secondary">
            <h2 className="text-2xl font-bold text-primary mb-6">Send an Enquiry</h2>

            {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 rounded-md flex items-center text-green-700">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <p>Thank you! We received your enquiry and will contact you soon.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 rounded-md flex items-center text-red-700">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <p>Something went wrong. Please try again or contact us directly.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Student/Parent Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                        placeholder="10 digit mobile number"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade/Standard</label>
                        <select
                            id="grade"
                            name="grade"
                            required
                            value={formData.grade}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                        >
                            <option value="">Select Grade</option>
                            <option value="LKG">LKG/UKG</option>
                            <option value="1-5">1st - 5th Std</option>
                            <option value="6-8">6th - 8th Std</option>
                            <option value="9-10">9th - 10th Std</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject Needed</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                            placeholder="e.g. Maths"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                        placeholder="Any specific requirements..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70"
                >
                    {isSubmitting ? 'Sending...' : (
                        <span className="flex items-center">
                            Send Enquiry <Send className="ml-2 h-4 w-4" />
                        </span>
                    )}
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
