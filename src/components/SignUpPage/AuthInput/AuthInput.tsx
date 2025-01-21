//로그인 페이지 아이디,비밀번호 입력 부분
import styled from "styled-components";

interface AuthInputProps {
    placeholder: string;
    errorMessage?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({ placeholder, errorMessage, type = "text", value, onChange }) => {
    return (
        <InputContainer>
            <Text>{errorMessage && <Alert>{errorMessage}</Alert>}</Text>
            <Input placeholder={placeholder} type={type} value={value} onChange={onChange} />
        </InputContainer>
    );
};

export default AuthInput;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.9375rem;
    margin-bottom: 1.0625rem;
`;

const Text = styled.span`
    position: absolute;
    top: 20.7rem;
    left: 8rem;
`;

const Alert = styled.span`
    font-family: Pretendard;
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 0.82rem;
    color: #ff4040;
`;

const Input = styled.input`
    font-family: Pretendard;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 0.969375rem;

    height: 2.9375rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5.375rem;
    padding: 0.625rem;
    color: rgb(0, 0, 0);
    font-size: 0.875rem;
    padding-left: 1.25rem;

    ::placeholder {
        color: #dedede;
    }
`;
