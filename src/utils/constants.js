export const PASSWORD_CRITERIA = {
  MIN_LENGTH: 8,
  HAS_UPPERCASE: /[A-Z]/,
  HAS_LOWERCASE: /[a-z]/,
  HAS_NUMBER: /[0-9]/,
  HAS_SPECIAL: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
};

export const STRENGTH_LEVELS = {
  0: { label: 'Very Weak', color: '#dc3545', bgColor: 'bg-red-500', emoji: '😱' },
  1: { label: 'Weak', color: '#fd7e14', bgColor: 'bg-orange-500', emoji: '😟' },
  2: { label: 'Fair', color: '#ffc107', bgColor: 'bg-yellow-500', emoji: '😐' },
  3: { label: 'Good', color: '#28a745', bgColor: 'bg-green-500', emoji: '😊' },
  4: { label: 'Strong', color: '#20c997', bgColor: 'bg-teal-500', emoji: '💪' },
  5: { label: 'Very Strong', color: '#00d4aa', bgColor: 'bg-emerald-500', emoji: '🔒' },
};

export const COMMON_PATTERNS = [
  'password', '12345678', 'qwerty', 'abc123', 'letmein',
  'monkey', 'admin', 'welcome', 'login', '123456'
];
