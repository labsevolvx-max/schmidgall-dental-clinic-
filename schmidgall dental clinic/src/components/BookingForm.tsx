
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        privacy: false,
        marketing: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle submission logic here
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full p-10"
            >
                <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary-900">Book Your Free Consultation</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Take the first step towards your perfect smile. Fill out the form below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all bg-gray-50"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all bg-gray-50"
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all bg-gray-50"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all bg-gray-50"
                                placeholder=""
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="message">Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all bg-gray-50 resize-none"
                            placeholder=""
                        ></textarea>
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="privacy"
                                checked={formData.privacy}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-accent-500 rounded border-gray-300 focus:ring-accent-500"
                            />
                            <span className="text-gray-500 text-sm">I accept the Privacy Policy</span>
                        </label>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
                    >
                        Send Message
                        <Send size={18} />
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default BookingForm;
