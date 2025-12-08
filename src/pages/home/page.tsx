import { ThemeProvider } from '../../contexts/ThemeContext';
import { useTheme } from '../../contexts/ThemeContext';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import Carousel from '../../components/Carousel';
import type { CarouselItem } from '../../components/Carousel';
import { useEffect, useRef } from 'react';

export function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={sectionRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}

function HomeContent() {
  const { theme } = useTheme();

  const carouselItems: CarouselItem[] = [
    {
      image: "/IMG_2770.JPG",
      title: "Exploring Lenz Law",
      type: "image",
      description: "Bridging the gap between retro charm and modern power.",
      alt: "A desk with vintage technology like a Commodore computer and a Game Boy, bathed in vibrant pink and blue neon lights, retro-futuristic style."
    },
    {
      image: "http://ennovatingx.com.s3-website-us-east-1.amazonaws.com/VID-20220628-WA0032.mp4",
      title: "Exploring Magnetic Fields",
      type: "video",
      description: "Exploring the future of human-computer interfaces.",
      alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
    },
    {
      image: "/Inst_0001.jpeg",
      title: "Building Cutting Edge Software As A Service (SAAS) Products",
      type: "image",
      description: "Exploring the future of human-computer interfaces.",
      alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
    },
    {
      image: "/IMG_2752.JPG",
      title: "The Meissner Effect",
      type: "image",
      description: "Dive in with us, as we talk about the Meissner effect",
      alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
    },
    {
      image: "/IMG_2752.JPG",
      title: "Electromagnetic Suspension",
      type: "image",
      description: "Dive in with us, as we talk about the Electromagnetic Suspension (EMS) Principles",
      alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
    },
    {
      image: "/IMG_2752.JPG",
      title: "Electrodynamic Suspension",
      type: "image",
      description: "Dive in with us, as we talk about the Electrodynamic Suspension (EDS) Principles",
      alt: "A glowing, holographic brain interface with neural pathways firing, dark background, cyberpunk aesthetic."
    },
  ];

  

  return (
    <div className={`${theme.text} min-h-screen font-sans transition-colors duration-500`}>
      <Header />

      <HeroSection />

      {/* Conglomerate Clarity Strip */}
      <AnimatedSection delay={80}>
        <section className={`py-10 ${theme.bg} transition-colors duration-500`}>
          <div className="container mx-auto px-6">
            <div className={`w-full ${theme.bgCard} border ${theme.border} rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6`}>
              <div className="flex-1">
                <p className={`${theme.textMuted} uppercase tracking-[0.25em] text-xs font-semibold mb-2`}>EnnovatingX</p>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  We operate deep-tech ventures across MAGLEV R&D and SaaS Platforms.
                </h2>
                <p className={`${theme.textMuted} mt-3`}>A holding company (think Alphabet-style) powering multiple ventures with shared research, engineering, and product teams.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a href="/products/xlab" className={`flex-1 sm:flex-none px-5 py-3 rounded-lg ${theme.accentBg} text-white font-semibold text-center hover:opacity-90 transition-all`}>Explore Xlab</a>
                <a href="/products/xhub" className={`flex-1 sm:flex-none px-5 py-3 rounded-lg border ${theme.border} font-semibold text-center hover:${theme.accentBg} hover:text-white transition-all`}>Explore Xhub</a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={150}>
        <Carousel
        items={carouselItems}
        title="What We're Up To"
        subtitle="Immerse yourself in the cutting edge of technology and innovation. Here's a glimpse into our latest projects."
      />
      </AnimatedSection>

      {/* What We Do Trio */}
      {/* <AnimatedSection delay={120}>
        <section className={`py-14 ${theme.bg} transition-colors duration-500`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'MAGLEV R&D',
                  description: 'Levitating systems, superconductivity, and field control for next-gen mobility and display.',
                  link: '/products/xlab'
                },
              
                {
                  title: 'SaaS Platforms (Xhub)',
                  description: 'Cloud-native products that operationalize our research for teams and enterprises.',
                  link: '/products/xhub'
                }
              ].map((item, idx) => (
                <Link
                  to={item.link}
                  key={idx}
                  className={`${theme.bgCard} border ${theme.border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 block`}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className={theme.textMuted}>{item.description}</p>
                  <span className={`mt-4 inline-flex items-center gap-2 font-semibold ${theme.text}`}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* Equationized Innovation Section (moved before carousel) */}
      <AnimatedSection delay={100}>
        <section className={`py-20 md:py-24 ${theme.bg} transition-colors duration-500 relative`}> 
          <div className="absolute inset-0 pointer-events-none opacity-40 blur-3xl" aria-hidden>
            <div className="bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-sky-500/20 w-full h-full" />
          </div>
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-10">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">We Build · We Innovate</h2>
              <p className={`${theme.textMuted} mt-4 md:mt-5 text-base md:text-lg`}>Think of X as a placeholder for anything worth innovating.</p>
            </div>
            <div className={`relative max-w-6xl mx-auto ${theme.bgCard} rounded-3xl border ${theme.border} shadow-xl p-8 md:p-12`}> 
              {/* Top divider styled like a fraction bar */}
              <div className="absolute left-8 right-8 -top-0.5 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />

              {/* Equation-like layout */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                <div className="flex items-center justify-center flex-wrap gap-4 md:gap-6 leading-none">
                  <span className={`text-3xl md:text-5xl font-mono ${theme.text}`}>Build</span>
                  <span className={`text-3xl md:text-5xl font-mono ${theme.text}`}>+</span>
                  <span className={`text-3xl md:text-5xl font-mono ${theme.text}`}>Innovate</span>
                  <span className={`text-3xl md:text-5xl font-mono ${theme.text}`}>=</span>
                  <span className={`text-3xl md:text-5xl font-mono ${theme.text}`}>{'{X}'}</span>
                </div>

                <div className={`mt-2 text-sm md:text-base ${theme.textMuted}`}>
                  Where {'{X}'} = Ventures we build and operate: Xlab (R&D), Xhub (SaaS), and frontier research.
                </div>

                {/* Expanded form */}
                <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`rounded-2xl border ${theme.border} p-6 hover:shadow-lg transition-shadow`}> 
                    <div className={`text-xl md:text-2xl font-mono ${theme.text}`}>Build {'→'} {'{X}₁'}</div>
                    <p className={`${theme.textMuted} mt-2`}>From concept to prototype: hardware, software, platforms.</p>
                  </div>
                  <div className={`rounded-2xl border ${theme.border} p-6 hover:shadow-lg transition-shadow`}> 
                    <div className={`text-xl md:text-2xl font-mono ${theme.text}`}>Innovate {'→'} {'{X}₂'}</div>
                    <p className={`${theme.textMuted} mt-2`}>New methods, new interfaces, new models that redefine possible.</p>
                  </div>
                  <div className={`rounded-2xl border ${theme.border} p-6 hover:shadow-lg transition-shadow`}> 
                    <div className={`text-xl md:text-2xl font-mono ${theme.text}`}>{'{X}'} {'='} {'{X}₁'} {'∪'} {'{X}₂'}</div>
                    <p className={`${theme.textMuted} mt-2`}>Unified outcomes: deployed solutions, published research, tangible impact.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

     
    

      

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
