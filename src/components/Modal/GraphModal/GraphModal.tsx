//트레이너-회원상세페이지에서 띄울 인바디 모달창
import { useEffect, useState } from "react";
import * as S from "./Styles";

interface GraphModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const GraphModal: React.FC<GraphModalProps> = ({ onClose, children }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsClosing(true);
        }
    };

    // 애니메이션이 종료된 후 모달을 닫는 함수를 호출
    useEffect(() => {
        if (isClosing) {
            // 애니메이션이 끝날 때까지 기다린 후 onClose 호출
            const timer = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300); // 애니메이션이 끝난 후 500ms 뒤에 모달 닫기

            // 컴포넌트 언마운트 시 타이머 정리
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    return (
        <S.ModalContainer onClick={handleBackgroundClick} $isClosing={isClosing}>
            <S.ModalContent $isClosing={isClosing}>{children}</S.ModalContent>
        </S.ModalContainer>
    );
};

export default GraphModal;
