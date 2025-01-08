//회원가입 페이지 패스워드 입력받는 input
import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface PasswordInputProps {
  minLength?: number;
  maxLength?: number;
  requiresSpecialChar?: boolean;
  requiresNumber?: boolean;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  minLength = 8,
  maxLength = 12,
  requiresSpecialChar = true,
  requiresNumber = true,
  placeholder,
}) => {
  const [password, setPassword] = useState(""); //비번생성
  const [confirmPassword, setConfirmPassword] = useState(""); //비번재확인
  const [specialCharMessage, setSpecialCharMessage] = useState(""); //특수문자 확인
  const [checkPasswordMessage, setCheckPasswordMessage] = useState(""); //비번일치 확인

  useEffect(() => {
    if(password){
      if (
        password.length < minLength ||
        password.length > maxLength ||
        (requiresSpecialChar && !/[!@#$%^&*]/.test(password)) ||
        (requiresNumber && !/\d/.test(password))) {
        setSpecialCharMessage("*8-12자 영문, 특수문자, 숫자를 포함해주세요!");
      } 
      else {
        setSpecialCharMessage("");
      }
    }

    if(confirmPassword){
      if (password !== confirmPassword) {
        setCheckPasswordMessage("*비밀번호가 일치하지 않습니다.");
      } else {
        setCheckPasswordMessage("");
      }
    }
  }, [password, confirmPassword, minLength, maxLength, requiresSpecialChar, requiresNumber]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Form>
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="8-12자, 영문, 특수문자, 숫자 포함"
        autoComplete="new-password"
      />
      <Text>{specialCharMessage}</Text>

      <Input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="비밀번호 확인"
        autoComplete="new-password"
      />
      <Text>{checkPasswordMessage}</Text>
    </Form>
  );
};

export default PasswordInput;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  gap:5px;
`;

const Input = styled.input`
  width: 311px;
  height: 43px;
  padding-left: 10px;
  border-radius: 7px;
  border: 2px solid #DADADA;

  ::placeholder {
    color: #DEDEDE;
  }
`;

const Text = styled.p`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12.1px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #FF4040;
`;