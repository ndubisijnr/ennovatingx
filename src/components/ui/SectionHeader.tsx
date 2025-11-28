interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  badge, 
  centered = true,
  className = '' 
}: SectionHeaderProps) {
  const alignment = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`${alignment} mb-16 ${className}`}>
      {badge && (
        <div className={`inline-block bg-[#61C1C0] rounded-lg px-4 py-2 mb-4 text-[#0F1B1A] font-medium`}>
          {badge}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
