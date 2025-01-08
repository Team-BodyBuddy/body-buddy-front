//마이페이지 : 토스트 모달, ID입력창
import React, { useState } from 'react';
import * as S from "./Styles";

const Toast: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [inputValue, setInputValue] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleRequestClick = () => {
        console.log('ID:', inputValue);
        setIsVisible(false);
        setTimeout(onClose, 500); 
    };

    return (
        <>
            <S.Overlay isVisible={isVisible} />
            <S.ToastContainer isVisible={isVisible}>
                <S.Text>트레이너 ID 입력</S.Text>
                <S.Input 
                    type="text" 
                    placeholder="여기에 트레이너 ID를 입력하세요!" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
                <S.Button onClick={handleRequestClick}>인증 요청</S.Button>
            </S.ToastContainer>
        </>
    );
};

export default Toast;