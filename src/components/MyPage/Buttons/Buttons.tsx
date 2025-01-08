import React, { useState } from "react";
import * as S from "./Styles";
import Toast from "../Toast/Toast";

const Button: React.FC = () => {
    const [showToast, setShowToast] = useState(false);

    const handleTrainerClick = () => {
        setShowToast(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    return (
        <>
            <S.Container>
                <S.Btn onClick={handleTrainerClick}>트레이너 ID 입력</S.Btn>
                <S.Btn>인바디 PDF 등록</S.Btn>
            </S.Container>
            {showToast && <Toast onClose={handleCloseToast} />}
        </>
    );
};

export default Button;