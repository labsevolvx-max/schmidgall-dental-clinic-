
"use client";

import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
    id: string;
    description: string;
    image?: string;
    text?: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    logos = [],
}: Logos3Props) => {
    // Duplicate logos to ensure seamless looping
    const infiniteLogos = [...logos, ...logos, ...logos];

    const plugin = useRef(
        AutoScroll({
            playOnInit: true,
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
        })
    );

    return (
        <section className="py-10">
            <div className="w-full">
                <div className="relative w-full flex items-center justify-center">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-0">
                            {infiniteLogos.map((logo, index) => (
                                <CarouselItem
                                    key={`${logo.id}-${index}`}
                                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                                >
                                    <div className="mx-8 flex shrink-0 items-center justify-center">
                                        <div>
                                            {logo.image ? (
                                                <img
                                                    src={logo.image}
                                                    alt={logo.description}
                                                    className={logo.className}
                                                />
                                            ) : (
                                                <span className="text-xl md:text-2xl font-sans font-bold text-white/70 tracking-wide uppercase whitespace-nowrap transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer hover:shadow-glow">
                                                    {logo.text || logo.description}
                                                </span>
                                            )}

                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export { Logos3 };
