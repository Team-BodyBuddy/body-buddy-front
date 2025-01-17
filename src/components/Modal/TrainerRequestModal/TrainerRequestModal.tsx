//마이페이지 : 토스트 모달, ID입력창
import React, { useState } from "react";
import * as S from "./Styles";

const TrainerRequestModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleRequestClick = () => {
        setIsVisible(false);
        setTimeout(onClose, 500);
    };

    return (
        <>
            <S.Overlay isVisible={isVisible} />
            <S.RequestModal isVisible={isVisible}>
                <S.Container>
                    <S.infoContainer>
                        <S.Img>이미지</S.Img>
                        <S.Title>
                            이름(나이,남)<S.Text>1990-09-48</S.Text>
                        </S.Title>
                    </S.infoContainer>
                    <S.BtnBar>
                        <S.SuButton onClick={handleRequestClick}>수락</S.SuButton>
                        <S.GuButton onClick={handleRequestClick}>거절</S.GuButton>
                    </S.BtnBar>
                </S.Container>
            </S.RequestModal>
        </>
    );
};

export default TrainerRequestModal;
