import React from 'react';
import { Play, Volume2, Maximize2, ShieldCheck, Check } from 'lucide-react';

interface HeroSectionProps {
  onOpenVideo: () => void;
  onOpenTrial: () => void;
  onScrollToPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVideo,
  onOpenTrial,
  onScrollToPricing,
}) => {
  return (
    <section className="relative pt-12 pb-20 md:py-24 bg-[#0a0e18] overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00ff66]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052e16] border border-[#00ff66]/30 text-[#00ff66] text-xs font-extrabold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66]" />
              <span>ALGORITHMIC RISK-HEDGING SOFTWARE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Unlock <span className="text-[#00ff66]">Guaranteed Profit</span> Today.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              Find out how to make money in just a few minutes each day by taking advantage of bookmaker offers.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenTrial}
                className="px-7 py-3.5 rounded-full bg-[#00ff66] hover:bg-[#6bff83] text-[#003911] font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_24px_rgba(0,255,102,0.35)] hover:scale-102 active:scale-98 text-center"
              >
                TRY THE PROVEN METHOD FREE
              </button>

              <button
                onClick={onScrollToPricing}
                className="px-6 py-3.5 rounded-full bg-[#171b26] hover:bg-[#1f2535] border border-[#262a35] hover:border-[#00ff66]/50 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center"
              >
                GO PREMIUM & SEE RESULTS
              </button>
            </div>

            {/* Featured In Logos */}
            <div className="pt-8 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                FEATURED IN:
              </span>
              <div className="flex items-center gap-8 sm:gap-10 text-slate-400 opacity-80 hover:opacity-100 transition-opacity flex-wrap">
                {/* The Guardian */}
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-300">
                  the<span className="text-white">guardian</span>
                </div>
                {/* IHUFFPOSTI */}
                <div className="font-sans text-lg sm:text-xl font-black tracking-wider text-slate-300">
                  IHUFFPOSTI
                </div>
                {/* The Telegraph */}
                <div className="font-serif italic text-lg sm:text-xl font-bold text-slate-300">
                  The Telegraph
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Video Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onClick={onOpenVideo}
              className="relative w-full max-w-[560px] aspect-video sm:aspect-[16/10] rounded-2xl bg-[#111827] border border-[#262a35] shadow-2xl overflow-hidden group cursor-pointer hover:border-[#00ff66]/50 transition-all duration-300"
            >
              {/* Top Banner overlay inside video */}
              <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/80 to-transparent">
                <span className="text-xs font-semibold text-white/90 truncate max-w-[320px]">
                  How to make money with Profit Loop <span className="text-slate-400">› BETTING RE...</span>
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-black/60 text-[#00ff66] border border-[#00ff66]/40">
                  HD 1080p
                </span>
              </div>

              {/* Background Video Simulator Imagery */}
              <div className="absolute inset-0 bg-[#080d1a] overflow-hidden">
                {/* Graphic grid & chart lines representing trading software */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00ff66_1px,transparent_1px),linear-gradient(to_bottom,#00ff66_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                {/* Simulated Presenter & Chart Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-6">
                  {/* Presenter Silhouette & Smart Desk Graphic */}
                  <div className="relative w-1/2 h-full flex items-end">
                    <div className="relative w-48 h-56 rounded-t-full bg-gradient-to-t from-[#131b2e] to-[#222f4c] border-t border-l border-r border-[#354366] flex flex-col items-center justify-center p-3 text-center shadow-lg">
                      <div className="w-16 h-16 rounded-full bg-[#2d3a5a] border-2 border-[#00ff66]/40 flex items-center justify-center text-2xl shadow-inner mb-2">
                        👨‍💼
                      </div>
                      <div className="text-[11px] font-bold text-white">Dan Davies</div>
                      <div className="text-[9px] text-[#00ff66]">Senior Quant Analyst</div>
                      <div className="text-[8px] text-slate-400 mt-1">ProfitLoop Yield Research</div>
                    </div>
                  </div>

                  {/* Terminal Stats Floating in Video Background */}
                  <div className="w-1/2 space-y-2 text-right">
                    <div className="p-2.5 rounded-lg bg-[#0a0e18]/90 border border-[#262a35] backdrop-blur-md">
                      <div className="text-[10px] text-slate-400">Locked-in Hedge Return</div>
                      <div className="text-base font-extrabold text-[#00ff66] tabular-nums">+£37.50 (75%)</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#0a0e18]/90 border border-[#262a35] backdrop-blur-md">
                      <div className="text-[10px] text-slate-400">Total Monthly Verified</div>
                      <div className="text-base font-extrabold text-white tabular-nums">£1,482.00</div>
                    </div>
                  </div>
                </div>

                {/* Subtle dark gradient scrim */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Central Glowing Green Play Button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#00ff66] text-[#003911] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,102,0.6)] group-hover:scale-110 group-active:scale-95 transition-all">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Video Player UI Bar */}
              <div className="absolute bottom-0 inset-x-0 z-20 px-4 py-2 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex items-center justify-between gap-3 text-xs text-white">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 text-slate-300" />
                  {/* Progress Line */}
                  <div className="w-24 sm:w-40 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-[#00ff66]" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-300">0:00 / 4:18</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] bg-[#052e16] px-1.5 py-0.5 rounded border border-[#00ff66]/30 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>VALIDATED</span>
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
