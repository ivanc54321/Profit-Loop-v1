import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface SignupBannerProps {
  onOpenTrial: () => void;
  onOpenOffers: () => void;
}

export const SignupBanner: React.FC<SignupBannerProps> = ({ onOpenTrial, onOpenOffers }) => {
  return (
    <section className="py-6 bg-[#0a0e18] px-4 sm:px-6">
      <div className="max-w-[1040px] mx-auto p-3 sm:p-4 rounded-full bg-[#111827] border border-[#262a35] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Icon & Copy */}
        <div
          onClick={onOpenOffers}
          className="flex items-center gap-3.5 pl-2 sm:pl-4 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-[#052e16] border border-[#00ff66]/30 text-[#00ff66] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-sm sm:text-base font-medium text-white">
            <strong className="text-white">£779 in sign up offers.</strong>{' '}
            <span className="text-[#00ff66] font-bold">Start earning today.</span>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <button
          onClick={onOpenTrial}
          className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#00ff66] hover:bg-[#6bff83] text-[#003911] font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_16px_rgba(0,255,102,0.3)] hover:scale-102 active:scale-98 text-center shrink-0"
        >
          Start your FREE Trial
        </button>
      </div>
    </section>
  );
};
