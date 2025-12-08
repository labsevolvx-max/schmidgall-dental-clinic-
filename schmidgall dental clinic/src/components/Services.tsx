
import { motion } from 'framer-motion';

const Services = () => {
    const treatments = [
        {
            title: 'Dental Implants',
            description: 'Permanent solutions for a complete smile.',
            image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Cosmetic Dentistry',
            description: 'Veneers and whitening for aesthetic perfection.',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Orthodontics',
            description: 'Invisalign and modern alignment therapies.',
            image: '/images/orthodontics.jpg'
        },
        {
            title: 'Root Canal Therapy',
            description: 'Advanced microscopic precision ensuring comfort.',
            image: '/images/root-canal.jpg'
        },
        {
            title: 'Laser Gum Treatment',
            description: 'Minimally invasive care for faster healing.',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Full Mouth Rehab',
            description: 'Comprehensive restoration for complex cases.',
            image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section className="py-24 bg-white relative z-10 mb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-slate-900 mb-6">
                        World-Class <span className="text-orange-600">Treatments</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Comprehensive care using the world’s best technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((treatment, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300"
                        >
                            {/* Full Background Image */}
                            <img
                                src={treatment.image}
                                alt={treatment.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Text Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                                <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                                    {treatment.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed opacity-90">
                                    {treatment.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
