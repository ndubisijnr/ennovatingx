import { ThemeProvider } from '../../contexts/ThemeContext';
import { useTheme } from '../../contexts/ThemeContext';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { BookOpen, Calendar, Users, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  date: string;
  abstract: string;
  category: string;
  link?: string;
  image?: string;
}

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={cardRef} className="opacity-0">
      {children}
    </div>
  );
}

function ResearchContent() {
  const { theme } = useTheme();

  const researchPapers: ResearchPaper[] = [
    {
      id: '1',
      title: 'Advances in Room-Temperature Superconductivity: A Path to Magnetic Levitation',
      authors: ['Ndubuisi JNR', 'Ebuka Okonkwo'],
      date: '2024-11-15',
      abstract: 'This paper explores recent breakthroughs in achieving room-temperature superconductivity and its implications for magnetic levitation technology. We present experimental results and theoretical frameworks that bring us closer to practical MAGLEV applications.',
      category: 'Superconductivity',
      image: '/IMG_2752.JPG'
    },
    {
      id: '2',
      title: 'Electromagnetic Suspension Systems: Design and Optimization',
      authors: ['Ebuka Okonkwo', 'Ndubuisi JNR'],
      date: '2024-10-22',
      abstract: 'An in-depth analysis of electromagnetic suspension (EMS) systems, covering design principles, control algorithms, and optimization techniques for stable levitation across various applications.',
      category: 'MAGLEV Technology',
      image: '/IMG_2770.JPG'
    },
    {
      id: '3',
      title: 'The Meissner Effect in Modern Applications',
      authors: ['Ndubuisi JNR'],
      date: '2024-09-18',
      abstract: 'Examining the Meissner effect and its role in magnetic levitation, this research discusses practical implementations and future directions in superconducting technologies.',
      category: 'Physics',
      image: '/VID-20220628-WA0032.mp4'
    },
    {
      id: '4',
      title: 'AI-Driven Control Systems for Levitation Platforms',
      authors: ['Ndubuisi JNR', 'Ebuka Okonkwo', 'Research Team'],
      date: '2024-08-30',
      abstract: 'Integrating artificial intelligence with electromagnetic levitation systems to achieve unprecedented stability and precision. This paper presents novel machine learning approaches for real-time system optimization.',
      category: 'AI & Robotics',
      image: '/Inst_0001.jpeg'
    },
    {
      id: '5',
      title: 'Electrodynamic Suspension: Theory and Practice',
      authors: ['Ebuka Okonkwo'],
      date: '2024-07-12',
      abstract: 'A comprehensive study of electrodynamic suspension (EDS) principles, including mathematical modeling, simulation results, and prototype testing outcomes.',
      category: 'MAGLEV Technology'
    },
    {
      id: '6',
      title: 'Sustainable Energy Solutions for Magnetic Levitation Systems',
      authors: ['Ndubuisi JNR', 'Ebuka Okonkwo'],
      date: '2024-06-05',
      abstract: 'Exploring energy-efficient approaches to power magnetic levitation systems, with a focus on renewable energy integration and power consumption optimization.',
      category: 'Energy & Sustainability'
    }
  ];

  const categories = ['All', ...Array.from(new Set(researchPapers.map(p => p.category)))];

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen font-sans transition-colors duration-500`}>
      <Header />

      {/* Hero Section */}
      <section className={`pt-32 pb-16 ${theme.bg} transition-colors duration-500`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Published Research
            </h1>
            <div className={`w-32 h-1 ${theme.accentBg} mx-auto mb-6`}></div>
            <p className={`text-xl ${theme.textMuted} transition-colors duration-500`}>
              Explore our contributions to the fields of magnetic levitation, superconductivity, AI, and advanced engineering systems.
            </p>
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className={`py-16 ${theme.bg} transition-colors duration-500`}>
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full ${theme.bgAlt} ${theme.text} hover:${theme.accentBg} hover:text-white transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPapers.map((paper, index) => (
              <AnimatedCard key={paper.id} delay={index * 100}>
                <article className={`${theme.bgCard} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col`}>
                  {paper.image && (
                    <div className="h-48 overflow-hidden">
                      {paper.image.endsWith('.mp4') ? (
                        <video
                          src={paper.image}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={paper.image}
                          alt={paper.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )}
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold ${theme.accentBg} text-white rounded-full`}>
                        {paper.category}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-3 ${theme.text} transition-colors duration-500`}>
                      {paper.title}
                    </h3>

                    <div className={`flex items-center gap-2 text-sm ${theme.textMuted} mb-3 transition-colors duration-500`}>
                      <Users className="w-4 h-4" />
                      <span>{paper.authors.join(', ')}</span>
                    </div>

                    <div className={`flex items-center gap-2 text-sm ${theme.textMuted} mb-4 transition-colors duration-500`}>
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>

                    <p className={`${theme.textMuted} text-sm mb-6 flex-1 transition-colors duration-500`}>
                      {paper.abstract}
                    </p>

                    <button className={`flex items-center gap-2 ${theme.accentBg} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 w-full justify-center font-semibold`}>
                      <BookOpen className="w-4 h-4" />
                      Read Paper
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </AnimatedCard>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`mt-20 text-center ${theme.bgCard} rounded-2xl p-12 shadow-xl`}>
            <h2 className="text-3xl font-bold mb-4">Want to Collaborate?</h2>
            <p className={`${theme.textMuted} mb-8 max-w-2xl mx-auto transition-colors duration-500`}>
              We're always looking for research partners, academic collaborators, and innovative minds to join our journey. Reach out if you'd like to contribute or learn more.
            </p>
            <a
              href="mailto:contact@ennovatingx.com"
              className={`inline-block ${theme.accentBg} text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Research() {
  return (
    <ThemeProvider>
      <ResearchContent />
    </ThemeProvider>
  );
}
