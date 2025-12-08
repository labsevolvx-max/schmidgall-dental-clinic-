
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
    const plugin = useRef(
        AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false })
    );

    return (
        <section className="py-24">
            <div className="container flex flex-col items-center text-center">
            </div>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[plugin.current]}
                    >
                        <CarouselContent className="ml-0">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                                >
                                    <div className="mx-10 flex shrink-0 items-center justify-center">
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
