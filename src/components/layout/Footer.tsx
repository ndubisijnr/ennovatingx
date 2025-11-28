import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Documentation', 'Support']
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookie Policy']
    }
  ];

  return (
    <footer className={`${theme.footer} ${theme.textMuted} transition-colors duration-500`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full object-contain"
                  src="/logo.svg"
                  alt="futuristic circular tech logo, ENX initials, glowing blue and purple neon lines on a dark background"
                />
              </div>
              <span className={`text-lg font-bold ${theme.text} transition-colors duration-500`}>
                ENNOVATINGX
              </span>
            </div>
            <p className="text-sm">Pioneering the future through innovation and technology.</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className={`font-semibold ${theme.text} mb-4 transition-colors duration-500`}>
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`hover:${theme.text} cursor-pointer transition-colors duration-300`}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`border-t ${theme.border} mt-8 pt-8 text-center text-sm transition-colors duration-500`}>
          <p>&copy; 2025 Ennovatingx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
