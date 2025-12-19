import { Check, X } from 'lucide-react';

export default function CriteriaList({ criteria }) {
  const criteriaList = [
    { key: 'length', label: 'At least 8 characters' },
    { key: 'uppercase', label: 'Uppercase letter (A-Z)' },
    { key: 'lowercase', label: 'Lowercase letter (a-z)' },
    { key: 'number', label: 'Number (0-9)' },
    { key: 'special', label: 'Special character (!@#$...)' },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-300 mb-3">Requirements:</h3>
      {criteriaList.map((item) => {
        const met = criteria[item.key];
        return (
          <div key={item.key} className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              met ? 'bg-green-500' : 'bg-slate-700'
            }`}>
              {met ? <Check size={14} className="text-white" /> : <X size={14} className="text-slate-500" />}
            </div>
            <span className={`text-sm ${met ? 'text-green-400' : 'text-slate-500'}`}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
