import { PASSWORD_CRITERIA, COMMON_PATTERNS } from './constants';

export const analyzePassword = (password) => {
  if (!password) {
    return {
      score: 0,
      strength: 0,
      criteria: getCriteria(password),
      entropy: 0,
      crackTime: 'Instant',
      warnings: []
    };
  }

  const criteria = getCriteria(password);
  const metCriteria = Object.values(criteria).filter(Boolean).length;
  const warnings = getWarnings(password);
  
  // Calculate score (0-5)
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (metCriteria >= 3) strength++;
  if (metCriteria >= 4) strength++;
  if (password.length >= 16 && metCriteria === 4) strength++;

  const entropy = calculateEntropy(password);
  const crackTime = estimateCrackTime(entropy);

  return {
    score: Math.round((metCriteria / 4) * 100),
    strength: Math.min(strength, 5),
    criteria,
    entropy,
    crackTime,
    warnings
  };
};

const getCriteria = (password) => ({
  length: password.length >= PASSWORD_CRITERIA.MIN_LENGTH,
  uppercase: PASSWORD_CRITERIA.HAS_UPPERCASE.test(password),
  lowercase: PASSWORD_CRITERIA.HAS_LOWERCASE.test(password),
  number: PASSWORD_CRITERIA.HAS_NUMBER.test(password),
  special: PASSWORD_CRITERIA.HAS_SPECIAL.test(password),
});

const getWarnings = (password) => {
  const warnings = [];
  
  if (COMMON_PATTERNS.some(p => password.toLowerCase().includes(p))) {
    warnings.push('Contains common password pattern');
  }
  if (/(\d)\1{2,}/.test(password)) {
    warnings.push('Contains repeating numbers');
  }
  if (/([a-z])\1{2,}/i.test(password)) {
    warnings.push('Contains repeating characters');
  }
  
  return warnings;
};

const calculateEntropy = (password) => {
  let charSetSize = 0;
  if (/[a-z]/.test(password)) charSetSize += 26;
  if (/[A-Z]/.test(password)) charSetSize += 26;
  if (/[0-9]/.test(password)) charSetSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charSetSize += 33;

  return Math.round(password.length * Math.log2(charSetSize) * 10) / 10;
};

const estimateCrackTime = (entropy) => {
  const guessesPerSecond = 1e9;
  const seconds = Math.pow(2, entropy) / (2 * guessesPerSecond);

  if (seconds < 1) return 'Instant';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  return `${Math.round(seconds / 31536000)} years`;
};
