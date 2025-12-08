
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-[#f5f5f5] py-20 px-4">
            <div className="max-w-7xl mx-auto flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl w-full text-center"
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
