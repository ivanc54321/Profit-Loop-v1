import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'trial' | 'login';
  selectedPlan?: string;
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'trial',
  selectedPlan = 'Pro',
  onSuccess,
}) => {
  const [mode, setMode] = useState<'trial' | 'login'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [plan, setPlan] = useState(selectedPlan);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        onSuccess(email);
        onClose();
        setSubmitted(false);
      }, 1200);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#111827] border border-[#262a35] rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262a35] bg-[#0b0f19]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 font-extrabold text-lg text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e55b]" />
              <span>Profit<span className="text-[#00ff66]">Loop</span></span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#262a35] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#052e16] border border-[#00ff66] text-[#00ff66] flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {mode === 'trial' ? 'Welcome to ProfitLoop!' : 'Welcome Back!'}
              </h3>
              <p className="text-sm text-slate-300">
                {mode === 'trial'
                  ? `Your 7-day risk-free trial for the ${plan} Plan has been initiated.`
                  : 'You have been successfully authenticated.'}
              </p>
            </div>
          ) : (
            <>
              {/* Mode Toggle */}
              <div className="flex items-center p-1 bg-[#0a0e18] rounded-xl border border-[#262a35] mb-5">
                <button
                  type="button"
                  onClick={() => setMode('trial')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    mode === 'trial'
                      ? 'bg-[#00ff66] text-[#003911] shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </button>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    mode === 'login'
                      ? 'bg-[#00ff66] text-[#003911] shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Member Login
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'trial' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00ff66]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00ff66]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00ff66]"
                  />
                </div>

                {mode === 'trial' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Selected Plan
                    </label>
                    <select
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-[#00ff66]"
                    >
                      <option value="Starter">Starter Plan (£39.99/mo) - Bookmaker Offers</option>
                      <option value="Advanced">Advanced Plan (£49.99/mo) - Bookmaker + Casino Offers</option>
                      <option value="Pro">Pro Plan (£149.99/mo) - 2UP EV & Value Betting (Most Popular)</option>
                    </select>
                  </div>
                )}

                {mode === 'trial' && (
                  <div className="p-3 bg-[#0a0e18] rounded-xl border border-[#262a35] text-xs space-y-1.5">
                    <div className="flex items-center gap-2 text-[#00ff66]">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span className="font-semibold">7-Day Free Trial Guarantee</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Instant access to all £779 in signup offers, real-time OddsMatcher, and profit tracking. No commitment; cancel anytime with 1 click.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-full bg-[#00ff66] text-[#003911] font-extrabold text-sm uppercase tracking-wide hover:bg-[#6bff83] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#00ff66]/20 disabled:opacity-60"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : mode === 'trial' ? (
                    <>
                      <span>Start Your Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Log In to Account</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
