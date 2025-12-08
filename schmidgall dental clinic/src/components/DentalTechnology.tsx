
import { Logos3 } from "@/components/ui/logos3";

const DentalTechnology = () => {
    const logosData = [
        {
            id: "logo-precision",
            description: "Precision Dental Arts",
            text: "Precision Dental Arts",
            className: "h-20 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-300"
        },
        {
            id: "logo-dentcare",
            description: "DentCare",
            text: "DentCare",
            className: "h-20 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-300"
        },
        {
            id: "logo-ida",
            description: "Indian Dental Association",
            image: "/logos/ida_gen.png",
            className: "h-24 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-300"
        },
        {
            id: "logo-nobel",
            description: "Nobel Biocare",
            image: "/logos/nobel_gen.png",
            className: "h-20 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-300"
        },
        {
            id: "logo-straumann",
            description: "Straumann",
            image: "/logos/straumann_gen.png",
            className: "h-16 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-300"
        },
        {
            id: "logo-osstem",
            description: "Osstem Implant",
            image: "/logos/osstem.png",
            className: "h-20 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
        },
        {
            id: "logo-invisalign",
            description: "Invisalign",
            image: "/logos/invisalign_gen.png",
            className: "h-20 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-300"
        }
    ];

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
                    <h2
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        Powered with the best <span className="text-orange-600">dental technology</span>
                    </h2>
                    <p
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                    >
                        Experience precision, comfort, and faster results with cutting-edge equipment.
                    </p>
                </div>

                {/* Logos3 Carousel */}
                <Logos3 logos={logosData} heading="" />
            </div>
        </section>
    );
};

export default DentalTechnology;
