// 로그인 페이지
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import { Logo } from "../../../components/icons";
import NextButton from "../../../components/SignUpPage/NextButton/NextButton";
import AuthInput from "../../../components/SignUpPage/AuthInput/AuthInput";
import PageLink from "../../../components/SignUpPage/PageLink/PageLink";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = () => {
        const userId = "id1234";
        const userPassword = "pass1234";

        console.log("ID:", id);
        console.log("Password:", password);

        if (id === userId && password === userPassword) {
            navigate("/loading");
        } else {
            setErrorMessage("*아이디 또는 비밀번호가 일치하지 않습니다.");
        }
    };

    return (
        <S.Container>
            <S.Intro>
                <S.IntroText>당신의 가장 가까운 친구,</S.IntroText>
                <S.Title>
                    <Logo></Logo>
                </S.Title>
            </S.Intro>

            <S.CenterContainer>
                <form>
                    <AuthInput
                        label="아이디"
                        placeholder="아이디를 입력해 주세요"
                        errorMessage={errorMessage}
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value);
                            setErrorMessage("");
                        }}
                    />
                    <AuthInput
                        label="비밀번호"
                        placeholder="비밀번호를 입력해 주세요"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrorMessage("");
                        }}
                    />
                </form>
                <NextButton onClick={handleLogin} $bgcolor="#40AD00">
                    로그인
                </NextButton>
            </S.CenterContainer>

            <PageLink $textcolor="#979797" text="아이디 찾기 / 비밀번호 찾기" to="/findId" className="findIdPassword"></PageLink>

            <PageLink $textcolor="#40AD00" text="회원 가입" to="/trainerSignup" className="Signup"></PageLink>
        </S.Container>
    );
};

export default LoginPage;
