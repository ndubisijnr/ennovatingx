import { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from '../../../contexts/ThemeContext';
import Header from '../../../components/layout/Header';
import { Users, Zap, Lightbulb, Rocket, Globe, Sparkles } from 'lucide-react';

function XhubContent() {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Genuises.", "World Changers.", "Innovations.", "Growth."];

  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Where brilliant ideas are born and scaled'
    },
    {
      icon: Users,
      title: 'Talent Hub',
      description: 'Genius minds collaborating on breakthrough solutions'
    },
    {
      icon: Rocket,
      title: 'Build the Next Big Thing',
      description: 'Tools and infrastructure to turn visions into reality'
    },
    {
      icon: Globe,
      title: 'Global Collaboration',
      description: 'Connected teams working together seamlessly'
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Move fast and iterate without friction'
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'Uncompromising quality in everything we build'
    }
  ];

   useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(
          isDeleting
              ? fullText.substring(0, displayText.length - 1)
              : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);


  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-500`}>
      <Header />

      {/* Hero Section with Collaborative Vision */}
      <section className="relative pt-32 pb-32 overflow-hidden min-h-screen flex items-center">
      <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/20220701_095229.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-8">
            <div className="space-y-4">
              <span className={`inline-flex px-4 py-2 text-sm font-semibold tracking-widest uppercase rounded-full ${theme.accentBg} text-white shadow-lg`}>
                Xhub: The Ennovating Hub
              </span>
              <h1 className={`text-6xl md:text-7xl lg:text-5xl font-extrabold leading-tight ${theme.text} drop-shadow-2xl`}>
                A Hub for {displayText}
                <span className="inline-block w-1 h-8 md:h-12 bg-[#9DA7D0] ml-1 animate-pulse"></span>

              </h1>

            </div>
            
            <p className={`text-xl md:text-2xl ${theme.textMuted} max-w-3xl leading-relaxed drop-shadow-lg font-light`}>
              Xhub is where <span className="font-bold">talented developers, ingenious minds,</span> and <span className="font-bold">visionary teams</span> come together to collaborate, innovate, and <span className="font-bold">build the next big thing.</span>
            </p>
            
            {/* <div className="pt-8">
              <p className={`text-lg ${theme.textMuted} max-w-2xl`}>
                We provide the platform, infrastructure, and community for forward-thinking teams to turn ambitious ideas into world-changing products.
              </p>
            </div> */}

            {/* <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className={`px-8 py-4 rounded-lg ${theme.accentBg} text-white font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all text-lg`}>
                Join the Hub
              </button>
              <button className={`px-8 py-4 rounded-lg border ${theme.border} ${theme.text} font-semibold hover:${theme.bgAlt} transition-all text-lg`}>
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      {/* <section className={`py-24 ${theme.bgAlt} transition-colors duration-500 relative overflow-hidden`}>
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-color, rgb(59, 130, 246))' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-bold ${theme.text} mb-6`}>What Drives Xhub</h2>
            <p className={`${theme.textMuted} text-lg max-w-2xl mx-auto`}>
              Six pillars of excellence that power our community
            </p>
            <div className={`w-24 h-1 ${theme.accentBg} mx-auto mt-8 rounded-full shadow-lg shadow-blue-500/50`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`${theme.bgCard} rounded-2xl p-8 border ${theme.border} hover:shadow-2xl transition-all duration-300 group hover:border-blue-500/50 hover:-translate-y-2`}
                >
                  <Icon className={`w-12 h-12 ${theme.accent} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className={`text-2xl font-bold mb-3 ${theme.text}`}>{value.title}</h3>
                  <p className={theme.textMuted}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Vision Section */}
      {/* <section className={`py-24 relative overflow-hidden`}>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className={`text-5xl md:text-6xl font-bold ${theme.text}`}>
              More Than a Platform
            </h2>
            
            <p className={`text-xl ${theme.textMuted} leading-relaxed`}>
              Xhub is a community-driven ecosystem where collaboration transforms ideas into innovation. We believe the best products come from brilliant minds working together with purpose.
            </p>

            <div className={`${theme.bgCard} border ${theme.border} rounded-2xl p-12 mt-12`}>
              <p className={`text-2xl md:text-3xl font-bold ${theme.text} leading-relaxed`}>
                "At Xhub, we're not just building software—we're building the <span className={`bg-gradient-to-r ${theme.accentBg === 'bg-blue-500' ? 'from-blue-400 to-cyan-400' : 'from-purple-400 to-pink-400'} bg-clip-text text-transparent`}>future together.</span>"
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className={`py-24 ${theme.bgCard} rounded-3xl mx-6 md:mx-0 relative overflow-hidden border ${theme.border}`}>
        <div className="absolute inset-0 opacity-5 rounded-3xl" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgb(59, 130, 246) 0%, transparent 70%)' }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className={`text-5xl md:text-6xl font-bold ${theme.text} mb-6`}>Ready to Build Something Great?</h2>
          <p className={`${theme.textMuted} text-xl mb-10 max-w-3xl mx-auto`}>
            Join a community of genius minds and visionary teams. Access world-class tools, collaborate with the best, and create the next big thing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-lg ${theme.accentBg} text-white font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all text-lg`}>
              Get Started Today
            </button>
            <button className={`px-8 py-4 rounded-lg border ${theme.border} ${theme.text} font-semibold hover:${theme.bgAlt} transition-all text-lg`}>
              Contact Sales
            </button>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
}

export default function Xhub() {
  return (
    <ThemeProvider>
      <XhubContent />
    </ThemeProvider>
  );
}
