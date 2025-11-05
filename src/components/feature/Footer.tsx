
export default function Footer() {
  const footerSections = [
    {
      title: 'Services',
      links: [
        'Superconductivity Solutions',
        'Software Engineering',
        'AI & Machine Learning',
        'Consulting Services'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Transportation',
        'Energy & Utilities',
        'Healthcare',
        'Industrial Automation'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Research & Development',
        'Careers',
        'News & Updates'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://static.readdy.ai/image/e89de37d2d8bc4082d180247e1c4691b/66b02e37b5d312dea716d677f4477e9d.png" 
                alt="EnnovatingX Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">EnnovatingX</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevating Innovation through Superconductivity and Intelligent Technology. 
              Transforming industries with sustainable, scalable solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-github-fill text-white"></i>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 EnnovatingX. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">
              Terms of Service
            </a>            
          </div>
        </div>
      </div>
    </footer>
  );
}
