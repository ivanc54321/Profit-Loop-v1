import React from 'react';
import { ArrowDown, Gift, ShieldCheck, DollarSign, Calculator } from 'lucide-react';

interface ExplainerSectionProps {
  onOpenCalculator: () => void;
}

export const ExplainerSection: React.FC<ExplainerSectionProps> = ({ onOpenCalculator }) => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#edf9f0] text-slate-900 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Educational Prose */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a0e18] tracking-tight leading-[1.15]">
              How to make money with matched betting?
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Matched betting is a way to make money online by using the free bets and promotional offers that bookmakers give to new and existing customers.
            </p>

            <p className="text-base text-slate-700 font-normal leading-relaxed">
              With matched betting, we place two bets on the same sporting event to cover every possible outcome.
            </p>

            {/* Step 1 Card */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-[#0a0e18]">
                Step 1: The qualifying bet
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                This is the initial bet you place to unlock the free bet offer. For example, a bookmaker might say: "Bet £10, get £50 in free bets." By following the matched betting process correctly, we don't risk our qualifying bet. We don't aim to win or lose; instead, we cover all outcomes so that, after very small costs, the free bet is unlocked.
              </p>
            </div>

            {/* Step 2 Card */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-[#0a0e18]">
                Step 2: The free bet
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Next, we repeat the process using the free bet rather than our own money. This is where we make our profit. Done correctly, we can typically lock in 75%+ of the free bet value as guaranteed profit, no matter who wins the event. In our example, we use a £50 free bet to generate £37.50+ profit by following the matched betting process.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0e18] text-[#00ff66] font-bold text-xs uppercase hover:bg-slate-800 transition-colors shadow-md"
              >
                <Calculator className="w-4 h-4" />
                <span>Test With Your Own Stake in Calculator</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Diagram Container */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[500px] bg-[#111827] border border-[#262a35] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
              {/* Node 1: Step 1 */}
              <div className="p-4 rounded-2xl bg-[#1c2230] border border-[#262a35] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00ff66] text-[#003911] font-black text-sm flex items-center justify-center shrink-0 shadow-[0_0_12px_#00ff66]">
                  1
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#00ff66]">
                    STEP 1
                  </div>
                  <div className="text-base font-bold text-white">
                    Place Qualifying Bet
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Unlocks bookmaker promotion without gambling liability.
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center text-[#00ff66]">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>

              {/* Node: UNLOCKS */}
              <div className="p-4 rounded-2xl bg-[#1c2230] border border-[#262a35] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#052e16] text-[#00ff66] border border-[#00ff66]/40 flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#00ff66]">
                    UNLOCKS
                  </div>
                  <div className="text-base font-bold text-white">
                    £50 Free Bet Promo
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Credits directly into customer sportsbook wallet.
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center text-[#00ff66]">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>

              {/* Node 2: Step 2 */}
              <div className="p-4 rounded-2xl bg-[#1c2230] border border-[#262a35] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00ff66] text-[#003911] font-black text-sm flex items-center justify-center shrink-0 shadow-[0_0_12px_#00ff66]">
                  2
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#00ff66]">
                    STEP 2
                  </div>
                  <div className="text-base font-bold text-white">
                    Place Free Bets
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Use free bet credits to execute mathematical hedging lock-in.
                  </div>
                </div>
              </div>

              {/* Final Node: GUARANTEED RETURN */}
              <div className="p-5 rounded-2xl bg-[#0a0e18] border border-[#00ff66]/50 shadow-[0_0_20px_rgba(0,255,102,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#052e16] text-[#00ff66] border border-[#00ff66]/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#00ff66]">
                      GUARANTEED RETURN
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#00ff66] tabular-nums">
                      Profit: £37.50+
                    </div>
                  </div>
                </div>

                <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1c2230] text-slate-300 border border-[#262a35] self-start sm:self-center">
                  No matter the outcome
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
