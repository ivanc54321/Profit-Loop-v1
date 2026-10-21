import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenCalculator }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const totalDuration = 75; // 1 min 15 sec demo walk-through

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Determining current presentation chapter
  let chapterTitle = 'Introduction: What is Matched Betting?';
  let chapterStep = 1;
  if (currentTime > 15 && currentTime <= 40) {
    chapterTitle = 'Step 1: The Qualifying Bet (Minimizing Cost to ~£0.20)';
    chapterStep = 2;
  } else if (currentTime > 40 && currentTime <= 60) {
    chapterTitle = 'Step 2: The Free Bet (Converting £50 Promo into £37.50 Cash)';
    chapterStep = 3;
  } else if (currentTime > 60) {
    chapterTitle = 'Step 3: Systematic Compounding & 0% Commission Scaling';
    chapterStep = 4;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f131d] border border-[#262a35] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#262a35] bg-[#0a0e18]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-extrabold bg-[#052e16] text-[#00ff66] border border-[#00ff66]/30">
              HD 1080p
            </span>
            <span className="text-sm font-semibold text-white truncate max-w-md">
              How to make money with Profit Loop • Matched Betting Masterclass
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#262a35] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative w-full aspect-video bg-[#080b12] flex flex-col items-center justify-center overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00ff66_1px,transparent_1px)] [background-size:24px_24px]" />
          
          {/* Presentation Slide Content */}
          <div className="relative z-10 w-full max-w-2xl px-6 py-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#052e16] border border-[#00ff66]/30 text-[#00ff66] text-xs font-bold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CHAPTER {chapterStep} OF 4</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              {chapterTitle}
            </h2>

            {chapterStep === 1 && (
              <div className="space-y-4 max-w-lg mx-auto">
                <p className="text-slate-300 text-sm">
                  Bookmakers give away over <strong className="text-white">£779 in free bet offers</strong> to attract new customers. Matched betting uses mathematical hedging to extract this money completely risk-free.
                </p>
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#111827] rounded-xl border border-[#262a35] text-left text-xs">
                  <div>
                    <div className="text-slate-400">Back Bet</div>
                    <div className="text-white font-bold">You bet on an outcome to happen at a bookmaker (e.g. Arsenal to win).</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Lay Bet</div>
                    <div className="text-[#00ff66] font-bold">You bet against that outcome at a betting exchange (Arsenal NOT to win).</div>
                  </div>
                </div>
              </div>
            )}

            {chapterStep === 2 && (
              <div className="space-y-3 max-w-lg mx-auto">
                <p className="text-slate-300 text-xs">
                  We place a £10 qualifying bet on a match where bookmaker back odds closely match exchange lay odds.
                </p>
                <div className="p-3 bg-[#111827] rounded-xl border border-[#262a35] text-xs font-mono space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bookmaker: Bet £10 @ 2.0</span>
                    <span className="text-white">Returns £20.00 if win</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Exchange: Lay £9.80 @ 2.04</span>
                    <span className="text-[#00ff66]">Liability £10.19</span>
                  </div>
                  <div className="pt-2 border-t border-[#262a35] flex justify-between font-bold text-slate-200">
                    <span>Hedging Net Difference:</span>
                    <span className="text-amber-400">-£0.19 (Qualifying Cost)</span>
                  </div>
                </div>
                <div className="text-[11px] text-[#00ff66]">✓ Promo Unlocked: Bookmaker credits £50 in Free Bets!</div>
              </div>
            )}

            {chapterStep === 3 && (
              <div className="space-y-3 max-w-lg mx-auto">
                <p className="text-slate-300 text-xs">
                  Now we repeat the process using the £50 promo bonus! Because the bookmaker provided the stake, the return is pure profit.
                </p>
                <div className="p-4 bg-[#052e16] rounded-xl border border-[#00ff66] text-center space-y-1">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-[#b9ccb5]">
                    Guaranteed Mathematical Return
                  </div>
                  <div className="text-3xl font-extrabold text-[#00ff66]">
                    Profit: £37.50+
                  </div>
                  <div className="text-xs text-white">
                    Whether the team wins, loses, or draws. 100% hedge verified.
                  </div>
                </div>
              </div>
            )}

            {chapterStep === 4 && (
              <div className="space-y-4 max-w-lg mx-auto">
                <p className="text-slate-300 text-sm">
                  With 50+ bookmakers and over 60 reload offers weekly, ProfitLoop members generate £300 to £1,500+ every single month.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCalculator();
                    }}
                    className="px-4 py-2 bg-[#00ff66] text-[#003911] text-xs font-extrabold rounded-full hover:bg-[#6bff83] transition-all"
                  >
                    Open Live Calculator
                  </button>
                  <button
                    onClick={() => {
                      setCurrentTime(0);
                      setIsPlaying(true);
                    }}
                    className="px-4 py-2 bg-[#1f2937] text-white text-xs font-bold rounded-full hover:bg-[#374151] transition-all flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Replay Video
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Center Play Overlay on Pause */}
          {!isPlaying && currentTime < totalDuration && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute z-20 w-16 h-16 rounded-full bg-[#00ff66] text-[#003911] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          )}
        </div>

        {/* Video Player Bottom Control Bar */}
        <div className="px-5 py-3 bg-[#0a0e18] border-t border-[#262a35] space-y-2">
          {/* Progress Bar */}
          <div
            className="w-full h-1.5 bg-[#1c1f2a] rounded-full overflow-hidden cursor-pointer relative"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              setCurrentTime(Math.floor(pos * totalDuration));
            }}
          >
            <div
              className="h-full bg-[#00ff66] transition-all duration-300"
              style={{ width: `${(currentTime / totalDuration) * 100}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-[#00ff66] transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-[#00ff66] transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono tabular-nums text-slate-400">
                {formatTime(currentTime)} / {formatTime(totalDuration)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-[#00ff66] bg-[#052e16] px-2 py-0.5 rounded border border-[#00ff66]/30">
                VALIDATED HEDGE
              </span>
              <button
                onClick={() => {
                  setCurrentTime(0);
                  setIsPlaying(true);
                }}
                title="Restart"
                className="hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
