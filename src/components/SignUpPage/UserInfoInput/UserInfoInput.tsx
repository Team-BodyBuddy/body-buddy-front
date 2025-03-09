//회원가입 페이지 정보 입력받는 input(이름,ID,키,몸무게)
import styled from "styled-components";

interface UserInfoInputProps {
  $width?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInfoInput: React.FC<UserInfoInputProps> = ({
  $width,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Input
      $width={$width}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default UserInfoInput;

const Input = styled.input<{ $width?: string }>`
  width: ${(props) => props.$width};
  height: 2.6875rem;
  padding-left: 0.625rem;
  border-radius: 0.4375rem;
  border: 0.125rem 0 0 0;
  justify: space-between;
  border: 0.125rem solid #dadada;

  ::placeholder {
    color: #dedede;
  }
`;
