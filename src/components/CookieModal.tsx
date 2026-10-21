import React, { useState } from 'react';
import { X, Shield, Check } from 'lucide-react';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const CookieModal: React.FC<CookieModalProps> = ({ isOpen, onClose, onSave }) => {
  const [analytics, setAnalytics] = useState(true);
  const [personalization, setPersonalization] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111827] border border-[#262a35] rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262a35] bg-[#0b0f19]">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00ff66]" />
            <h3 className="text-base font-bold text-white">Cookie & Privacy Preferences</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#262a35] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-300">
            Customize which cookies and local storage tokens ProfitLoop uses to optimize odds calculation speed and persist your custom bankroll variables.
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-[#0a0e18] rounded-xl border border-[#262a35] flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Strictly Necessary</div>
                <div className="text-xs text-slate-400">Required for authentication, session tokens, and security.</div>
              </div>
              <span className="text-xs font-bold text-[#00ff66] bg-[#052e16] px-2.5 py-1 rounded">Always Active</span>
            </div>

            <div className="p-3 bg-[#0a0e18] rounded-xl border border-[#262a35] flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Dynamic Calculator Engine</div>
                <div className="text-xs text-slate-400">Saves your preferred exchange commissions and stake presets.</div>
              </div>
              <input
                type="checkbox"
                checked={personalization}
                onChange={(e) => setPersonalization(e.target.checked)}
                className="w-5 h-5 accent-[#00ff66] rounded cursor-pointer"
              />
            </div>

            <div className="p-3 bg-[#0a0e18] rounded-xl border border-[#262a35] flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Performance Analytics</div>
                <div className="text-xs text-slate-400">Anonymous metrics to help us optimize real-time OddsMatcher latency.</div>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="w-5 h-5 accent-[#00ff66] rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#0b0f19] border-t border-[#262a35]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-5 py-2 text-xs font-bold uppercase rounded-full bg-[#00ff66] text-[#003911] hover:bg-[#6bff83] transition-all"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
