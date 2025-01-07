//아이디,비밀번호 입력 부분
import styled from "styled-components"

interface AuthInputProps{
    label: string;
    placeholder: string;
    errorMessage?: string;
    type?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({ label, placeholder, errorMessage, type = "text"},) => {
    return(
        <InputContainer>
            <Text>{label}{errorMessage && <Alert>{errorMessage}</Alert>}</Text>
            <Input placeholder={placeholder} type={type} />
        </InputContainer>
    )       
}

export default AuthInput;

const InputContainer=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap:15px;
    margin-bottom: 17px;
`
const Text = styled.div`
    font-weight: 600;
    font-size: 14px;
    display:flex;
    justify-content: space-between;
`
const Alert = styled.div`
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.13px;
    color: #FF4040;
`
const Input = styled.input`
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;

    height: 47px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 86px;
    padding: 10px;
    color:rgb(0, 0, 0);
    font-size: 14px;
    padding-left:20px;

  ::placeholder {
    color: #DEDEDE;
  }
`;