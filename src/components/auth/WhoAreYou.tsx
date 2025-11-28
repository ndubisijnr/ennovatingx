import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../ui/Button';

interface WhoAreYouProps {
  onSubmit: (name: string, email: string) => void;
}

export default function WhoAreYou({ onSubmit }: WhoAreYouProps) {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSubmit(name, email);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className={`min-h-screen ${theme.bg} flex items-center justify-center px-4`}>
      <div className={`max-w-md w-full ${theme.bgCard} rounded-2xl shadow-2xl p-8 md:p-12 transition-colors duration-500`}>
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              className="w-full h-full object-contain"
              src="/logo.svg"
              alt="EnnovatingX Logo"
            />
          </div>
          <h1 className={`text-3xl font-bold ${theme.text} mb-2`}>
            Who are you?
          </h1>
          <p className={`${theme.textMuted}`}>
            Enter your details to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium ${theme.text} mb-2`}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg ${theme.bgAlt} ${theme.text} border ${theme.border} focus:outline-none focus:ring-2 focus:ring-[#9DA7D0] transition-all duration-300`}
              placeholder="Enter your full name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${theme.text} mb-2`}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg ${theme.bgAlt} ${theme.text} border ${theme.border} focus:outline-none focus:ring-2 focus:ring-[#9DA7D0] transition-all duration-300`}
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting || !name.trim() || !email.trim()}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Continue'
            )}
          </Button>
        </form>

        <p className={`text-center mt-6 text-sm ${theme.textMuted}`}>
          We'll send a verification code to your email
        </p>
      </div>
    </div>
  );
}
