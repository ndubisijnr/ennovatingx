import { useState } from 'react';
import { ChevronDown, ShoppingCart, Menu, Moon, Sun, LogIn } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

interface NavSectionProps {
  title: string;
  items: string[] | {page:string, link:string}[];
}

function NavSection({ title, items, }: NavSectionProps) {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-2">
      <h3 className={`text-xs font-semibold uppercase tracking-wider ${theme.textMuted} mb-3`}>
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item, index) => {
          const isObject = typeof item === 'object';
          const linkTo = isObject ? item.link : '#';
          const displayText = isObject ? item.page : item;
          
          return (
            <Link 
              to={linkTo}
              key={index}
              className={`block w-full text-left py-2 text-sm ${theme.text} hover:${theme.bgAlt} rounded-md transition-colors duration-200 cursor-pointer`}
            >
              {displayText}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 w-full ${theme.header} backdrop-blur-md z-50 transition-colors duration-500`}>
      <nav className="container mx-auto px-6 py-4 flex gap-5 justify-between items-center">
      <Link to="/">  <div className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <img
              className="w-full h-full object-contain"
              src="/logo.svg"
              alt="futuristic circular tech logo, ENX initials, glowing blue and purple neon lines on a dark background"
            />
          </div>
          <span className="text-xl font-bold tracking-wider">ENNOVATINGX</span>
        </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 w-full">
          <div className={`hover:${theme.accent} w-1 border border-black dark:border-white h-6 bg-black dark:bg-white transition-colors duration-300 cursor-pointer font-extrabold`}></div>
          <div className="group">
            <button className={`hover:${theme.accent} transition-colors duration-300 flex items-center`}>
              More <ChevronDown className="ml-2 w-3 h-3" />
            </button>
            <div className={`absolute top-full w-full left-0 ${theme.bgCard} rounded-lg shadow-xl w-48 p-2 opacity-0 invisible group-hover:opacity-80 group-hover:visible transition-all duration-300`}>
              <div className="w-full mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-start justify-center md:col-span-1">
                    <div className="w-48 h-48">
                      <DotLottieReact
                        src="https://lottie.host/159397d6-164c-4a40-b321-20082ac9efc1/Xsnn0gyoVb.lottie"
                        loop
                        autoplay
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                      <NavSection
                        title="MAGLEV Research"
                        items={['Super Conductors', 'Electro Magnetic Suspension', 'Electro Dynamic Suspension']}
                      />
                      <NavSection
                        title="Products"
                        items={[
                          {page:"Xlab (Research & Development)", link:"/products/xlab"},
                          {page:"Xhub (Software as a Service)", link:"/products/xhub"}
                        ]}
                      />
                      {/* <NavSection
                        title="Services"
                        items={['Software', 'Cloud', 'Research And Development(R&D)']}
                      /> */}
                      <NavSection
                        title="Company"
                        items={[
                          {page:"Founder's Letter", link:"/founders-note"},
                          {page:"Research Papers", link:"/research"}
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* <button
            onClick={() => navigate('/auth')}
            className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg ${theme.accentBg} text-white hover:opacity-90 transition-opacity duration-300`}
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </button> */}
          <button
            onClick={toggleTheme}
            className={`${theme.textMuted} hover:${theme.text} transition-colors duration-300 cursor-pointer p-2 rounded-full hover:bg-gray-700/20`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <span className={`${theme.textMuted} hover:${theme.text} transition-colors duration-300 cursor-pointer`}>
            <ShoppingCart className="w-6 h-6" />
          </span>
          <button className="md:hidden text-xl" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {showMobileMenu && (
        <div className={`md:hidden ${theme.bgCard} border-t ${theme.border} max-h-[calc(100vh-80px)] overflow-y-auto`}>
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="w-32 h-32">
                  <DotLottieReact
                    src="https://lottie.host/159397d6-164c-4a40-b321-20082ac9efc1/Xsnn0gyoVb.lottie"
                    loop
                    autoplay
                  />
                </div>
              </div>

              <div className="space-y-6">
                <NavSection
                  title="MAGLEV Research"
                  items={['Super Conductors', 'Electro Magnetic Suspension', 'Electro Dynamic Suspension']}
                />
                <NavSection
                  title="Products"
                  items={[
                    {page:"Xlab (Research & Development)", link:"/products/xlab"},
                    {page:"Xhub (Software as a Service)", link:"/products/xhub"}
                  ]}
                />
                {/* <NavSection
                  title="Services"
                  items={['Software', 'Cloud', 'Research And Development(R&D)']}
                /> */}
                <NavSection
                  title="Company"
                  items={[
                    {page:"Founder's Letter", link:"/founders-note"},
                    {page:"Research Papers", link:"/research"}
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
