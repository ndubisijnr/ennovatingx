import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function SplashScreen({ onComplete, duration = 2000 }: SplashScreenProps) {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className={`fixed inset-0 ${theme.bg} flex items-center justify-center z-50 transition-opacity duration-500`}>
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 animate-pulse">
            <img
              className="w-full h-full object-contain"
              src="/logo.svg"
              alt="EnnovatingX Logo"
            />
          </div>
          <h1 className={`text-4xl font-bold tracking-wider ${theme.text}`}>
            ENNOVATINGX
          </h1>
          <p className={`${theme.textMuted} text-lg`}>
            Research & Innovation Platform
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className={`w-full h-1 ${theme.bgAlt} rounded-full overflow-hidden`}>
            <div
              className={`h-full ${theme.accentBg} transition-all duration-300 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
