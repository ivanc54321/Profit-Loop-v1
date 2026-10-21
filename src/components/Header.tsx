import React, { useState } from 'react';
import { ChevronDown, User, Menu, X, Calculator, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenCalculator: () => void;
  onOpenTrial: (plan?: string) => void;
  onOpenLogin: () => void;
  onOpenOffers: () => void;
  userEmail: string | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCalculator,
  onOpenTrial,
  onOpenLogin,
  onOpenOffers,
  userEmail,
  onLogout,
}) => {
  const [matchedBettingOpen, setMatchedBettingOpen] = useState(false);
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f19]/95 backdrop-blur-md border-b border-[#1c1f2a]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="flex items-center gap-2 group text-white font-extrabold text-xl tracking-tight"
          >
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e55b]" />
            </div>
            <span>
              Profit<span className="text-[#00ff66]">Loop</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {/* Matched Betting Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMatchedBettingOpen(true)}
              onMouseLeave={() => setMatchedBettingOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 py-2 hover:text-[#00ff66] transition-colors cursor-pointer"
              >
                <span>Matched Betting</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {matchedBettingOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#111827] border border-[#262a35] rounded-xl shadow-xl p-2 space-y-1">
                    <button
                      onClick={() => {
                        setMatchedBettingOpen(false);
                        scrollToSection('how-it-works');
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f2937] text-slate-200 hover:text-[#00ff66] transition-colors flex items-center justify-between"
                    >
                      <span>How Matched Betting Works</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00ff66]" />
                    </button>
                    <button
                      onClick={() => {
                        setMatchedBettingOpen(false);
                        onOpenOffers();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f2937] text-slate-200 hover:text-[#00ff66] transition-colors flex items-center justify-between"
                    >
                      <span>Sign Up Offers (£779)</span>
                      <span className="text-[10px] bg-[#052e16] text-[#00ff66] font-bold px-1.5 py-0.5 rounded">NEW</span>
                    </button>
                    <button
                      onClick={() => {
                        setMatchedBettingOpen(false);
                        scrollToSection('showcase');
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f2937] text-slate-200 hover:text-[#00ff66] transition-colors"
                    >
                      OddsMatcher Software
                    </button>
                    <button
                      onClick={() => {
                        setMatchedBettingOpen(false);
                        scrollToSection('pricing');
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f2937] text-slate-200 hover:text-[#00ff66] transition-colors"
                    >
                      2UP EV & Value Tools
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Betting Calculators Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCalculatorsOpen(true)}
              onMouseLeave={() => setCalculatorsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 py-2 hover:text-[#00ff66] transition-colors cursor-pointer"
              >
                <span>Betting Calculators</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {calculatorsOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#111827] border border-[#262a35] rounded-xl shadow-xl p-2 space-y-1">
                    <button
                      onClick={() => {
                        setCalculatorsOpen(false);
                        onOpenCalculator();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f2937] text-slate-200 hover:text-[#00ff66] transition-colors flex items-center justify-between"
                    >
                      <span className="font-semibold">Matched Betting Calculator</span>
                      <Calculator className="w-3.5 h-3.5 text-[#00ff66]" />
                    </button>
                    <button
                      onClick={() => {
                        setCalculatorsOpen(false);
                        onOpenCalculator();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f2937] text-slate-200 hover:text-[#00ff66] transition-colors"
                    >
                      Dutching Calculator
                    </button>
                    <button
                      onClick={() => {
                        setCalculatorsOpen(false);
                        onOpenCalculator();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#1f2937] text-slate-200 hover:text-[#00ff66] transition-colors"
                    >
                      Each Way Calculator
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-[#00ff66] transition-colors cursor-pointer"
            >
              Success Stories
            </button>

            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-[#00ff66] transition-colors cursor-pointer"
            >
              Pricing
            </button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {userEmail ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-[#262a35] text-xs text-slate-200 hover:border-[#00ff66]/40 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#00ff66] text-[#003911] flex items-center justify-center font-bold text-[10px]">
                  {userEmail[0].toUpperCase()}
                </div>
                <span className="hidden sm:inline max-w-[120px] truncate">{userEmail}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#111827] border border-[#262a35] rounded-xl shadow-xl p-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] text-[#00ff66] font-bold border-b border-[#262a35] mb-1">
                    Active Trial: Pro Plan
                  </div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenCalculator();
                    }}
                    className="w-full text-left px-3 py-1.5 rounded text-xs text-slate-300 hover:bg-[#1c1f2a]"
                  >
                    Open Calculators
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onLogout();
                    }}
                    className="w-full text-left px-3 py-1.5 rounded text-xs text-rose-400 hover:bg-[#1c1f2a]"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="text-xs font-bold tracking-wider uppercase text-slate-200 hover:text-white transition-colors px-2 py-1"
            >
              LOGIN
            </button>
          )}

          <button
            onClick={() => onOpenTrial()}
            className="px-5 py-2.5 rounded-full bg-[#00ff66] hover:bg-[#6bff83] text-[#003911] font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_16px_rgba(0,255,102,0.3)] hover:scale-102 active:scale-98"
          >
            FREE TRIAL
          </button>

          {/* User Icon Avatar Button */}
          <button
            onClick={() => {
              if (userEmail) {
                setUserDropdownOpen(!userDropdownOpen);
              } else {
                onOpenLogin();
              }
            }}
            aria-label="User Account"
            className="w-9 h-9 rounded-full bg-[#1c1f2a] border border-[#262a35] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00ff66] transition-colors"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f131d] border-b border-[#262a35] px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-200 hover:text-[#00ff66]"
          >
            How Matched Betting Works
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOffers();
            }}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-200 hover:text-[#00ff66]"
          >
            Sign Up Offers (£779)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCalculator();
            }}
            className="block w-full text-left py-2 text-sm font-semibold text-[#00ff66]"
          >
            Open Betting Calculator
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-200 hover:text-[#00ff66]"
          >
            Success Stories
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-200 hover:text-[#00ff66]"
          >
            Pricing Plans
          </button>
          <div className="pt-2 border-t border-[#262a35] flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-2.5 rounded-full bg-[#00ff66] text-[#003911] font-bold text-xs uppercase"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
