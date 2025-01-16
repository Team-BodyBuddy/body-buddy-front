//트레이너 마이페이지
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";

const TrainerMyPage: React.FC = () => {
        const navigate = useNavigate();
    
        const handleExitClick = () => {
            navigate("/my/exit");
        };

    return (
        <S.Container>
            <S.Img>이미지</S.Img>
            <S.Title>이름</S.Title>
            <S.Title>(나이,남)</S.Title>
            <S.Text>ID: </S.Text>
            <S.Text>GYM </S.Text>
            <S.Text onClick={handleExitClick}>
                로그아웃 / 회원 탈퇴
            </S.Text>
        </S.Container>
    );
};

export default TrainerMyPage;