import { Shield, Github } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/20">
        <Shield className="text-white" size={40} />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
        Password Strength Checker
      </h1>
      <p className="text-slate-400 text-sm mb-4">
        Analyze security • Generate strong passwords • Stay protected
      </p>
      <a 
        href="https://github.com/Zures-TN/password-strength-checker"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
      >
        <Github size={16} />
        View on GitHub
      </a>
    </div>
  );
}
