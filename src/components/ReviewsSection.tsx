import React, { useState } from 'react';
import { Star, Share2, X, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface ReviewsSectionProps {
  onOpenCookieCustomise: () => void;
  onOpenTrial: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenCookieCustomise,
  onOpenTrial,
}) => {
  const [cookieDismissed, setCookieDismissed] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [moreReviewsExpanded, setMoreReviewsExpanded] = useState(false);

  const handleShare = (id: string, name: string) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-[#0b0f19] border-t border-[#1c1f2a]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#00ff66]">
            PROVEN TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight">
            Join <span className="text-[#00ff66]">500,000+ people</span> like you
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1 text-sm text-slate-300">
            <div className="flex items-center text-[#00ff66]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00ff66] text-[#00ff66]" />
              ))}
            </div>
            <span><strong className="text-white">4.8 out of 5 stars</strong> rate us as excellent.</span>
          </div>
        </div>

        {/* Floating/Inline Cookie Card as depicted in reference */}
        {!cookieDismissed && (
          <div className="mb-8 max-w-lg mx-auto lg:mx-0 p-4 rounded-xl bg-[#111827] border border-[#262a35] shadow-2xl relative animate-in fade-in slide-in-from-bottom-2 duration-300">
            <button
              onClick={() => setCookieDismissed(true)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#052e16] text-[#00ff66] flex items-center justify-center text-xs shrink-0 mt-0.5">
                🛡️
              </div>
              <div className="space-y-2 pr-6">
                <div className="text-sm font-bold text-white">We value your privacy</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized dynamic calculators, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={onOpenCookieCustomise}
                    className="px-3 py-1 text-xs rounded-md bg-[#1f2937] hover:bg-[#262a35] text-slate-200 transition-colors"
                  >
                    Customise
                  </button>
                  <button
                    onClick={() => setCookieDismissed(true)}
                    className="px-3 py-1 text-xs rounded-md bg-[#1f2937] hover:bg-[#262a35] text-slate-300 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setCookieDismissed(true)}
                    className="px-4 py-1 text-xs font-bold rounded-md bg-[#00ff66] text-[#003911] hover:bg-[#6bff83] transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#111827] border border-[#262a35] rounded-xl p-5 flex flex-col justify-between hover:border-[#00ff66]/40 transition-all group"
            >
              {/* Card Top: Profit Badge & Share */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#052e16] text-[#00ff66] text-xs font-bold border border-[#00ff66]/20">
                    {t.profitBadge}
                  </span>
                  <button
                    onClick={() => handleShare(t.id, t.name)}
                    title="Share testimonial"
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {copiedId === t.id && (
                  <div className="text-[10px] text-[#00ff66] mb-1">Link copied to clipboard!</div>
                )}

                {/* Author & Milestone */}
                <h3 className="text-base font-bold text-white">{t.name}</h3>
                <div className="text-xs text-[#00ff66] font-medium mb-3">
                  {t.milestoneTag}
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  "{t.quote}"
                </p>
              </div>

              {/* 2x2 Metric Breakdown Grid */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#1c1f2a]">
                <div className="p-2 rounded-lg bg-[#0a0e18] border border-[#1f2937]">
                  <div className="text-[10px] uppercase font-bold text-slate-400">TODAY</div>
                  <div className="text-xs font-extrabold text-white tabular-nums mt-0.5">
                    {t.stats.today}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#0a0e18] border border-[#1f2937]">
                  <div className="text-[10px] uppercase font-bold text-slate-400">THIS MONTH</div>
                  <div className="text-xs font-extrabold text-[#00ff66] tabular-nums mt-0.5">
                    {t.stats.thisMonth}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#0a0e18] border border-[#1f2937]">
                  <div className="text-[10px] uppercase font-bold text-slate-400">LAST MONTH</div>
                  <div className="text-xs font-extrabold text-white tabular-nums mt-0.5">
                    {t.stats.lastMonth}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[#052e16]/60 border border-[#00ff66]/20">
                  <div className="text-[10px] uppercase font-bold text-[#b9ccb5]">TOTAL PROFIT</div>
                  <div className="text-xs font-extrabold text-[#00ff66] tabular-nums mt-0.5">
                    {t.stats.totalProfit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Reviews Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setMoreReviewsExpanded(!moreReviewsExpanded)}
            className="px-6 py-2.5 rounded-full bg-[#111827] border border-[#262a35] hover:border-[#00ff66]/60 text-slate-200 text-xs font-extrabold tracking-wider uppercase transition-all shadow-md hover:scale-102"
          >
            {moreReviewsExpanded ? 'SHOW LESS REVIEWS' : 'READ MORE REVIEWS LIKE THIS'}
          </button>
        </div>

        {/* Expanded Reviews Drawer if clicked */}
        {moreReviewsExpanded && (
          <div className="mt-6 p-6 rounded-2xl bg-[#0a0e18] border border-[#262a35] grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-[#111827] border border-[#1f2937]">
              <div className="text-xs font-bold text-[#00ff66] mb-1">£2,450 Profit in 3 Months</div>
              <div className="font-bold text-white text-sm">Marcus K.</div>
              <p className="text-xs text-slate-300 mt-1">
                "The OddsMatcher software does all the heavy lifting. I spend 20 minutes on my lunch break and haven't paid a penny in tax."
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#111827] border border-[#1f2937]">
              <div className="text-xs font-bold text-[#00ff66] mb-1">£8,910 Total Milestone</div>
              <div className="font-bold text-white text-sm">Chloe W.</div>
              <p className="text-xs text-slate-300 mt-1">
                "Paid off my entire holiday to Japan using ProfitLoop's casino & reload offers. Absolutely life changing."
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#111827] border border-[#1f2937]">
              <div className="text-xs font-bold text-[#00ff66] mb-1">£22,040 Milestone</div>
              <div className="font-bold text-white text-sm">David P.</div>
              <p className="text-xs text-slate-300 mt-1">
                "4 years with Profit Loop. The 2UP EV tool and price boost matcher alone pay for the Pro membership tenfold."
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
