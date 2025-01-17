//회원가입 페이지 정보 입력받는 input(이름,ID,키,몸무게)
import styled from "styled-components"

interface UserInfoInputProps{
    $width?: string;
    placeholder?: string;
}

const UserInfoInput: React.FC<UserInfoInputProps> = ({$width, placeholder}) => {
    return <Input $width={$width} placeholder={placeholder} />;
};

export default UserInfoInput;


const Input = styled.input<{$width?: string}>`
    width: ${(props) => props.$width};
    height: 43px;
    padding-left:10px;
    border-radius: 7px;
    border: 2px 0px 0px 0px;
    justify: space-between;
    opacity: 0px;
    border: 2px solid #DADADA;

  ::placeholder {
    color: #DEDEDE;
  }
`;