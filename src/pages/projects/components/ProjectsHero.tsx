
export default function ProjectsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Projects & 
            <span className="text-blue-600"> Prototypes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover our groundbreaking innovations in superconductivity, magnetic technology, 
            and AI-powered solutions that are shaping the future across multiple industries.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-blue-600 font-medium">Transportation</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-green-600 font-medium">Energy Systems</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-purple-600 font-medium">Consumer Electronics</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-orange-600 font-medium">Industrial Automation</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200/30 rounded-full blur-xl"></div>
    </section>
  );
}
