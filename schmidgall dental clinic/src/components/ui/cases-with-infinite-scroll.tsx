"use client";

import { useState } from "react";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";

export const testimonials = [
    {
        text: "Dr. S is an outstanding Dentist. He takes time to explain and is professional, very smart and caring! Love,love, love this place! I have recommended Country Day Dental to my friends and family! You will not be disappointed!",
        name: "Shaye Johnson",
        role: "Google Review",
    },
    {
        text: "I was so impressed with everyone in this office. Dr. Schmidgall took the time to sit and discuss in-depth the reasons I was there. He's also one of the first dentists to actually seek to treat my chronic jaw pain; he had a plan of care from my first visit.",
        name: "Kayla Hess",
        role: "Google Review",
    },
    {
        text: "Country Day Dental from the first time my family started using them as our dentist we knew they would be our choice. Always cheerful and friendly group. Been attending for about 27yrs. An awesome group of professionals!",
        name: "Vincent Delgado",
        role: "Google Review",
    },
    {
        text: "I didn't want to leave! When's the last time you said that about going to the dentist? And I'm not even kidding. This is the BEST dentist. Amazing facility. State-of-the-art. Exceptional, innovate cleaning. Cocofloss is a game changer.",
        name: "David Martinez",
        role: "Google Review",
    },
    {
        text: "Country Day Dental is absolutely phenomenal! Dr. Schmidgall is a genuinely nice guy with a calm and pleasant demeanor that puts you at ease. He designed the most natural and perfect four front teeth for my mouth that look like what I should have been born with!",
        name: "Jaclyn Cordes",
        role: "Google Review",
    },
];

import { useRef } from "react";

// ... imports remain same

function Case() {
    const [, setApi] = useState<CarouselApi>();

    // Memoize plugins to prevent re-initialization
    // Fix unused variable for build
    const plugin = useRef(
        AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    );

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-white px-6">
                        Trusted by happy patients
                    </h2>
                    <Carousel
                        setApi={setApi}
                        className="w-full"
                        plugins={[plugin.current]}
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 pl-6" key={index}>
                                    <div className="flex flex-col bg-slate-900 border border-slate-800 p-8 rounded-xl h-full justify-between shadow-lg items-center text-center">
                                        <div className="flex flex-col items-center w-full">
                                            {/* Google Logo Centered */}
                                            <div className="mb-4">
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                                    <path d="M1 1h22v22H1z" fill="none" />
                                                </svg>
                                            </div>

                                            {/* Stars Centered */}
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-base font-normal leading-relaxed text-slate-300 mb-8 italic">
                                                "{testimonial.text}"
                                            </p>
                                        </div>

                                        {/* Name Centered at Bottom */}
                                        <div className="mt-auto">
                                            <span className="text-lg font-bold text-white block">{testimonial.name}</span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export { Case };
