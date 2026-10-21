import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Shield, Search } from 'lucide-react';
import { SIGNUP_OFFERS, BookmakerOffer } from '../data/mockData';

interface OffersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOffer: (offer: BookmakerOffer) => void;
}

export const OffersModal: React.FC<OffersModalProps> = ({ isOpen, onClose, onSelectOffer }) => {
  const [filter, setFilter] = useState<'all' | 'easy'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredOffers = SIGNUP_OFFERS.filter((o) => {
    const matchesSearch = o.bookmaker.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#111827] border border-[#262a35] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262a35] bg-[#0b0f19]">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-[#052e16] text-[#00ff66]">
              <Shield className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">UK Bookmaker Sign-Up Offers</h3>
              <p className="text-xs text-[#b9ccb5]">£779 in verified introductory promotional free bets</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#262a35] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Stats Bar */}
        <div className="p-4 bg-[#0a0e18] border-b border-[#262a35] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search bookmaker (e.g. Bet365)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111827] border border-[#262a35] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff66]"
            />
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="px-2.5 py-1 rounded bg-[#052e16] text-[#00ff66] font-bold border border-[#00ff66]/30">
              Total Expected Return: ~£610+
            </div>
          </div>
        </div>

        {/* List of Offers */}
        <div className="p-6 overflow-y-auto space-y-3 custom-scrollbar flex-1">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="p-4 bg-[#0f131d] rounded-xl border border-[#262a35] hover:border-[#00ff66]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl p-2.5 rounded-xl bg-[#1c1f2a] border border-[#262a35]">
                  {offer.logo}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">{offer.bookmaker}</span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#052e16] text-[#00ff66] border border-[#00ff66]/20">
                      {offer.badge}
                    </span>
                  </div>
                  <div className="text-xs text-[#00ff66] font-bold mt-0.5">
                    {offer.freeBet}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 max-w-md">
                    {offer.terms}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                <div className="text-right">
                  <div className="text-[10px] uppercase text-slate-400">Target Profit</div>
                  <div className="text-lg font-extrabold text-[#00ff66] tabular-nums">
                    +{offer.expectedProfit}
                  </div>
                </div>
                <button
                  onClick={() => onSelectOffer(offer)}
                  className="px-4 py-1.5 rounded-full bg-[#00ff66] text-[#003911] text-xs font-bold hover:bg-[#6bff83] transition-all flex items-center gap-1"
                >
                  <span>Start Offer</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
