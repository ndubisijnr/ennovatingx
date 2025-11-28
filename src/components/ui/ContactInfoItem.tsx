import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  content: string | ReactNode;
  className?: string;
}

export default function ContactInfoItem({ 
  icon: Icon, 
  title, 
  content,
  className = '' 
}: ContactInfoItemProps) {
  return (
    <div className={`flex items-start space-x-4 w-full ${className}`}>
      <div className="bg-gray-900 dark:bg-gray-800 p-3 rounded-full mt-1 transition-colors duration-500">
        <Icon className="text-[#9DA7D0] w-5 h-5 transition-colors duration-500" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <div className="text-gray-600 dark:text-gray-400 transition-colors duration-500">
          {content}
        </div>
      </div>
    </div>
  );
}
