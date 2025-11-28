interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export default function IconCard({ 
  icon, 
  title, 
  description, 
  features,
  className = '' 
}: IconCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-lg mb-6">
        <i className={`${icon} text-3xl text-white`}></i>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
