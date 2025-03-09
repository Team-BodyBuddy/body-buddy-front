//회원가입 페이지 패스워드 입력받는 input
import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface PasswordInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;

  minLength?: number;
  maxLength?: number;
  requiresSpecialChar?: boolean;
  requiresNumber?: boolean;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,

  minLength = 8,
  maxLength = 12,
  requiresSpecialChar = true,
  requiresNumber = true,
  placeholder,
}) => {
  const [specialCharMessage, setSpecialCharMessage] = useState(""); //특수문자 확인
  const [checkPasswordMessage, setCheckPasswordMessage] = useState(""); //비번일치 확인

  useEffect(() => {
    if (password) {
      if (
        password.length < minLength ||
        password.length > maxLength ||
        (requiresSpecialChar && !/[!@#$%^&*]/.test(password)) ||
        (requiresNumber && !/\d/.test(password))
      ) {
        setSpecialCharMessage("*8-12자 영문, 특수문자, 숫자를 포함해주세요!");
      } else {
        setSpecialCharMessage("");
      }
    }

    if (confirmPassword) {
      if (password !== confirmPassword) {
        setCheckPasswordMessage("*비밀번호가 일치하지 않습니다.");
      } else {
        setCheckPasswordMessage("");
      }
    }

    // // 확인용
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmPassword);
  }, [
    password,
    confirmPassword,
    minLength,
    maxLength,
    requiresSpecialChar,
    requiresNumber,
  ]);

  return (
    <Form>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="8-12자, 영문, 특수문자, 숫자 포함"
        autoComplete="new-password"
      />
      <Text>{specialCharMessage}</Text>

      <Input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="비밀번호 확인"
        autoComplete="new-password"
      />
      <Text>{checkPasswordMessage}</Text>
    </Form>
  );
};

export default PasswordInput;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;

const Input = styled.input`
  width: 19.4375rem;
  height: 2.6875rem;
  padding-left: 0.625rem;
  border-radius: 0.4375rem;
  border: 0.125rem solid #dadada;

  ::placeholder {
    color: #dedede;
  }
`;

const Text = styled.p`
  font-family: Inter;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 0.75625rem;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ff4040;
`;
