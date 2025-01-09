//회원가입 페이지 닉네임 입력받는 input
import styled from "styled-components"
import React, { useState } from "react";

interface NicknameInputProps {
  checkNicknameAvailability: (nickname: string) => Promise<boolean>;
}

const NicknameInput: React.FC<NicknameInputProps> = ({ checkNicknameAvailability }) => {
  const [nickname, setNickname] = useState("");
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
        setMessage(available ? "*사용 가능한 닉네임 입니다." : "*사용 불가능한 닉네임 입니다.");
    };

  return (
    <Container>
        <InnerContainer>
            <Input
            type="text"
            value={nickname}
            onChange={handleChange}
            />
            <Button onClick={handleCheckAvailability}>중복확인</Button>
        </InnerContainer>
      <Text style={{ color: isAvailable ? "#4CD964" : "#FF4040" }}>{message}</Text>
    </Container>
  );
};

export default NicknameInput;

const Container = styled.div`
    
`

const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Input = styled.input`
  width: 199px;
  height: 43px;
  border-radius: 7px;
  border: 2px solid #DADADA;
  padding-left:10px;
`

const Button = styled.button`
  width: 94px;
  height: 43px;
  border-radius: 7px;
  border: solid 1px #40AD00; 
  background-color:#40AD00;
  color:#ffffff;

  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
`
const Text = styled.span`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  
  line-height: 12.1px;
  letter-spacing: -0.02em;
  text-align: right;
`