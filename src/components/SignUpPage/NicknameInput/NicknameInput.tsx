//회원가입 페이지 닉네임 입력받는 input
import styled from "styled-components";
import React, { useState } from "react";

interface NicknameInputProps {
  checkNicknameAvailability: (nickname: string) => Promise<boolean>;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

const NicknameInput: React.FC<NicknameInputProps> = ({
  checkNicknameAvailability,
  nickname,
  setNickname,
}) => {
  const [message, setMessage] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsAvailable(null);
    setMessage("");
  };

  const handleCheckAvailability = async () => {
    const available = await checkNicknameAvailability(nickname);
    setIsAvailable(available);
    setMessage(
      available
        ? "*사용 가능한 닉네임 입니다."
        : "*사용 불가능한 닉네임 입니다."
    );
  };

  return (
    <Container>
      <InnerContainer>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button onClick={handleCheckAvailability}>중복확인</Button>
      </InnerContainer>
      <Text style={{ color: isAvailable ? "#4CD964" : "#FF4040" }}>
        {message}
      </Text>
    </Container>
  );
};

export default NicknameInput;

const Container = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const Input = styled.input`
  width: 12.4375rem;
  height: 2.6875rem;
  border-radius: 0.4375rem;
  border: 0.125rem solid #dadada;
  padding-left: 0.625rem;
`;

const Button = styled.button`
  width: 5.875rem;
  height: 2.6875rem;
  border-radius: 0.4375rem;
  border: solid 0.0625rem #40ad00;
  background-color: #40ad00;
  color: #ffffff;

  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.8125rem;
  letter-spacing: -0.02em;
`;

const Text = styled.span`
  font-family: Inter;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 0.75625rem;
  letter-spacing: -0.02em;
  text-align: right;
`;
