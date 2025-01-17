//트레이너 마이페이지
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";
import TrainerRequestModal from "../../../components/Modal/TrainerRequestModal/TrainerRequestModal";
import { useState } from "react";

const TrainerMyPage: React.FC = () => {
    const navigate = useNavigate();
    const [ShowModal, setShowModal] = useState(false);
    const handleExitClick = () => {
        navigate("/my/exit");
    };

    const handleTrainerClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <S.Container>
            <S.Img onClick={handleTrainerClick}>이미지</S.Img>
            <S.Title>이름(나이,남)</S.Title>
            <S.Text2>ID:12345678 </S.Text2>
            <S.Text2>GYM </S.Text2>
            <S.Text onClick={handleExitClick}>로그아웃 / 회원 탈퇴</S.Text>
            {ShowModal && <TrainerRequestModal onClose={handleCloseModal} />}
        </S.Container>
    );
};

export default TrainerMyPage;
