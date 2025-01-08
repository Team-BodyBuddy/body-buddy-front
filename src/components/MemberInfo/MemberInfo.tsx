//트레이너-회원상세페이지 상단의 정보 컴포넌트
import * as S from "./Styles";
import { DefaultProfile } from "../icons";

const MemberInfo: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <S.Container onClick={onClick}>
            <S.Img>
                <DefaultProfile />
            </S.Img>
            <S.Name>이름</S.Name>
        </S.Container>
    );
};

export default MemberInfo;
