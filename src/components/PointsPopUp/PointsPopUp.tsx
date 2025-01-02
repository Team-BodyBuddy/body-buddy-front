import React from "react";
import * as S from "./Styles";

interface PointsPopUpProps {
    isVisible: boolean;
    onClose: () => void;
}

const PointsPopUp: React.FC<PointsPopUpProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null; // 팝업이 보이지 않을 때 렌더링하지 않음

    return (
        <S.PopupBackground>
            <S.PopupBox>
                <S.PopupText>포인트가 부족합니다</S.PopupText>
                <S.ButtonContainer>
                    <S.PopupButtonClose onClick={onClose}>닫기</S.PopupButtonClose>
                </S.ButtonContainer>
            </S.PopupBox>
        </S.PopupBackground>
    );
};

export default PointsPopUp;
