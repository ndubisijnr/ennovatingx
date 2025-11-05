
export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'MagLev Transit System',
      category: 'Transportation',
      status: 'In Development',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20magnetic%20levitation%20train%20system%20with%20sleek%20design%2C%20modern%20transportation%20technology%2C%20clean%20white%20background%2C%20high-tech%20engineering%2C%20superconducting%20rails%2C%20advanced%20transit%20infrastructure&width=400&height=300&seq=maglev-transit&orientation=landscape',
      description: 'Revolutionary magnetic levitation transportation system using superconducting technology for high-speed, sustainable transit.',
      progress: 75
    },
    {
      id: 2,
      title: 'Levitating Smart Display',
      category: 'Consumer Electronics',
      status: 'Prototype Ready',
      image: 'https://readdy.ai/api/search-image?query=floating%20holographic%20display%20screen%20levitating%20in%20air%2C%20futuristic%20consumer%20electronics%2C%20magnetic%20levitation%20technology%2C%20clean%20modern%20background%2C%20smart%20device%20innovation%2C%20transparent%20display&width=400&height=300&seq=levitating-display&orientation=landscape',
      description: 'Next-generation consumer display technology featuring magnetic levitation and AI-powered interface.',
      progress: 90
    },
    {
      id: 3,
      title: 'Superconducting Energy Grid',
      category: 'Energy Systems',
      status: 'Research Phase',
      image: 'https://readdy.ai/api/search-image?query=advanced%20superconducting%20power%20grid%20infrastructure%2C%20energy%20transmission%20lines%2C%20electrical%20engineering%2C%20sustainable%20energy%20technology%2C%20clean%20industrial%20background%2C%20power%20distribution%20network&width=400&height=300&seq=energy-grid&orientation=landscape',
      description: 'Lossless energy transmission system using superconducting materials for maximum efficiency.',
      progress: 45
    },
    {
      id: 4,
      title: 'AI-Powered Automation Hub',
      category: 'Industrial Automation',
      status: 'Testing Phase',
      image: 'https://readdy.ai/api/search-image?query=intelligent%20industrial%20automation%20system%2C%20robotic%20manufacturing%2C%20AI-powered%20machinery%2C%20modern%20factory%20environment%2C%20clean%20technological%20background%2C%20smart%20manufacturing%20equipment&width=400&height=300&seq=automation-hub&orientation=landscape',
      description: 'Intelligent automation platform combining AI algorithms with superconducting precision control.',
      progress: 65
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Prototype Ready': return 'bg-green-100 text-green-800';
      case 'In Development': return 'bg-blue-100 text-blue-800';
      case 'Testing Phase': return 'bg-yellow-100 text-yellow-800';
      case 'Research Phase': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & Prototypes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge projects that showcase the future of superconductivity 
            and intelligent technology across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                  <span className="text-sm text-gray-500">{project.progress}%</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="w-full bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/projects"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <span>View All Projects</span>
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-arrow-right-line"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
