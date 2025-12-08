
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
    const navigate = useNavigate();
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/dental-clinic-bg.jpg"
                    alt="Dental Clinic Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 max-w-4xl w-full text-center border border-white/20"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-primary-900 font-bold mb-6 leading-tight">
                        Your Perfect Smile Awaits
                    </h2>

                    <p className="font-sans text-gray-600 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                        Expert dental care tailored to your needs. Take the first step towards confidence today.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/book')}
                        className="bg-accent-500 hover:bg-accent-light text-white font-sans text-lg font-semibold py-4 px-10 rounded-full transition-colors duration-300 shadow-md"
                    >
                        Book Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
