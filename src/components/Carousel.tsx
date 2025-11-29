import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export interface CarouselItem {
  image: string;
  title: string;
  type: 'image' | 'video';
  description: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
  title?: string;
  subtitle?: string;
}

export default function Carousel({ items, title, subtitle }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const { isDark } = useTheme();

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  useEffect(() => {
    setVisibleSlides(getVisibleSlides());
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const getCarouselTransform = () => {
    const slideWidth = 100 / visibleSlides;
    return `translateX(-${currentSlide * slideWidth}%)`;
  };

  return (
    <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}>
      <div className="container mx-auto px-6">
        {title && (
          <>
            <div className={`w-32 h-1 bg-gradient-to-r ${isDark ? 'from-[#9DA7D0] to-[#9DA7D0]' : 'from-[#6B7AA1] to-[#6B7AA1]'} mb-8 transition-colors duration-500`}></div>
            <h2 className="text-4xl font-bold mb-2">{title}</h2>
          </>
        )}
        {subtitle && (
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl transition-colors duration-500`}>
            {subtitle}
          </p>
        )}

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: getCarouselTransform() }}
            >
              {items.map((item, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <div className="h-[450px]">
                      {item.type === 'image' ? (
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={item.image}
                          alt={item.alt}
                        />
                      ) : (
                        <video
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={item.image}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold mb-1 text-white">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 left-0 -translate-y-1/2 ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-sm p-3 rounded-full ${isDark ? 'text-white hover:bg-white/20' : 'text-gray-900 hover:bg-black/20'} transition-all duration-300 z-10 mx-2`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 right-0 -translate-y-1/2 ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-sm p-3 rounded-full ${isDark ? 'text-white hover:bg-white/20' : 'text-gray-900 hover:bg-black/20'} transition-all duration-300 z-10 mx-2`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}