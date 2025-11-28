import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface Theme {
  bg: string;
  bgAlt: string;
  bgCard: string;
  text: string;
  textMuted: string;
  accent: string;
  accentBg: string;
  border: string;
  header: string;
  footer: string;
}

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

const themes = {
  dark: {
    bg: 'bg-gray-900',
    bgAlt: 'bg-gray-800',
    bgCard: 'bg-gray-900',
    text: 'text-white',
    textMuted: 'text-gray-400',
    accent: 'text-[#9DA7D0]',
    accentBg: 'bg-[#9DA7D0]',
    border: 'border-gray-800',
    header: 'bg-black/30',
    footer: 'bg-black'
  },
  light: {
    bg: 'bg-gray-50',
    bgAlt: 'bg-white',
    bgCard: 'bg-white',
    text: 'text-gray-900',
    textMuted: 'text-gray-600',
    accent: 'text-[#6B7AA1]',
    accentBg: 'bg-[#6B7AA1]',
    border: 'border-gray-200',
    header: 'bg-white/80',
    footer: 'bg-gray-100'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
