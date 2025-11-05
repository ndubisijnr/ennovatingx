
export default function SolutionsSection() {
  const industries = [
    {
      icon: 'ri-train-line',
      title: 'Transportation & Logistics',
      description: 'High-speed maglev systems, superconducting rail networks, and magnetic cargo handling solutions revolutionizing how people and goods move.',
      image: 'https://readdy.ai/api/search-image?query=High-speed%20magnetic%20levitation%20train%20system%2C%20futuristic%20maglev%20transportation%2C%20superconducting%20rail%20technology%2C%20sleek%20modern%20train%20design%2C%20electromagnetic%20propulsion%2C%20clean%20energy%20transport%2C%20advanced%20railway%20infrastructure%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=transport&orientation=landscape',
      technologies: ['Maglev Transportation', 'Magnetic Cargo Systems', 'Superconducting Rails']
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Energy & Utilities',
      description: 'Zero-loss superconducting power grids, magnetic energy storage, and electromagnetic power generation systems for sustainable energy infrastructure.',
      image: 'https://readdy.ai/api/search-image?query=Superconducting%20power%20grid%20facility%2C%20electromagnetic%20energy%20transmission%20lines%2C%20zero-loss%20power%20systems%2C%20advanced%20electrical%20infrastructure%2C%20magnetic%20energy%20storage%20units%2C%20futuristic%20power%20plant%2C%20blue%20energy%20fields%2C%20sustainable%20technology&width=600&height=400&seq=energy&orientation=landscape',
      technologies: ['Superconducting Grids', 'Magnetic Storage', 'Zero-Loss Transmission']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Consumer Electronics',
      description: 'Levitating displays, magnetic charging systems, and superconducting components for next-generation consumer devices and IoT applications.',
      image: 'https://readdy.ai/api/search-image?query=Levitating%20consumer%20electronics%2C%20floating%20smartphone%20displays%2C%20magnetic%20charging%20stations%2C%20superconducting%20gadgets%2C%20futuristic%20consumer%20devices%2C%20wireless%20magnetic%20technology%2C%20modern%20tech%20products%2C%20sleek%20design&width=600&height=400&seq=consumer&orientation=landscape',
      technologies: ['Levitating Displays', 'Magnetic Charging', 'Superconducting Components']
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Healthcare & Medical',
      description: 'Advanced MRI systems with superconducting magnets, magnetic drug delivery, and electromagnetic medical devices for precision healthcare.',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20medical%20MRI%20machine%20with%20superconducting%20magnets%2C%20futuristic%20healthcare%20technology%2C%20electromagnetic%20medical%20devices%2C%20precision%20medical%20equipment%2C%20clean%20hospital%20environment%2C%20blue%20medical%20lighting%2C%20high-tech%20medical%20facility&width=600&height=400&seq=healthcare&orientation=landscape',
      technologies: ['Superconducting MRI', 'Magnetic Drug Delivery', 'Electromagnetic Therapy']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Industrial Automation',
      description: 'Magnetic levitation manufacturing, superconducting motors, and electromagnetic precision handling systems for advanced industrial processes.',
      image: 'https://readdy.ai/api/search-image?query=Magnetic%20levitation%20industrial%20automation%2C%20superconducting%20manufacturing%20equipment%2C%20electromagnetic%20precision%20handling%20systems%2C%20futuristic%20factory%20floor%2C%20advanced%20robotics%2C%20magnetic%20conveyor%20systems%2C%20industrial%20technology&width=600&height=400&seq=industrial&orientation=landscape',
      technologies: ['Magnetic Manufacturing', 'Superconducting Motors', 'Electromagnetic Handling']
    },
    {
      icon: 'ri-shield-line',
      title: 'Defense & Aerospace',
      description: 'Electromagnetic propulsion systems, superconducting defense technologies, and magnetic shielding solutions for critical applications.',
      image: 'https://readdy.ai/api/search-image?query=Electromagnetic%20aerospace%20propulsion%20system%2C%20superconducting%20defense%20technology%2C%20magnetic%20shielding%20equipment%2C%20advanced%20military%20technology%2C%20futuristic%20defense%20systems%2C%20electromagnetic%20field%20generators%2C%20high-tech%20aerospace%20facility&width=600&height=400&seq=defense&orientation=landscape',
      technologies: ['Electromagnetic Propulsion', 'Magnetic Shielding', 'Superconducting Defense']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Superconductivity Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our magnetic and superconducting technologies are transforming every major industry, 
            delivering unprecedented efficiency, sustainability, and performance improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg mb-4">
                  <i className={`${industry.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{industry.description}</p>
                <div className="space-y-2">
                  {industry.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h3>
            <p className="text-blue-100 mb-6">
              Discover how our superconductivity solutions can revolutionize your operations
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
