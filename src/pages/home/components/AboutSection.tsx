
export default function AboutSection() {
  const stats = [
    { number: '15+', label: 'Superconductivity Patents' },
    { number: '300+', label: 'Magnetic Systems Deployed' },
    { number: '50+', label: 'Industry Partners' },
    { number: '25+', label: 'R&D Breakthroughs' }
  ];

  const advantages = [
    {
      icon: 'ri-thunderstorms-line',
      title: 'Superconductivity Leadership',
      description: 'Industry-leading expertise in magnetic levitation, zero-resistance power systems, and electromagnetic innovations that define the future of technology.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Integrated Technology',
      description: 'Seamless integration of superconductivity hardware with intelligent software solutions for complete system optimization.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sustainable Innovation',
      description: 'Zero-loss energy systems and eco-conscious magnetic technologies with measurable environmental impact reduction.'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Research Network',
      description: 'Strategic partnerships with leading superconductivity research institutions and technology organizations worldwide.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About EnnovatingX
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            EnnovatingX is the world's leading superconductivity and magnetic technology company, 
            revolutionizing transportation, energy, and industrial systems through zero-resistance 
            electromagnetic solutions. Our breakthrough innovations in magnetic levitation and 
            superconducting systems are transforming how industries operate and consume energy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-gray-800 p-8 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-lg mb-6">
              <i className="ri-target-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To revolutionize global infrastructure through superconductivity and magnetic innovation, 
              delivering zero-loss energy systems, magnetic transportation, and electromagnetic solutions 
              that drive unprecedented efficiency and sustainability.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-lg mb-6">
              <i className="ri-eye-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the global standard for superconductivity applications, transforming 
              transportation through magnetic levitation, revolutionizing power grids with zero-loss 
              transmission, and creating the electromagnetic foundation for tomorrow's technology.
            </p>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose EnnovatingX</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <i className={`${advantage.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
