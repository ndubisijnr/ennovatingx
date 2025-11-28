import { useState, useEffect } from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import SplashScreen from '../../components/auth/SplashScreen';
import WhoAreYou from '../../components/auth/WhoAreYou';
import OTPVerification from '../../components/auth/OTPVerification';
import Dashboard from '../../components/dashboard/Dashboard';
import ResearchEditor from '../../components/editor/ResearchEditor';

type AuthStep = 'splash' | 'who-are-you' | 'otp' | 'dashboard' | 'editor';

interface UserData {
  name: string;
  email: string;
}

function AuthFlowContent() {
  const [currentStep, setCurrentStep] = useState<AuthStep>('splash');
  const [userData, setUserData] = useState<UserData>({ name: '', email: '' });
  const [currentArticleId, setCurrentArticleId] = useState<string | undefined>();

  // Check if user is already authenticated
  useEffect(() => {
    const savedUser = localStorage.getItem('enx_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserData(user);
      setCurrentStep('dashboard');
    }
  }, []);

  const handleSplashComplete = () => {
    setCurrentStep('who-are-you');
  };

  const handleNameSubmit = (name: string, email: string) => {
    setUserData({ name, email });
    // In a real app, send OTP to email here
    console.log('Sending OTP to:', email);
    setCurrentStep('otp');
  };

  const handleOTPVerify = (otp: string) => {
    console.log('Verifying OTP:', otp);
    // In a real app, verify OTP with backend
    
    // Save user to localStorage
    localStorage.setItem('enx_user', JSON.stringify(userData));
    
    // Move to dashboard
    setTimeout(() => {
      setCurrentStep('dashboard');
    }, 500);
  };

  const handleResendOTP = () => {
    console.log('Resending OTP to:', userData.email);
    // In a real app, resend OTP
  };

  const handleCreateNew = () => {
    setCurrentArticleId(undefined);
    setCurrentStep('editor');
  };

  const handleOpenArticle = (id: string) => {
    setCurrentArticleId(id);
    setCurrentStep('editor');
  };

  const handleSaveArticle = (title: string, content: string, status: 'draft' | 'published') => {
    console.log('Saving article:', { title, content, status, id: currentArticleId });
    // In a real app, save to backend
    
    // Return to dashboard
    setCurrentStep('dashboard');
  };

  const handleBackToDashboard = () => {
    setCurrentStep('dashboard');
    setCurrentArticleId(undefined);
  };

  return (
    <>
      {currentStep === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      
      {currentStep === 'who-are-you' && (
        <WhoAreYou onSubmit={handleNameSubmit} />
      )}
      
      {currentStep === 'otp' && (
        <OTPVerification
          email={userData.email}
          onVerify={handleOTPVerify}
          onResend={handleResendOTP}
        />
      )}
      
      {currentStep === 'dashboard' && (
        <Dashboard
          userName={userData.name.split(' ')[0]}
          onCreateNew={handleCreateNew}
          onOpenArticle={handleOpenArticle}
        />
      )}
      
      {currentStep === 'editor' && (
        <ResearchEditor
          articleId={currentArticleId}
          onSave={handleSaveArticle}
          onBack={handleBackToDashboard}
        />
      )}
    </>
  );
}

export default function AuthFlow() {
  return (
    <ThemeProvider>
      <AuthFlowContent />
    </ThemeProvider>
  );
}
