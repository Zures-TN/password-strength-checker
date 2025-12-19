import { STRENGTH_LEVELS } from '../../utils/constants';

export default function StrengthMeter({ strength }) {
  const level = STRENGTH_LEVELS[strength];
  const percentage = (strength / 5) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: level.color,
          }}
        />
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">Strength:</span>
        <span className="font-semibold flex items-center gap-2" style={{ color: level.color }}>
          <span>{level.emoji}</span>
          {level.label}
        </span>
      </div>
    </div>
  );
}
