import { ThemeProvider } from '../../contexts/ThemeContext';
import { useTheme } from '../../contexts/ThemeContext';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import Carousel from '../../components/Carousel';
import type { CarouselItem } from '../../components/Carousel';
import ContactInfoItem from '../../components/ui/ContactInfoItem';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
      image: "/VID-20220628-WA0032.mp4",
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

  const contentSections = [
    {
      title: "We are ENX(ATXLAB)",
      content: [
        "We are not something you come across every day. We exist to make heads turn. At the end of the day; this is what people will be talking about.",
        "We are ENX(ATXLAB) and we provide magnetic levitation technology to businesses, agencies, designers and tinkers.",
        "ENX(ATXLAB) is a tech lab focused on engineering revolutionary solutions across MAGLEV, AI, robotics, advanced systems, human-machine interfaces, and future-driven research. We combine imagination, computation, and raw innovation to shape what comes after what's possible."
      ]
    },
    {
      title: "MAGLEV For Agencies",
      content: [
        "The same applies to magnetic levitation as a marketing tool because you can create a situation where people see something that shouldn't be possible, therefore triggering interest on the spot. You can imagine what the sight of a floating object does in combination with social media."
      ]
    },
    {
      title: "MAGLEV For Business",
      content: [
        "Next to that, levitation technology can power your business in a unique way. By floating your product in mid-air it will be isolated from the world around it and therefore it will attract maximum attention."
      ]
    },
    {
      title: "MAGLEV For Designers",
      content: [
        "Furthermore, the concept of Maglev technology can hold a significant value for designers. On the one hand it can focus the attention to your design as a means of presentation. On the other hand, floating technology can become an integrated part of your design as a feature."
      ]
    },
    {
      title: "MAGLEV For Tinkers",
      content: [
        "In the end, levitation technology is just a lot of fun and anybody with a love for technology can tinker with our products."
      ]
    }
  ];

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen font-sans transition-colors duration-500`}>
      <Header />

      <HeroSection />

      <AnimatedSection delay={100}>
        <Carousel
        items={carouselItems}
        title="What We're Up To"
        subtitle="Immerse yourself in the cutting edge of technology and innovation. Here's a glimpse into our latest projects."
      />
      </AnimatedSection>

      {/* ATXLAB Section */}
      <AnimatedSection delay={200}>
      <section className={`py-24 transition-colors duration-500 relative overflow-hidden`}>
        <video
          src='/20220701_095229.mp4'
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className={`${theme.accent} font-semibold tracking-widest transition-colors duration-500`}>
              ATXLAB
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6">We Can Make It Float Too.</h2>
            <p className={`${theme.text} mb-8 transition-colors duration-500 max-w-sm min-w-sm`}>
              We Research, Design, Build, Test, And Prototype Levitating Technology. Just Think About What You Would Like To Levitate.
            </p>
          </div>
          <div className="relative h-[500px]"></div>
        </div>
      </section>
      </AnimatedSection>

      {/* MAGLEV Information Section */}
      <AnimatedSection delay={300}>
      <section className={`py-24 transition-colors duration-500 relative overflow-hidden`}>
        <div className="container mx-auto px-6 gap-16 items-center relative z-10">
          <div className='text-center'>
            <span className={`${theme.accent} font-semibold tracking-widest transition-colors duration-500`}>
              ATXLAB
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6">We Are All About MAGLEV</h2>
            <p className={`${theme.text} mb-8 transition-colors duration-500`}>
              And We Know How To Make Things Float.
            </p>
          </div>

          <main className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {contentSections.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="text-center mt-24">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Curious what we have to offer?
              </p>
            </div>
          </main>

          {/* Contact Section */}
          <div className="container mx-auto px-6 flex justify-center gap-16 items-center">
            <div className='max-w-lg min-w-lg'>
              <h2 className="text-4xl font-bold mb-4 text-center">
                Let's Build the Future Together
              </h2>
              <p className={`${theme.textMuted} mb-8 transition-colors duration-500 text-center`}>
                Have a groundbreaking idea or a complex problem? We're here to listen and collaborate. Reach out to us and let's start the conversation.
              </p>
              <div className="space-y-6 flex flex-col items-center justify-center w-full">
                <ContactInfoItem
                  icon={MapPin}
                  title="Our Headquarters"
                  content="Eskişehir, Turkey"
                />
                <ContactInfoItem
                  icon={Mail}
                  title="Email Us"
                  content={<a href='mailto:contact@ennovatingx.com'>contact@ennovatingx.com</a>}
                />
                <ContactInfoItem
                  icon={Phone}
                  title="Call Us"
                  content="ENGR EBUKA ON (+90) 553 793 51 64"
                />
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
