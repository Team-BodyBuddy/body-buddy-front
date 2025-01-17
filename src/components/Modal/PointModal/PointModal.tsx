//마이페이지 : 토스트 모달, ID입력창
import React, { useState } from "react";
import * as S from "./Styles";

const PointModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleRequestClick = () => {
        setIsVisible(false);
        setTimeout(onClose, 10);
    };

    return (
        <>
            <S.Overlay isVisible={isVisible} />
            <S.RequestModal isVisible={isVisible}>
                <S.Container>
                    <S.Text>축하합니다.</S.Text>
                    <S.Title>n일 연속 출석</S.Title>
                    <S.Text2>nn경험치를 획득했습니다!</S.Text2>
                    <S.Button onClick={handleRequestClick}>확인</S.Button>
                </S.Container>
            </S.RequestModal>
        </>
    );
};

export default PointModal;
