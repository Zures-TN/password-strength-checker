import { TrendingUp, Zap, Clock } from 'lucide-react';

export default function ScoreDashboard({ analysis }) {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-lime-400';
    if (score >= 40) return 'text-yellow-400';
    if (score >= 20) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {/* Score */}
      <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingUp size={16} className="text-blue-400" />
          <p className="text-slate-400 text-xs font-semibold">SCORE</p>
        </div>
        <p className={`text-3xl font-bold ${getScoreColor(analysis.score)}`}>
          {analysis.score}
        </p>
        <p className="text-slate-500 text-xs mt-1">out of 100</p>
      </div>

      {/* Entropy */}
      <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap size={16} className="text-yellow-400" />
          <p className="text-slate-400 text-xs font-semibold">ENTROPY</p>
        </div>
        <p className="text-3xl font-bold text-white">
          {analysis.entropy}
        </p>
        <p className="text-slate-500 text-xs mt-1">bits</p>
      </div>

      {/* Crack Time */}
      <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock size={16} className="text-purple-400" />
          <p className="text-slate-400 text-xs font-semibold">CRACK</p>
        </div>
        <p className="text-sm font-bold text-white leading-tight mt-2">
          {analysis.crackTime}
        </p>
      </div>
    </div>
  );
}
