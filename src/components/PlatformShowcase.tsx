import React, { useState } from 'react';
import { SAMPLE_FIXTURES, SIGNUP_OFFERS } from '../data/mockData';
import { Calculator, ArrowUpRight, TrendingUp, Laptop, Smartphone, Search, RefreshCw, CheckCircle2 } from 'lucide-react';

interface PlatformShowcaseProps {
  onOpenCalculator: () => void;
  onOpenOffers: () => void;
  onOpenTrial: () => void;
}

export const PlatformShowcase: React.FC<PlatformShowcaseProps> = ({
  onOpenCalculator,
  onOpenOffers,
  onOpenTrial,
}) => {
  const [activeTab, setActiveTab] = useState<'welcome' | 'about' | 'find'>('welcome');
  const [interactiveMode, setInteractiveMode] = useState<'preview' | 'oddsmatcher'>('preview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshOdds = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#0a0e18] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Segmented Pill Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#111827] border border-[#262a35] shadow-lg flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab('welcome')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'welcome'
                  ? 'bg-[#00ff66] text-[#003911] shadow-[0_0_12px_rgba(0,255,102,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Welcome to Profit Loop
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'about'
                  ? 'bg-[#00ff66] text-[#003911] shadow-[0_0_12px_rgba(0,255,102,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About Profit Loop
            </button>
            <button
              onClick={() => setActiveTab('find')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'find'
                  ? 'bg-[#00ff66] text-[#003911] shadow-[0_0_12px_rgba(0,255,102,0.4)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              What can you find
            </button>
          </div>
        </div>

        {/* Descriptive Prose according to selected tab */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          {activeTab === 'welcome' && (
            <>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Here at Profit Loop, you can learn all about the UK's best{' '}
                <span className="text-[#00ff66] font-semibold underline decoration-[#00ff66]/40 underline-offset-4">
                  side hustles
                </span>{' '}
                in matched betting and{' '}
                <span className="text-[#00ff66] font-semibold underline decoration-[#00ff66]/40 underline-offset-4">
                  value betting
                </span>
                . As a way to earn extra income, Profit Loop provides you with the top tools and resources to lock in profits from using bookmaker's promotional offers.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                Since launching in 2011, Profit Loop has become a leading name in matched betting and a trusted choice for thousands of users. As pioneers behind the original OddsMatcher software, we provide advanced tools, betting calculators, and expert insights while continuously evolving to keep pace with industry changes and help members stay ahead.
              </p>
            </>
          )}

          {activeTab === 'about' && (
            <>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Profit Loop was founded by quantitative algorithmic traders and mathematics graduates from London's financial district. We transformed complex mathematical arbitrage into an intuitive, automated software suite for everyday retail users.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                Our mission is strict risk mitigation. We do not gamble; we systematically exploit promotional price inefficiencies across 50+ regulated sportsbooks and global betting exchanges, guaranteeing that odds disparities work in your favour.
              </p>
            </>
          )}

          {activeTab === 'find' && (
            <>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Inside the Profit Loop suite you get access to the complete financial arsenal: the real-time{' '}
                <strong className="text-white">OddsMatcher 4.0</strong>, 0% commission deals with Betfair & Smarkets, automated casino EV simulators, Dutching matrices, and our flagship{' '}
                <strong className="text-[#00ff66]">2UP Early Payout tool</strong>.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                Plus full 1-on-1 expert coaching, daily step-by-step reload calendars, and video tutorials designed to turn 15 minutes of spare time into £300 - £1,500+ monthly tax-free income.
              </p>
            </>
          )}
        </div>

        {/* Showcase Console Switcher */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Interface View:</span>
            <button
              onClick={() => setInteractiveMode('preview')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                interactiveMode === 'preview'
                  ? 'bg-[#1f2937] text-[#00ff66] border border-[#00ff66]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Multi-Device Hardware Rig
            </button>
            <button
              onClick={() => setInteractiveMode('oddsmatcher')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                interactiveMode === 'oddsmatcher'
                  ? 'bg-[#1f2937] text-[#00ff66] border border-[#00ff66]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Live OddsMatcher Engine</span>
            </button>
          </div>

          {interactiveMode === 'oddsmatcher' && (
            <button
              onClick={handleRefreshOdds}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#111827] border border-[#262a35] text-xs text-slate-300 hover:text-[#00ff66] transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh Odds</span>
            </button>
          )}
        </div>

        {/* Main Display Area */}
        {interactiveMode === 'preview' ? (
          /* High-Fidelity Multi-Device Mockup Frame */
          <div className="relative rounded-3xl bg-gradient-to-b from-[#111827] to-[#0a0e18] border border-[#262a35] p-6 sm:p-10 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00ff66_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Laptop Screen Simulator */}
              <div className="lg:col-span-8 bg-[#0b0f19] border border-[#262a35] rounded-2xl shadow-2xl overflow-hidden">
                {/* Laptop Window Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#171b26] border-b border-[#262a35]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">profitloop.co.uk/dashboard/oddsmatcher</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00ff66]" />
                    <span className="text-[10px] text-[#00ff66] font-bold">FEED LIVE</span>
                  </div>
                </div>

                {/* Laptop Inner Content */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between bg-[#111827] p-3 rounded-xl border border-[#1f2937]">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Welcome Back, Alex</div>
                      <div className="text-sm font-bold text-white">OddsMatcher Algorithmic Filter Active</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Monthly Yield</div>
                      <div className="text-base font-extrabold text-[#00ff66] tabular-nums">+£842.50</div>
                    </div>
                  </div>

                  {/* Odds Table Preview */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 border-b border-[#1f2937]">
                          <th className="pb-2 font-medium">Event</th>
                          <th className="pb-2 font-medium">Bookie (Back)</th>
                          <th className="pb-2 font-medium">Exchange (Lay)</th>
                          <th className="pb-2 font-medium">Rating</th>
                          <th className="pb-2 font-medium text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1f2937]">
                        {SAMPLE_FIXTURES.slice(0, 3).map((f) => (
                          <tr key={f.id} className="text-slate-200">
                            <td className="py-2.5">
                              <div className="font-semibold text-white">{f.event}</div>
                              <div className="text-[10px] text-slate-400">{f.betType}</div>
                            </td>
                            <td className="py-2.5">
                              <span className="px-2 py-0.5 rounded bg-[#1f2937] text-white font-mono font-bold">
                                {f.bookmaker} @ {f.backOdds}
                              </span>
                            </td>
                            <td className="py-2.5">
                              <span className="px-2 py-0.5 rounded bg-[#052e16] text-[#00ff66] font-mono font-bold border border-[#00ff66]/20">
                                {f.exchange} @ {f.layOdds}
                              </span>
                            </td>
                            <td className="py-2.5 font-bold text-[#00ff66] font-mono tabular-nums">
                              {f.rating}%
                            </td>
                            <td className="py-2.5 text-right">
                              <button
                                onClick={onOpenCalculator}
                                className="px-2.5 py-1 rounded bg-[#00ff66] text-[#003911] font-bold text-[10px] uppercase hover:bg-[#6bff83]"
                              >
                                Match
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Screen Simulator */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[280px] bg-[#0b0f19] border-4 border-[#262a35] rounded-[36px] p-3 shadow-2xl relative">
                  {/* Phone Notch */}
                  <div className="w-24 h-4 bg-[#171b26] rounded-b-xl mx-auto mb-3" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#1f2937]">
                      <span className="text-xs font-bold text-white">ProfitLoop Mobile</span>
                      <span className="text-[10px] bg-[#052e16] text-[#00ff66] px-2 py-0.5 rounded-full font-bold">
                        PRO
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#111827] border border-[#262a35]">
                      <div className="text-[10px] text-slate-400">Available Signups</div>
                      <div className="text-lg font-extrabold text-[#00ff66] tabular-nums">£779.00</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">50+ instant bookmaker bonuses</div>
                    </div>

                    <div className="space-y-1.5">
                      {SIGNUP_OFFERS.slice(0, 3).map((offer) => (
                        <div
                          key={offer.id}
                          onClick={onOpenOffers}
                          className="p-2 rounded-lg bg-[#171b26] hover:bg-[#1f2535] cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{offer.logo}</span>
                            <div>
                              <div className="text-xs font-bold text-white">{offer.bookmaker}</div>
                              <div className="text-[9px] text-[#00ff66]">{offer.freeBet}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] font-bold text-[#00ff66]">
                              +{offer.expectedProfit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={onOpenOffers}
                      className="w-full py-2 rounded-full bg-[#00ff66] text-[#003911] font-bold text-[11px] uppercase"
                    >
                      View All 50+ Offers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Live Interactive OddsMatcher Engine */
          <div className="rounded-2xl bg-[#111827] border border-[#262a35] p-5 shadow-2xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-[#262a35]">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Real-Time OddsMatcher 4.0</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#052e16] text-[#00ff66] border border-[#00ff66]/30">
                    LOW LATENCY
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Scanning 50+ UK bookmakers against Betfair, Smarkets, and Betdaq order books every 1.2s.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Hedging Threshold:</span>
                <span className="px-2.5 py-1 rounded bg-[#052e16] text-[#00ff66] font-bold">
                  &gt; 98.0% Rating
                </span>
              </div>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-[#262a35] uppercase text-[10px] tracking-wider">
                    <th className="py-2.5 font-semibold">Fixture / Market</th>
                    <th className="py-2.5 font-semibold">Bookmaker (Back)</th>
                    <th className="py-2.5 font-semibold">Exchange (Lay)</th>
                    <th className="py-2.5 font-semibold">Match Rating</th>
                    <th className="py-2.5 font-semibold">Est. SNR Return</th>
                    <th className="py-2.5 font-semibold text-right">Hedging Tool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1f2937]">
                  {SAMPLE_FIXTURES.map((f) => (
                    <tr key={f.id} className="hover:bg-[#171b26] transition-colors">
                      <td className="py-3">
                        <div className="font-bold text-white">{f.event}</div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-2">
                          <span>{f.league}</span>
                          <span>•</span>
                          <span className="text-[#00ff66]">{f.betType}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="font-bold text-white">{f.bookmaker}</div>
                        <div className="text-xs font-mono font-bold text-amber-400">{f.backOdds.toFixed(2)}</div>
                      </td>
                      <td className="py-3">
                        <div className="font-bold text-white">{f.exchange}</div>
                        <div className="text-xs font-mono font-bold text-[#00ff66]">{f.layOdds.toFixed(2)}</div>
                      </td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded bg-[#052e16] text-[#00ff66] font-bold font-mono">
                          {f.rating}%
                        </span>
                      </td>
                      <td className="py-3 font-semibold text-white">
                        {f.snrReturn}
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={onOpenCalculator}
                          className="px-3 py-1.5 rounded-full bg-[#00ff66] hover:bg-[#6bff83] text-[#003911] font-extrabold text-[11px] uppercase transition-all shadow"
                        >
                          Calculate Stake
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
