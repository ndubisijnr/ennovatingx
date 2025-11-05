
import { useState } from 'react';

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Transportation', 'Energy Systems', 'Consumer Electronics', 'Industrial Automation', 'Healthcare', 'Research'];

  const projects = [
    {
      id: 1,
      title: 'MagLev Transit System',
      category: 'Transportation',
      status: 'In Development',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20magnetic%20levitation%20train%20system%20with%20sleek%20design%2C%20modern%20transportation%20technology%2C%20clean%20white%20background%2C%20high-tech%20engineering%2C%20superconducting%20rails%2C%20advanced%20transit%20infrastructure&width=600&height=400&seq=maglev-transit-detail&orientation=landscape',
      description: 'Revolutionary magnetic levitation transportation system using superconducting technology for high-speed, sustainable transit.',
      fullDescription: 'Our MagLev Transit System represents a breakthrough in sustainable transportation technology. Using advanced superconducting materials, this system achieves frictionless movement, enabling speeds of up to 600 km/h while consuming 30% less energy than traditional high-speed rail. The system features automated control, predictive maintenance, and zero-emission operation.',
      progress: 75,
      timeline: '2024-2026',
      team: 'Transportation Engineering Team',
      technologies: ['Superconducting Magnets', 'AI Control Systems', 'Advanced Materials', 'Energy Recovery'],
      milestones: [
        { phase: 'Research & Design', status: 'Completed', date: '2023' },
        { phase: 'Prototype Development', status: 'In Progress', date: '2024' },
        { phase: 'Testing & Validation', status: 'Planned', date: '2025' },
        { phase: 'Commercial Deployment', status: 'Planned', date: '2026' }
      ]
    },
    {
      id: 2,
      title: 'Levitating Smart Display',
      category: 'Consumer Electronics',
      status: 'Prototype Ready',
      image: 'https://readdy.ai/api/search-image?query=floating%20holographic%20display%20screen%20levitating%20in%20air%2C%20futuristic%20consumer%20electronics%2C%20magnetic%20levitation%20technology%2C%20clean%20modern%20background%2C%20smart%20device%20innovation%2C%20transparent%20display&width=600&height=400&seq=levitating-display-detail&orientation=landscape',
      description: 'Next-generation consumer display technology featuring magnetic levitation and AI-powered interface.',
      fullDescription: 'The Levitating Smart Display combines magnetic levitation with cutting-edge display technology to create an immersive, floating interface. This revolutionary device uses superconducting elements to maintain stable levitation while providing 4K resolution, gesture control, and AI-powered content adaptation.',
      progress: 90,
      timeline: '2023-2024',
      team: 'Consumer Electronics Division',
      technologies: ['Magnetic Levitation', 'OLED Display', 'Gesture Recognition', 'AI Interface'],
      milestones: [
        { phase: 'Concept Development', status: 'Completed', date: '2023' },
        { phase: 'Prototype Creation', status: 'Completed', date: '2024' },
        { phase: 'User Testing', status: 'In Progress', date: '2024' },
        { phase: 'Market Launch', status: 'Planned', date: '2025' }
      ]
    },
    {
      id: 3,
      title: 'Superconducting Energy Grid',
      category: 'Energy Systems',
      status: 'Research Phase',
      image: 'https://readdy.ai/api/search-image?query=advanced%20superconducting%20power%20grid%20infrastructure%2C%20energy%20transmission%20lines%2C%20electrical%20engineering%2C%20sustainable%20energy%20technology%2C%20clean%20industrial%20background%2C%20power%20distribution%20network&width=600&height=400&seq=energy-grid-detail&orientation=landscape',
      description: 'Lossless energy transmission system using superconducting materials for maximum efficiency.',
      fullDescription: 'Our Superconducting Energy Grid project aims to revolutionize power transmission by eliminating energy losses through superconducting cables. This system can transmit electricity over long distances with near-zero resistance, reducing energy waste by up to 95% compared to traditional copper cables.',
      progress: 45,
      timeline: '2024-2027',
      team: 'Energy Systems Research Lab',
      technologies: ['High-Temperature Superconductors', 'Cryogenic Systems', 'Smart Grid Integration', 'Power Electronics'],
      milestones: [
        { phase: 'Material Research', status: 'In Progress', date: '2024' },
        { phase: 'Cable Development', status: 'Planned', date: '2025' },
        { phase: 'Grid Integration', status: 'Planned', date: '2026' },
        { phase: 'Commercial Rollout', status: 'Planned', date: '2027' }
      ]
    },
    {
      id: 4,
      title: 'AI-Powered Automation Hub',
      category: 'Industrial Automation',
      status: 'Testing Phase',
      image: 'https://readdy.ai/api/search-image?query=intelligent%20industrial%20automation%20system%2C%20robotic%20manufacturing%2C%20AI-powered%20machinery%2C%20modern%20factory%20environment%2C%20clean%20technological%20background%2C%20smart%20manufacturing%20equipment&width=600&height=400&seq=automation-hub-detail&orientation=landscape',
      description: 'Intelligent automation platform combining AI algorithms with superconducting precision control.',
      fullDescription: 'The AI-Powered Automation Hub integrates artificial intelligence with superconducting precision control systems to create the most advanced manufacturing automation platform. It features predictive maintenance, adaptive production optimization, and zero-defect quality control.',
      progress: 65,
      timeline: '2023-2025',
      team: 'Industrial Automation Team',
      technologies: ['Machine Learning', 'Superconducting Motors', 'Computer Vision', 'Predictive Analytics'],
      milestones: [
        { phase: 'AI Algorithm Development', status: 'Completed', date: '2023' },
        { phase: 'Hardware Integration', status: 'In Progress', date: '2024' },
        { phase: 'Factory Testing', status: 'In Progress', date: '2024' },
        { phase: 'Commercial Launch', status: 'Planned', date: '2025' }
      ]
    },
    {
      id: 5,
      title: 'Quantum Computing Interface',
      category: 'Research',
      status: 'Research Phase',
      image: 'https://readdy.ai/api/search-image?query=quantum%20computing%20system%20with%20superconducting%20qubits%2C%20advanced%20quantum%20processor%2C%20futuristic%20computing%20technology%2C%20clean%20laboratory%20environment%2C%20quantum%20mechanics%20visualization%2C%20high-tech%20research%20equipment&width=600&height=400&seq=quantum-interface&orientation=landscape',
      description: 'Advanced quantum computing interface using superconducting qubits for next-generation processing.',
      fullDescription: 'Our Quantum Computing Interface project focuses on developing stable superconducting qubits that can operate at higher temperatures while maintaining quantum coherence. This breakthrough could make quantum computing more accessible and practical for commercial applications.',
      progress: 30,
      timeline: '2024-2028',
      team: 'Quantum Research Division',
      technologies: ['Superconducting Qubits', 'Quantum Error Correction', 'Cryogenic Control', 'Quantum Algorithms'],
      milestones: [
        { phase: 'Theoretical Framework', status: 'Completed', date: '2024' },
        { phase: 'Qubit Development', status: 'In Progress', date: '2024-2025' },
        { phase: 'System Integration', status: 'Planned', date: '2026' },
        { phase: 'Commercial Prototype', status: 'Planned', date: '2028' }
      ]
    },
    {
      id: 6,
      title: 'Medical Imaging Enhancement',
      category: 'Healthcare',
      status: 'In Development',
      image: 'https://readdy.ai/api/search-image?query=advanced%20medical%20MRI%20machine%20with%20superconducting%20technology%2C%20modern%20healthcare%20equipment%2C%20hospital%20environment%2C%20medical%20imaging%20innovation%2C%20clean%20white%20background%2C%20precision%20medical%20devices&width=600&height=400&seq=medical-imaging&orientation=landscape',
      description: 'Enhanced MRI systems using advanced superconducting technology for superior imaging quality.',
      fullDescription: 'Our Medical Imaging Enhancement project develops next-generation MRI systems with improved superconducting magnets that provide higher resolution imaging while reducing scan times by 50%. This technology enables earlier disease detection and more precise treatment planning.',
      progress: 55,
      timeline: '2023-2025',
      team: 'Healthcare Technology Division',
      technologies: ['High-Field Superconducting Magnets', 'AI Image Processing', 'Advanced Coil Design', 'Patient Comfort Systems'],
      milestones: [
        { phase: 'Magnet Design', status: 'Completed', date: '2023' },
        { phase: 'Prototype Testing', status: 'In Progress', date: '2024' },
        { phase: 'Clinical Trials', status: 'Planned', date: '2025' },
        { phase: 'FDA Approval', status: 'Planned', date: '2025' }
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Prototype Ready': return 'bg-green-100 text-green-800';
      case 'In Development': return 'bg-blue-100 text-blue-800';
      case 'Testing Phase': return 'bg-yellow-100 text-yellow-800';
      case 'Research Phase': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMilestoneColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Planned': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Progress</span>
                  <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                </div>
                
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover object-top"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-600">{selectedProject.timeline} • {selectedProject.team}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{selectedProject.progress}%</div>
                    <div className="text-sm text-gray-500">Complete</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${selectedProject.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.fullDescription}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Timeline</h4>
                    <div className="space-y-4">
                      {selectedProject.milestones.map((milestone, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full ${getMilestoneColor(milestone.status)}`}></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900">{milestone.phase}</span>
                              <span className="text-sm text-gray-500">{milestone.date}</span>
                            </div>
                            <span className={`text-xs ${
                              milestone.status === 'Completed' ? 'text-green-600' :
                              milestone.status === 'In Progress' ? 'text-blue-600' : 'text-gray-500'
                            }`}>
                              {milestone.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
