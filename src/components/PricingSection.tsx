import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (plan: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0b0f19] relative border-t border-[#1c1f2a]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00ff66]">
            TRANSPARENT MEMBERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight">
            Try it for free or go Premium
          </h2>
          <div className="text-xl sm:text-2xl font-bold text-[#00ff66]">
            Profit Loop Premium pays for itself 20x over
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            You can make £1,000's profit with a Profit Loop Premium account.{' '}
            <strong className="text-white">Don't believe it? Try it for free and we'll show you how.</strong>
          </p>

          {/* Billing Switcher Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span
              onClick={() => setIsAnnual(false)}
              className={`text-xs font-bold uppercase cursor-pointer transition-colors ${
                !isAnnual ? 'text-white' : 'text-slate-400'
              }`}
            >
              MONTHLY
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 rounded-full bg-[#1c2230] border border-[#262a35] p-0.5 transition-colors cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#00ff66] transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span
                onClick={() => setIsAnnual(true)}
                className={`text-xs font-bold uppercase cursor-pointer transition-colors ${
                  isAnnual ? 'text-white' : 'text-slate-400'
                }`}
              >
                ANNUAL
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#00ff66] text-[#003911] text-[10px] font-extrabold uppercase">
                SAVE 45%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Tier 1: Starter */}
          <div className="bg-[#111827] border border-[#262a35] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#00ff66]/30 transition-all">
            <div>
              <h3 className="text-xl font-bold text-white">Starter</h3>
              <p className="text-xs text-slate-300 mt-1 min-h-[32px]">
                Make £1,000s from bookmaker offers
              </p>

              {/* Price Display */}
              <div className="mt-5 mb-1 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white tabular-nums">
                  £{isAnnual ? '20.79' : '39.99'}
                </span>
                <span className="text-xs text-slate-400 font-medium">/ month</span>
              </div>

              <div className="text-xs text-[#00ff66] font-semibold mb-3">
                Save 48% with an annual plan
              </div>

              <div className="text-[11px] text-slate-400 mb-6">
                No contract. Cancel anytime.{' '}
                {isAnnual ? 'Total price: £249.48 billed annually' : 'Total price: £39.99 billed monthly'}
              </div>

              {/* Select Plan Button */}
              <button
                onClick={() => onSelectPlan('Starter')}
                className="w-full py-3 rounded-full bg-[#00ff66] hover:bg-[#6bff83] text-[#003911] font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(0,255,102,0.25)] hover:scale-101 active:scale-99 text-center"
              >
                SELECT THIS PLAN
              </button>

              {/* Feature Checklist */}
              <div className="mt-8 space-y-3 pt-6 border-t border-[#1c1f2a]">
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Starter includes:
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Support from our team of experts</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>50+ signup offers worth £779</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Earn ongoing profits with 60+ weekly offers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Customisable alerts; never miss an opportunity</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>100% money back guarantee within first 14 days</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>0% commission deals saving you £100s in fees</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Access to our matched betting tools</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2: Advanced */}
          <div className="bg-[#111827] border border-[#262a35] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#00ff66]/30 transition-all">
            <div>
              <h3 className="text-xl font-bold text-white">Advanced</h3>
              <p className="text-xs text-slate-300 mt-1 min-h-[32px]">
                Make £1,000s from bookmaker offers. Plus £1,000s in casino offers.
              </p>

              {/* Price Display */}
              <div className="mt-5 mb-1 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white tabular-nums">
                  £{isAnnual ? '28.99' : '49.99'}
                </span>
                <span className="text-xs text-slate-400 font-medium">/ month</span>
              </div>

              <div className="text-xs text-[#00ff66] font-semibold mb-3">
                Save 42% with an annual plan
              </div>

              <div className="text-[11px] text-slate-400 mb-6">
                No contract. Cancel anytime.{' '}
                {isAnnual ? 'Total price: £347.88 billed annually' : 'Total price: £49.99 billed monthly'}
              </div>

              {/* Select Plan Button */}
              <button
                onClick={() => onSelectPlan('Advanced')}
                className="w-full py-3 rounded-full bg-[#00ff66] hover:bg-[#6bff83] text-[#003911] font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(0,255,102,0.25)] hover:scale-101 active:scale-99 text-center"
              >
                SELECT THIS PLAN
              </button>

              {/* Feature Checklist */}
              <div className="mt-8 space-y-3 pt-6 border-t border-[#1c1f2a]">
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Everything in Starter, plus:
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>100+ casino signup offers worth over £1000</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Earn ongoing profits with 50+ weekly casino offers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Access all advanced casino software tools</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Access all casino training content</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Access to BOG Matcher</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Access to Price Boost Matcher</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>Access to Bet Builder Finder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3: Pro (Highlighted with MOST POPULAR badge) */}
          <div className="relative bg-[#111827] border-2 border-[#00ff66] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,102,0.15)] transition-all">
            {/* Most Popular Badge */}
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#00ff66] text-[#003911] text-[10px] font-black uppercase tracking-wider shadow">
              MOST POPULAR
            </div>

            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Pro</span>
              </h3>
              <p className="text-xs text-slate-300 mt-1 min-h-[32px]">
                Make £1,000's monthly with our most powerful value betting tool.
              </p>

              {/* Price Display */}
              <div className="mt-5 mb-1 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#00ff66] tabular-nums">
                  £{isAnnual ? '82.49' : '149.99'}
                </span>
                <span className="text-xs text-slate-400 font-medium">/ month</span>
              </div>

              <div className="text-xs text-[#00ff66] font-semibold mb-3">
                Save 45% with an annual plan
              </div>

              <div className="text-[11px] text-slate-400 mb-6">
                No contract. Cancel anytime.{' '}
                {isAnnual ? 'Total price: £989.88 billed annually' : 'Total price: £149.99 billed monthly'}
              </div>

              {/* Select Plan Button */}
              <button
                onClick={() => onSelectPlan('Pro')}
                className="w-full py-3 rounded-full bg-[#00ff66] hover:bg-[#6bff83] text-[#003911] font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:scale-101 active:scale-99 text-center"
              >
                SELECT THIS PLAN
              </button>

              {/* Feature Checklist */}
              <div className="mt-8 space-y-3 pt-6 border-t border-[#1c1f2a]">
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Everything in Advanced, plus:
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Access to 2UP EV Tool</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Access to Extra Place EV</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Access to Lucky Finder EV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
