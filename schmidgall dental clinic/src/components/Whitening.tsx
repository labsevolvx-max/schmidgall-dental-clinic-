import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Whitening = () => {
    return (
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image Section - Absolute */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/whitening-room.jpg"
                    alt="Dental Whitening Room"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text visibility */}
            </div>

            {/* Content Section - Relative on top */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2">
                    {/* Empty column to push text to right (optional) or just use max-w */}
                    <div className="hidden lg:block"></div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl ml-auto bg-black/30 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10"
                    >
                        <span className="text-sm font-bold tracking-widest text-orange-400 uppercase mb-4 block">
                            Free Whitening
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            Whitening for life
                        </h2>

                        <ul className="space-y-6 mb-10">
                            {[
                                "Visit Schmidgall Dental for a new patient cleaning & exam",
                                "Take home a complimentary custom whitening kit",
                                "Book a cleaning every 6 months and we'll refill your whitening gel"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <Check className="text-orange-400 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-100 text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wide border border-orange-500/20">
                            BOOK ONLINE
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Whitening;
