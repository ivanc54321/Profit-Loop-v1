import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ExplainerSection } from './components/ExplainerSection';
import { SignupBanner } from './components/SignupBanner';
import { PlatformShowcase } from './components/PlatformShowcase';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { CalculatorModal } from './components/CalculatorModal';
import { VideoModal } from './components/VideoModal';
import { AuthModal } from './components/AuthModal';
import { OffersModal } from './components/OffersModal';
import { CookieModal } from './components/CookieModal';
import { BookmakerOffer } from './data/mockData';

export default function App() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calcInitialMode, setCalcInitialMode] = useState<'normal' | 'snr' | 'sr'>('snr');
  const [calcInitialStake, setCalcInitialStake] = useState<number>(50);

  const [videoOpen, setVideoOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'trial' | 'login'>('trial');
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  const [offersOpen, setOffersOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleOpenCalculator = (mode: 'normal' | 'snr' | 'sr' = 'snr', stake: number = 50) => {
    setCalcInitialMode(mode);
    setCalcInitialStake(stake);
    setCalculatorOpen(true);
  };

  const handleOpenTrial = (plan: string = 'Pro') => {
    setSelectedPlan(plan);
    setAuthMode('trial');
    setAuthOpen(true);
  };

  const handleOpenLogin = () => {
    setAuthMode('login');
    setAuthOpen(true);
  };

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setAuthMode('trial');
    setAuthOpen(true);
  };

  const handleAuthSuccess = (email: string) => {
    setUserEmail(email);
    showToast(`Welcome! Activated ${selectedPlan} trial for ${email}`);
  };

  const handleLogout = () => {
    setUserEmail(null);
    showToast('You have been logged out.');
  };

  const handleSelectOffer = (offer: BookmakerOffer) => {
    setOffersOpen(false);
    handleOpenCalculator('snr', parseFloat(offer.freeBet.replace(/[^0-9.]/g, '')) || 30);
    showToast(`Loaded ${offer.bookmaker} offer into the calculator!`);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f131d] text-[#dfe2f1] flex flex-col font-sans selection:bg-[#00ff66] selection:text-[#003911]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#052e16] border border-[#00ff66] text-[#00ff66] font-bold text-xs shadow-2xl flex items-center gap-2 animate-in slide-in-from-top duration-300">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Header
        onOpenCalculator={() => handleOpenCalculator('snr', 50)}
        onOpenTrial={handleOpenTrial}
        onOpenLogin={handleOpenLogin}
        onOpenOffers={() => setOffersOpen(true)}
        userEmail={userEmail}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenVideo={() => setVideoOpen(true)}
          onOpenTrial={() => handleOpenTrial('Pro')}
          onScrollToPricing={scrollToPricing}
        />

        {/* Social Proof & Reviews with Cookie Consent Overlay */}
        <ReviewsSection
          onOpenCookieCustomise={() => setCookieOpen(true)}
          onOpenTrial={() => handleOpenTrial('Pro')}
        />

        {/* Daylight "How to make money with matched betting?" Section */}
        <ExplainerSection
          onOpenCalculator={() => handleOpenCalculator('snr', 50)}
        />

        {/* Sign Up Offers Conversion Banner */}
        <SignupBanner
          onOpenTrial={() => handleOpenTrial('Pro')}
          onOpenOffers={() => setOffersOpen(true)}
        />

        {/* Tabbed Content & Platform Showcase */}
        <PlatformShowcase
          onOpenCalculator={() => handleOpenCalculator('snr', 50)}
          onOpenOffers={() => setOffersOpen(true)}
          onOpenTrial={() => handleOpenTrial('Pro')}
        />

        {/* Transparent Membership Pricing Section */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenOffers={() => setOffersOpen(true)}
        onOpenTrial={() => handleOpenTrial('Pro')}
        onOpenCalculator={() => handleOpenCalculator('snr', 50)}
      />

      {/* Interactive Modals */}
      <CalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        initialMode={calcInitialMode}
        initialBackStake={calcInitialStake}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        onOpenCalculator={() => handleOpenCalculator('snr', 50)}
      />

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultMode={authMode}
        selectedPlan={selectedPlan}
        onSuccess={handleAuthSuccess}
      />

      <OffersModal
        isOpen={offersOpen}
        onClose={() => setOffersOpen(false)}
        onSelectOffer={handleSelectOffer}
      />

      <CookieModal
        isOpen={cookieOpen}
        onClose={() => setCookieOpen(false)}
        onSave={() => {
          setCookieOpen(false);
          showToast('Privacy preferences updated successfully.');
        }}
      />
    </div>
  );
}
