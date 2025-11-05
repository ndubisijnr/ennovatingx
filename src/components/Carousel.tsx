import { useState, useEffect, useRef } from 'react';

const Carousel3D = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const autoAdvanceTimer = useRef(null);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80",
            alt: "Geometric art installation",
            title: "Digital Prism",
            description: "Where geometry meets art in a stunning display of light and form.",
            gradient: "from-violet-500/40 to-purple-500/40"
        },
        {
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
            alt: "Futuristic tech setup",
            title: "Tech Haven",
            description: "Immerse yourself in the cutting edge of technology and innovation.",
            gradient: "from-fuchsia-500/40 to-pink-500/40"
        },
        {
            image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80",
            alt: "Abstract digital art",
            title: "Neural Dreams",
            description: "AI-generated masterpieces that blur the line between human and machine creativity.",
            gradient: "from-pink-500/40 to-rose-500/40"
        }
    ];

    const resetAutoAdvance = () => {
        if (autoAdvanceTimer.current) {
            clearInterval(autoAdvanceTimer.current);
        }
        autoAdvanceTimer.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);
    };

    useEffect(() => {
        resetAutoAdvance();
        return () => {
            if (autoAdvanceTimer.current) {
                clearInterval(autoAdvanceTimer.current);
            }
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        resetAutoAdvance();
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
        resetAutoAdvance();
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        resetAutoAdvance();
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    const getSlideClass = (index) => {
        if (index === currentSlide) return 'active';
        if (index === (currentSlide + 1) % slides.length) return 'next';
        if (index === (currentSlide - 1 + slides.length) % slides.length) return 'prev';
        return 'hidden';
    };

    return (
        <div className="flex items-center justify-center overflow-hidden p-4 sm:p-8">
            {/* Background effects */}
            {/*<div className="fixed inset-0 -z-10">*/}
            {/*    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20"></div>*/}
            {/*    <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>*/}
            {/*    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>*/}
            {/*</div>*/}

            {/* Main container */}
            <div className="w-full max-w-6xl mx-auto">
                {/* Carousel container */}
                <div className="relative" style={{ perspective: '1000px', touchAction: 'pan-y pinch-zoom' }}>
                    {/* Progress bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 ease-out"
                            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                        ></div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white transition-all duration-300 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:scale-110 active:scale-95"
                        title="Previous slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white transition-all duration-300 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:scale-110 active:scale-95"
                        title="Next slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    {/* Carousel track */}
                    <div
                        className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
                        style={{ transformStyle: 'preserve-3d' }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Carousel items */}
                        {slides.map((slide, index) => {
                            const slideClass = getSlideClass(index);

                            return (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out ${
                                        slideClass === 'active'
                                            ? 'opacity-100 scale-100'
                                            : slideClass === 'prev'
                                                ? 'opacity-0 sm:opacity-70 scale-80 sm:scale-90 -translate-x-1/2 sm:-translate-x-full'
                                                : slideClass === 'next'
                                                    ? 'opacity-0 sm:opacity-70 scale-80 sm:scale-90 translate-x-1/2 sm:translate-x-full'
                                                    : 'opacity-0 scale-80'
                                    }`}
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: slideClass === 'active'
                                            ? 'scale(1) translateZ(0)'
                                            : slideClass === 'prev'
                                                ? window.innerWidth < 640
                                                    ? 'scale(0.8) translateX(-50%) translateZ(-100px)'
                                                    : 'scale(0.9) translateX(-100%) translateZ(-100px)'
                                                : slideClass === 'next'
                                                    ? window.innerWidth < 640
                                                        ? 'scale(0.8) translateX(50%) translateZ(-100px)'
                                                        : 'scale(0.9) translateX(100%) translateZ(-100px)'
                                                    : 'scale(0.8) translateZ(-200px)'
                                    }}
                                >
                                    <div className="w-full h-full p-4 sm:p-8">
                                        <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                            <img
                                                src={slide.image}
                                                alt={slide.alt}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} mix-blend-overlay`}></div>
                                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                                                    {slide.title}
                                                </h3>
                                                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                                    index === currentSlide ? 'bg-white/40' : 'bg-white/20'
                                } hover:bg-white/60`}
                                title={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel3D;