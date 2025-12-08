
import { motion } from 'framer-motion';
import { Logos3 } from "@/components/ui/logos3";

const DentalTechnology = () => {
    const partners = [
        "Osstem Implant",
        "Invisalign",
        "Precision Dental Arts",
        "DentCare",
        "Indian Dental Association (IDA)",
        "Nobel Biocare",
        "Straumann"
    ];

    const logosData = partners.map((partner, index) => ({
        id: `logo-${index}`,
        description: partner,
        text: partner,
        className: "h-7 w-auto"
    }));

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
                    alt="Modern Dental Clinic Technology"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Text Content */}
                <div className="text-center mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        Powered by the Latest in <span className="text-orange-600">Dental Technology</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                    >
                        Experience precision, comfort, and faster results with cutting-edge equipment.
                    </motion.p>
                </div>

                {/* Logos3 Carousel */}
                <Logos3 logos={logosData} heading="" />
            </div>
        </section>
    );
};

export default DentalTechnology;
