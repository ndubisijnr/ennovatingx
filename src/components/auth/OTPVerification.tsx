import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../ui/Button';
import { Mail } from 'lucide-react';

interface OTPVerificationProps {
  email: string;
  onVerify: (otp: string) => void;
  onResend: () => void;
}

export default function OTPVerification({ email, onVerify, onResend }: OTPVerificationProps) {
  const { theme } = useTheme();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all filled
    if (newOtp.every(digit => digit) && index === 5) {
      handleVerify(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    if (pastedData.length === 6) {
      handleVerify(pastedData);
    }
  };

  const handleVerify = async (code: string) => {
    setIsVerifying(true);
    // Simulate API call
    setTimeout(() => {
      onVerify(code);
      setIsVerifying(false);
    }, 1000);
  };

  const handleResendClick = () => {
    if (!canResend) return;
    setCanResend(false);
    setCountdown(60);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    onResend();
  };

  return (
    <div className={`min-h-screen ${theme.bg} flex items-center justify-center px-4`}>
      <div className={`max-w-md w-full ${theme.bgCard} rounded-2xl shadow-2xl p-8 md:p-12 transition-colors duration-500`}>
        {/* Icon */}
        <div className="text-center mb-8">
          <div className={`w-20 h-20 mx-auto mb-4 ${theme.accentBg} rounded-full flex items-center justify-center`}>
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className={`text-3xl font-bold ${theme.text} mb-2`}>
            Check Your Email
          </h1>
          <p className={`${theme.textMuted}`}>
            We've sent a verification code to
          </p>
          <p className={`${theme.accent} font-medium mt-1`}>
            {email}
          </p>
        </div>

        {/* OTP Input */}
        <div className="mb-8">
          <label className={`block text-sm font-medium ${theme.text} mb-4 text-center`}>
            Enter Verification Code
          </label>
          <div className="flex justify-center gap-2 md:gap-3" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold rounded-lg ${theme.bgAlt} ${theme.text} border-2 ${
                  digit ? 'border-[#9DA7D0]' : theme.border
                } focus:outline-none focus:ring-2 focus:ring-[#9DA7D0] transition-all duration-300`}
                disabled={isVerifying}
              />
            ))}
          </div>
        </div>

        {/* Verify Button */}
        <Button
          onClick={() => handleVerify(otp.join(''))}
          variant="primary"
          size="lg"
          className="w-full mb-4"
          disabled={isVerifying || otp.some(digit => !digit)}
        >
          {isVerifying ? 'Verifying...' : 'Verify Code'}
        </Button>

        {/* Resend */}
        <div className="text-center">
          <p className={`text-sm ${theme.textMuted} mb-2`}>
            Didn't receive the code?
          </p>
          {canResend ? (
            <button
              onClick={handleResendClick}
              className={`text-sm ${theme.accent} hover:underline font-medium`}
            >
              Resend Code
            </button>
          ) : (
            <p className={`text-sm ${theme.textMuted}`}>
              Resend in {countdown}s
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
