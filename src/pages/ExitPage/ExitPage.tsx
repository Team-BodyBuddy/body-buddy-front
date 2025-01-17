import React, { useState } from "react";
import * as S from "./Styles";
import BackButton from "../../components/BackButton/BackButton";
import Logout from "../../components/ExitPage/Logout/Logout";
import Exit from "../../components/ExitPage/Exit/Exit";

const ExitPage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<"logout" | "exit" | null>(null);

    const handleBackClick = () => {
        console.log("뒤로가기 클릭됨");
    };

    const handleOptionClick = (option: "logout" | "exit") => {
        setSelectedOption(option);
    };

    return (
        <S.Container>
            <S.Bar>
                <BackButton onClick={handleBackClick} />
                <S.Title>로그아웃/회원탈퇴</S.Title>
            </S.Bar>
            <S.Tap selectedOption={selectedOption}>
                <S.Text
                    onClick={() => handleOptionClick("logout")}
                    selected={selectedOption === "logout"}
                >
                    로그아웃
                </S.Text>
                <S.Text
                    onClick={() => handleOptionClick("exit")}
                    selected={selectedOption === "exit"}
                >
                    회원탈퇴
                </S.Text>
            </S.Tap>
            {selectedOption === "logout" && <Logout />}
            {selectedOption === "exit" && <Exit />}
        </S.Container>
    );
};

export default ExitPage;