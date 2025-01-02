import React from "react";
import * as S from "./Styles";

interface PopUpProps {
    isVisible: boolean;
    onClose: () => void;
    onOptionSelect: (option: "yes" | "no") => void;
}

const PopUp: React.FC<PopUpProps> = ({ isVisible, onClose, onOptionSelect }) => {
    if (!isVisible) return null; // 팝업이 보이지 않을 때 렌더링하지 않음

    const handleButtonClick = (option: "yes" | "no") => {
        onOptionSelect(option); // 선택된 옵션 전달
        onClose(); // 팝업 닫기
    };

    return (
        <S.PopupBackground>
            <S.PopupBox>
                <S.PopupText>구매하시겠습니까?</S.PopupText>
                <S.ButtonContainer>
                    <S.PopupButton onClick={() => handleButtonClick("yes")}>
                        예
                    </S.PopupButton>
                    <S.PopupButton onClick={() => handleButtonClick("no")}>
                        아니오
                    </S.PopupButton>
                </S.ButtonContainer>
            </S.PopupBox>
        </S.PopupBackground>
    );
};

export default PopUp;
