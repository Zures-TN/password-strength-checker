import { useState } from 'react';
import PasswordInput from './components/PasswordInput/PasswordInput';
import StrengthMeter from './components/StrengthMeter/StrengthMeter';
import CriteriaList from './components/CriteriaList/CriteriaList';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import ScoreDashboard from './components/ScoreDashboard/ScoreDashboard';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { analyzePassword } from './utils/passwordAnalyzer';

function App() {
  const [password, setPassword] = useState('');
  const analysis = analyzePassword(password);

  return (
    <>
      <ThemeToggle />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 light:from-gray-50 light:via-blue-50 light:to-gray-100 flex items-center justify-center p-4 transition-colors duration-300">
        <div className="w-full max-w-2xl">
          <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200 p-8 lg:p-10 space-y-6">
            
            {/* Header Section */}
            <Header />

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-gray-700">
                Enter Password
              </label>
              <PasswordInput password={password} onChange={setPassword} />
            </div>

            {/* Show analysis only when password exists */}
            {password && (
              <>
                {/* Strength Meter */}
                <StrengthMeter strength={analysis.strength} />

                {/* Score Dashboard */}
                <ScoreDashboard analysis={analysis} />

                {/* Criteria Checklist */}
                <CriteriaList criteria={analysis.criteria} />

                {/* Security Warnings */}
                {analysis.warnings.length > 0 && (
                  <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚠️</span>
                      <div className="flex-1">
                        <p className="text-red-400 text-sm font-semibold mb-2">
                          Security Warnings
                        </p>
                        <ul className="space-y-1">
                          {analysis.warnings.map((warning, i) => (
                            <li key={i} className="text-red-300 dark:text-red-300 light:text-red-600 text-xs">
                              • {warning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Password Generator Section */}
            <div className="border-t border-slate-700 dark:border-slate-700 light:border-gray-200 pt-6 mt-6">
              <div className="mb-4">
                <h2 className="text-white dark:text-white light:text-gray-900 font-semibold flex items-center gap-2 text-lg">
                  <span className="text-2xl">⚡</span>
                  Generate Secure Password
                </h2>
                <p className="text-slate-400 dark:text-slate-400 light:text-gray-600 text-xs mt-1">
                  Create a cryptographically strong password
                </p>
              </div>
              <PasswordGenerator onGenerate={setPassword} />
            </div>

            {/* Footer */}
            <Footer />
          </div>

          {/* Info Cards Below Main Card */}
          {password && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-800/30 dark:bg-slate-800/30 light:bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200">
                <h3 className="text-slate-300 dark:text-slate-300 light:text-gray-800 font-semibold text-sm mb-2">
                  💡 Security Tips
                </h3>
                <ul className="text-slate-400 dark:text-slate-400 light:text-gray-600 text-xs space-y-1">
                  <li>• Use unique passwords for each account</li>
                  <li>• Enable two-factor authentication</li>
                  <li>• Use a password manager</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/30 dark:bg-slate-800/30 light:bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 dark:border-slate-700/50 light:border-gray-200">
                <h3 className="text-slate-300 dark:text-slate-300 light:text-gray-800 font-semibold text-sm mb-2">
                  🎯 Best Practices
                </h3>
                <ul className="text-slate-400 dark:text-slate-400 light:text-gray-600 text-xs space-y-1">
                  <li>• Minimum 12+ characters recommended</li>
                  <li>• Avoid personal information</li>
                  <li>• Change passwords regularly</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
