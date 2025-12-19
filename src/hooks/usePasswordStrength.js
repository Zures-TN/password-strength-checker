import { useState, useEffect } from 'react';
import { analyzePassword } from '../utils/passwordAnalyzer';

export function usePasswordStrength(password) {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const result = analyzePassword(password);
    setAnalysis(result);
  }, [password]);

  return analysis;
}
