
export default function ProjectStats() {
  const stats = [
    {
      number: '24+',
      label: 'Active Projects',
      icon: 'ri-rocket-line',
      color: 'text-blue-600'
    },
    {
      number: '8',
      label: 'Prototypes Ready',
      icon: 'ri-settings-3-line',
      color: 'text-green-600'
    },
    {
      number: '15+',
      label: 'Research Papers',
      icon: 'ri-file-text-line',
      color: 'text-purple-600'
    },
    {
      number: '6',
      label: 'Industry Partners',
      icon: 'ri-team-line',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl mx-auto mb-4`}>
                <i className={`${stat.icon} text-2xl ${stat.color}`}></i>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
