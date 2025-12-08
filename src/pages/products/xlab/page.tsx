import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '../../../contexts/ThemeContext';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Zap, Code, Microscope, Users, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../../home/page';
import ContactInfoItem from '../../../components/ui/ContactInfoItem';
import { MapPin, Mail, Phone } from 'lucide-react';


function XlabContent() {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const researchShowcase = [
    {
      title: 'Lenz Law Exploration',
      description: 'Demonstrating electromagnetic induction principles with real-world experiments.',
      media: '/IMG_2770.JPG',
      type: 'image' as const
    },
    {
      title: 'Magnetic Field Dynamics',
      description: 'Live experiments showing magnetic field interactions and levitation forces.',
      media: '/239680_small.mp4',
      type: 'video' as const
    },
    {
      title: 'The Meissner Effect',
      description: 'Superconductor expelling magnetic fields - the foundation of MAGLEV technology.',
      media: '/IMG_2752.JPG',
      type: 'image' as const
    },
    {
      title: 'Advanced Prototyping',
      description: 'Cutting-edge instrumentation and testing environments for breakthrough research.',
      media: '/Inst_0001.jpeg',
      type: 'image' as const
    }
  ];

  const features = [
    {
      icon: Microscope,
      title: 'Advanced Research',
      description: 'Deep exploration into MAGLEV, superconductivity, AI, and robotics with cutting-edge methodologies.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke solutions tailored to your unique challenges. From prototypes to production systems.'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick iteration cycles to test ideas and bring concepts to life faster than traditional methods.'
    },
    {
      icon: Users,
      title: 'Expert Collaboration',
      description: 'Work with our team of engineers, researchers, and innovators across multiple domains.'
    }
  ];

  const contentSections = [
      {
        title: "We are ENX(ATXLAB)",
        content: [
          "We are not something you come across every day. We exist to make heads turn. At the end of the day; this is what people will be talking about.",
          "We are ENX(ATXLAB) and we provide magnetic levitation technology to businesses, agencies, designers and tinkers.",
          "ENX(ATXLAB) is a tech lab focused on engineering revolutionary solutions across MAGLEV, and future-driven research. We combine imagination, computation, and raw innovation to shape what comes after what's possible."
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
    <div className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-500`}>
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-black via-slate-900 to-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/8579-211655655_small.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className={`inline-flex px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full ${theme.accentBg} text-white shadow-lg`}>
              Research & Development Lab
            </span>
            <h1 className={`text-6xl md:text-7xl font-extrabold mt-6 leading-tight ${theme.text} drop-shadow-2xl`}>
              Xlab: Where Ideas Become <span className={`bg-gradient-to-r ${theme.accentBg === 'bg-blue-500' ? 'from-blue-400 to-cyan-400' : 'from-purple-400 to-pink-400'} bg-clip-text text-transparent`}>Reality</span>
            </h1>
            <p className={`${theme.textMuted} text-xl mt-8 max-w-2xl leading-relaxed drop-shadow-lg`}>
              Our dedicated research and development facility focused on breakthrough innovations across MAGLEV, AI, robotics, and advanced systems.
            </p>
            {/* <div className="mt-10 flex gap-4">
              <button className={`px-8 py-3 rounded-lg ${theme.accentBg} text-white font-semibold hover:opacity-90 transition-all flex items-center gap-2`}>
                Start a Project <ArrowRight className="w-4 h-4" />
              </button>
              <button className={`px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-all`}>
                View Case Studies
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Research Showcase Gallery */}
      <section className={`py-20 ${theme.bgAlt} transition-colors duration-500 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-80 h-80 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-color, rgb(59, 130, 246))' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.text}`}>Dive Into Our Research And Development History</h2>
            <p className={`${theme.textMuted} mt-4 text-lg`}>Live experiments and breakthroughs from our labs</p>
            <div className={`w-24 h-1 ${theme.accentBg} mx-auto mt-6 rounded-full shadow-lg shadow-blue-500/50`}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchShowcase.map((item, index) => (
              <div
                key={index}
                className={`${theme.bgCard} rounded-2xl overflow-hidden border ${theme.border} hover:shadow-2xl transition-all duration-300 group hover:border-blue-500/50 hover:-translate-y-2`}
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-black to-slate-900">
                  {item.type === 'image' ? (
                    <img
                      src={item.media}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={item.media}
                        loop
                        muted
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}
                </div>
                <div className="p-6 bg-gradient-to-t from-black/20 to-transparent">
                  <h3 className={`text-2xl font-bold mb-2 ${theme.text}`}>{item.title}</h3>
                  <p className={`${theme.textMuted} text-sm leading-relaxed`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Research Breakthrough (2017) */}
      <section className={`py-16 md:py-20 ${theme.bgCard} rounded-3xl mx-6 md:mx-0 transition-colors duration-500 relative overflow-hidden border ${theme.border}`}>
        <div className="absolute inset-0 opacity-5 rounded-3xl" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgb(59, 130, 246) 0%, transparent 50%)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-14 space-y-3">
            <span className={`inline-flex px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full ${theme.accentBg} text-white shadow-lg`}>
              Past Research Breakthrough · 2017
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.text}`}>MAGLEV in Motion</h2>
            <p className={`${theme.textMuted} mt-4 text-lg max-w-3xl mx-auto`}>
              A look back at our 2017 electromagnetic suspension milestone—demonstrating the principles that power our next-generation transport systems.
            </p>
          </div>

          <div className={`relative w-full pt-[56.25%] rounded-2xl overflow-hidden border ${theme.border} shadow-2xl bg-black hover:shadow-blue-500/30 transition-all duration-500`}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/hy8nV9xNalM?rel=0&modestbranding=1&playsinline=1"
              title="MAGLEV Demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Past Research Breakthrough (2022) */}
      <section className={`py-16 md:py-20 ${theme.bgAlt} rounded-3xl mx-6 md:mx-0 transition-colors duration-500 relative overflow-hidden border ${theme.border}`}>
        <div className="absolute inset-0 opacity-5 rounded-3xl" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgb(34, 197, 94) 0%, transparent 50%)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-14 space-y-3">
            <span className={`inline-flex px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full ${theme.accentBg} text-white shadow-lg`}>
              Past Research Breakthrough · 2022
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.text}`}>Electromagnetic Magnetic Suspension & Levitation</h2>
            <p className={`${theme.textMuted} mt-4 text-lg max-w-3xl mx-auto`}>
              Five years later, our advanced demonstrations of electromagnetic suspension and levitation technology reached new heights. Watch our 2022 breakthrough in action.
            </p>
          </div>

          <div className={`relative w-full pt-[56.25%] rounded-2xl overflow-hidden border ${theme.border} shadow-2xl bg-black hover:shadow-emerald-500/30 transition-all duration-500`}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/TTC9rK_SAiQ?rel=0&modestbranding=1&playsinline=1"
              title="Electromagnetic Magnetic Suspension & Levitation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

        {/* ATXLAB Section */}
      {/* <AnimatedSection delay={200}>
      <section className={`py-24 transition-colors duration-500 relative overflow-hidden`}>
        <video
          src='http://ennovatingx.com.s3-website-us-east-1.amazonaws.com/20220701_095229.mp4'
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
            <h2 className="text-4xl font-bold mt-2 mb-6 text-white">We Can Make It Float Too.</h2>
            <p className={`text-white mb-8 transition-colors duration-500 max-w-sm min-w-sm`}>
              We Research, Design, Build, Test, And Prototype Levitating Technology. Just Think About It And We Would Make It Levitate/Suspend.
            </p>
          </div>
          <div className="relative h-[500px]"></div>
        </div>
      </section>
      </AnimatedSection> */}

      {/* MAGLEV Information Section */}
      <AnimatedSection delay={300}>
      <section className={`py-24 ${theme.bg} transition-colors duration-500 relative overflow-hidden`}>
        <div className="container mx-auto px-6 gap-16 items-center relative z-10">
          <div className='text-center'>
            <span className={`${theme.accent} font-semibold tracking-widest transition-colors duration-500`}>
              XLAB
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

      {/* Interactive MAGLEV Demo Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Live MAGLEV Demonstrations</h2>
              <p className={`${theme.textMuted} text-lg mb-6`}>
                Witness the power of electromagnetic suspension and levitation technology in real-time experiments.
              </p>
              <div className="space-y-4">
                {['Electromagnetic Suspension (EMS)', 'Electrodynamic Suspension (EDS)', 'Superconductor Applications', 'Magnetic Field Control'].map((tech, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 rounded-lg ${theme.bgAlt}`}>
                    <Zap className={`w-5 h-5 ${theme.accent} flex-shrink-0 mt-1`} />
                    <span className="text-lg font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative rounded-2xl overflow-hidden border ${theme.border} shadow-2xl`}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/304180_small.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section> */}

      {/* Capabilities Section */}
      {/* <section className={`py-20 ${theme.bgAlt} transition-colors duration-500`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Capabilities</h2>
            <div className={`w-24 h-1 ${theme.accentBg} mx-auto mt-4`}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${theme.bgCard} rounded-2xl p-8 border ${theme.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  <Icon className={`w-12 h-12 ${theme.accentBg === 'bg-blue-500' ? 'text-blue-500' : theme.accent} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className={theme.textMuted}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Research Focus with Parallax Effect */}
      {/* <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/307361_small.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Focused Research Areas</h2>
            <p className={`${theme.textMuted} text-lg mb-12`}>
              Pushing the boundaries of physics, materials science, and computational intelligence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Magnetic Levitation (MAGLEV)', 'Room-Temperature Superconductivity', 'AI & Machine Learning', 'Robotics & Automation', 'Advanced Materials', 'Quantum Computing'].map((area, i) => (
                <div key={i} className={`${theme.bgCard} p-6 rounded-xl border ${theme.border} backdrop-blur-sm`}>
                  <Zap className={`w-6 h-6 ${theme.accent} mb-2`} />
                  <span className="text-lg font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className={`py-20 ${theme.bgCard} rounded-3xl mx-6 md:mx-0`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
          <p className={`${theme.textMuted} text-xl mb-8 max-w-2xl mx-auto`}>
            Let's collaborate on your next breakthrough project. Connect with our team to explore possibilities.
          </p>
          <button className={`px-8 py-4 rounded-lg ${theme.accentBg} text-white font-semibold hover:opacity-90 transition-all text-lg`}>
            Schedule a Consultation
          </button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default function Xlab() {
  return (
    <ThemeProvider>
      <XlabContent />
    </ThemeProvider>
  );
}
