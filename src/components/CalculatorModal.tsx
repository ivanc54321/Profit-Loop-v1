import React, { useState } from 'react';
import { X, Calculator, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'normal' | 'snr' | 'sr';
  initialBackStake?: number;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'snr',
  initialBackStake = 50,
}) => {
  const [betType, setBetType] = useState<'normal' | 'snr' | 'sr'>(initialMode);
  const [backStake, setBackStake] = useState<number>(initialBackStake);
  const [backOdds, setBackOdds] = useState<number>(5.0);
  const [layOdds, setLayOdds] = useState<number>(5.2);
  const [commission, setCommission] = useState<number>(0); // 0% commission deals common in ProfitLoop

  if (!isOpen) return null;

  // Calculation logic
  const commDec = commission / 100;
  let layStake = 0;
  let liability = 0;
  let bookieWinProfit = 0;
  let exchangeWinProfit = 0;

  if (betType === 'normal') {
    // Normal qualifying bet
    layStake = (backStake * backOdds) / (layOdds - commDec);
    liability = layStake * (layOdds - 1);
    bookieWinProfit = backStake * (backOdds - 1) - liability;
    exchangeWinProfit = layStake * (1 - commDec) - backStake;
  } else if (betType === 'snr') {
    // Free Bet SNR (Stake Not Returned) - most common
    layStake = (backStake * (backOdds - 1)) / (layOdds - commDec);
    liability = layStake * (layOdds - 1);
    bookieWinProfit = backStake * (backOdds - 1) - liability;
    exchangeWinProfit = layStake * (1 - commDec);
  } else {
    // Free Bet SR (Stake Returned)
    layStake = (backStake * backOdds) / (layOdds - commDec);
    liability = layStake * (layOdds - 1);
    bookieWinProfit = backStake * backOdds - liability;
    exchangeWinProfit = layStake * (1 - commDec);
  }

  const avgProfit = ((bookieWinProfit + exchangeWinProfit) / 2);
  const profitPercentage = backStake > 0 ? ((avgProfit / backStake) * 100).toFixed(1) : '0';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#111827] border border-[#262a35] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262a35] bg-[#0b0f19]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#052e16] text-[#00ff66]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">ProfitLoop Matched Betting Calculator</h3>
              <p className="text-xs text-[#b9ccb5]">Official risk-hedging algorithmic stake calculator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#262a35] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Bet Type Switcher */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Calculation Mode
            </label>
            <div className="grid grid-cols-3 gap-2 p-1 bg-[#0a0e18] rounded-xl border border-[#262a35]">
              <button
                type="button"
                onClick={() => setBetType('normal')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  betType === 'normal'
                    ? 'bg-[#00ff66] text-[#003911] shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Normal / Qualifying
              </button>
              <button
                type="button"
                onClick={() => setBetType('snr')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  betType === 'snr'
                    ? 'bg-[#00ff66] text-[#003911] shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Free Bet (SNR)
              </button>
              <button
                type="button"
                onClick={() => setBetType('sr')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  betType === 'sr'
                    ? 'bg-[#00ff66] text-[#003911] shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Free Bet (SR)
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-[#00ff66]" />
              {betType === 'normal' && 'Qualifying Bet: Minimizes hedging difference to unlock promotional vouchers with ~£0.20 cost.'}
              {betType === 'snr' && 'Stake Not Returned: Locks in ~75-80% of bookmaker promotional bonus money as pure net profit.'}
              {betType === 'sr' && 'Stake Returned: Used for bonus offers where the free stake is included in the payout.'}
            </p>
          </div>

          {/* Input Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {betType === 'normal' ? 'Qualifying Stake' : 'Free Bet Value'}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400 text-sm font-bold">£</span>
                <input
                  type="number"
                  step="any"
                  value={backStake || ''}
                  onChange={(e) => setBackStake(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg pl-7 pr-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-[#00ff66]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Back Odds (Bookie)
              </label>
              <input
                type="number"
                step="0.01"
                value={backOdds || ''}
                onChange={(e) => setBackOdds(parseFloat(e.target.value) || 0)}
                className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-[#00ff66]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Lay Odds (Exchange)
              </label>
              <input
                type="number"
                step="0.01"
                value={layOdds || ''}
                onChange={(e) => setLayOdds(parseFloat(e.target.value) || 0)}
                className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-[#00ff66]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Exchange Comm. (%)
              </label>
              <input
                type="number"
                step="0.5"
                value={commission}
                onChange={(e) => setCommission(parseFloat(e.target.value) || 0)}
                placeholder="0"
                className="w-full bg-[#0a0e18] border border-[#262a35] rounded-lg px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-[#00ff66]"
              />
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400">Presets:</span>
            <button
              type="button"
              onClick={() => {
                setBetType('normal');
                setBackStake(10);
                setBackOdds(2.0);
                setLayOdds(2.04);
                setCommission(0);
              }}
              className="px-2.5 py-1 text-xs rounded-md bg-[#1f2937] hover:bg-[#374151] text-slate-300"
            >
              Bet £10 Qualifier
            </button>
            <button
              type="button"
              onClick={() => {
                setBetType('snr');
                setBackStake(50);
                setBackOdds(5.0);
                setLayOdds(5.2);
                setCommission(0);
              }}
              className="px-2.5 py-1 text-xs rounded-md bg-[#052e16] border border-[#00ff66]/30 text-[#00ff66] font-medium"
            >
              £50 Promo Lock-in (£37.50+)
            </button>
            <button
              type="button"
              onClick={() => {
                setBetType('snr');
                setBackStake(30);
                setBackOdds(4.5);
                setLayOdds(4.6);
                setCommission(2);
              }}
              className="px-2.5 py-1 text-xs rounded-md bg-[#1f2937] hover:bg-[#374151] text-slate-300"
            >
              Bet365 £30 Free Bet
            </button>
          </div>

          {/* Output Dashboard */}
          <div className="p-5 rounded-xl bg-[#0a0e18] border border-[#00ff66]/30 shadow-inner space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-[#111827] border border-[#262a35]">
                <div className="text-xs text-slate-400">Recommended Lay Stake</div>
                <div className="text-2xl font-extrabold text-[#00ff66] tabular-nums mt-1">
                  £{layStake.toFixed(2)}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Lay at Betfair / Smarkets</div>
              </div>

              <div className="p-3 rounded-lg bg-[#111827] border border-[#262a35]">
                <div className="text-xs text-slate-400">Exchange Liability</div>
                <div className="text-2xl font-extrabold text-white tabular-nums mt-1">
                  £{liability.toFixed(2)}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Required balance in exchange</div>
              </div>

              <div className="p-3 rounded-lg bg-[#052e16] border border-[#00ff66]/50">
                <div className="text-xs text-[#b9ccb5] font-semibold">
                  {betType === 'normal' ? 'Net Qualifying Cost' : 'Locked-in Net Profit'}
                </div>
                <div className={`text-2xl font-extrabold tabular-nums mt-1 ${
                  avgProfit >= 0 ? 'text-[#00ff66]' : 'text-amber-400'
                }`}>
                  {avgProfit >= 0 ? `+£${avgProfit.toFixed(2)}` : `-£${Math.abs(avgProfit).toFixed(2)}`}
                </div>
                <div className="text-[11px] text-[#b9ccb5] mt-1">
                  {betType === 'normal' ? 'Minimal qualifying deduction' : `${profitPercentage}% guaranteed return`}
                </div>
              </div>
            </div>

            {/* Hedging Breakdown */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#262a35] text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>If Bookmaker Wins:</span>
                <span className="font-bold tabular-nums text-white">
                  {bookieWinProfit >= 0 ? `+£${bookieWinProfit.toFixed(2)}` : `-£${Math.abs(bookieWinProfit).toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>If Exchange Wins:</span>
                <span className="font-bold tabular-nums text-white">
                  {exchangeWinProfit >= 0 ? `+£${exchangeWinProfit.toFixed(2)}` : `-£${Math.abs(exchangeWinProfit).toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0b0f19] border-t border-[#262a35]">
          <div className="flex items-center gap-2 text-xs text-[#b9ccb5]">
            <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
            <span>Mathematical arbitrage formula verified. No gambling risk.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#00ff66] text-[#003911] font-bold text-xs uppercase hover:bg-[#6bff83] transition-all flex items-center gap-1.5"
          >
            <span>Done</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
