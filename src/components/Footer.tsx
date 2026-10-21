import React from 'react';
import { Mail, Clock, MapPin, Shield, Twitter, Linkedin, Youtube, Globe, Lock } from 'lucide-react';

interface FooterProps {
  onOpenOffers: () => void;
  onOpenTrial: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenOffers,
  onOpenTrial,
  onOpenCalculator,
}) => {
  return (
    <footer className="bg-[#0a0e18] text-slate-400 text-xs border-t border-[#1c1f2a] pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1c1f2a]">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00e55b]" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Profit<span className="text-[#00ff66]">Loop</span>
              </span>
            </div>

            <p className="leading-relaxed text-slate-400 text-xs">
              Operated under Liquidity Trading Ltd. Profit Loop provides industry-leading matched betting software, odds matching algorithmic engines, and systematic risk-free yield execution for retail investors worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#twitter" aria-label="X Twitter" className="p-2 rounded-lg bg-[#111827] hover:text-[#00ff66] hover:bg-[#1c2230] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="p-2 rounded-lg bg-[#111827] hover:text-[#00ff66] hover:bg-[#1c2230] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="p-2 rounded-lg bg-[#111827] hover:text-[#00ff66] hover:bg-[#1c2230] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#web" aria-label="Global" className="p-2 rounded-lg bg-[#111827] hover:text-[#00ff66] hover:bg-[#1c2230] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: GET IN TOUCH */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              GET IN TOUCH
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00ff66] shrink-0" />
                <a href="mailto:support@profitloop.co.uk" className="hover:text-white transition-colors">
                  support@profitloop.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                <span>Live Customer Chat: 09:00 - 17:30 Mon-Sun</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                <span>Liquidity Trading Ltd, Level 4 Fintech Quarter, London, UK</span>
              </li>
            </ul>
          </div>

          {/* Column 3: USEFUL LINKS */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              USEFUL LINKS
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenTrial} className="hover:text-[#00ff66] transition-colors text-left">
                  Affiliate Program & Partners
                </button>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#00ff66] transition-colors">
                  Platform Reviews & Ratings
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#00ff66] transition-colors">
                  Member Case Studies
                </a>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#00ff66] transition-colors text-left">
                  Verified Community Earnings
                </button>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#00ff66] transition-colors">
                  Subscription Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: RESPONSIBLE GAMING */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              RESPONSIBLE GAMING
            </div>
            <div className="p-4 rounded-xl bg-[#111827] border border-[#262a35] space-y-2">
              <div className="flex items-center gap-2 font-bold text-white text-xs">
                <Shield className="w-4 h-4 text-[#00ff66]" />
                <span>BeGambleAware.org</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Matched betting is not standard gambling. We promote disciplined bankroll governance. Strictly 18+.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
              <span className="px-1.5 py-0.5 rounded bg-[#1f2937] text-white font-bold text-[10px]">
                18+
              </span>
              <span>Please gamble responsibly. Terms apply.</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Profit Loop. Liquidity Trading Ltd. All rights reserved.
          </div>
          <div className="max-w-xl text-center md:text-right leading-relaxed">
            Disclaimer: Matched betting returns are calculated through mathematical hedging of bookmaker promotions. Past promotional yields do not guarantee identical future returns. Odds and offers fluctuate continuously.
          </div>
        </div>
      </div>
    </footer>
  );
};
