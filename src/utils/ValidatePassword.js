// 비밀번호 유효성 검사
export const validatePassword = (passsword) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passsword);
