// 로그인 페이지
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import { Logo } from "../../../components/icons";
import NextButton from "../../../components/SignUpPage/NextButton/NextButton";
import AuthInput from "../../../components/SignUpPage/AuthInput/AuthInput";
import PageLink from "../../../components/SignUpPage/PageLink/PageLink";
import { Login } from "../../../apis/Login/loginApi";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log("======================");
  console.log("ID:", loginId);
  console.log("Password:", password);

  const handleLogin = async () => {
    console.log("로그인 버튼");
    try {
      const result = await Login(loginId, password);
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    // if (id === userId && password === userPassword) {
    //     navigate("/loading");
    // } else {
    //     setErrorMessage("*아이디 또는 비밀번호가 일치하지 않습니다.");
    // }
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
        <S.LabelContainer>아이디</S.LabelContainer>
        <form>
          <AuthInput
            placeholder="아이디를 입력해 주세요"
            errorMessage={errorMessage}
            value={loginId}
            onChange={(e) => {
              setLoginId(e.target.value);
              setErrorMessage("");
            }}
          />
        </form>
        <S.LabelContainer>비밀번호</S.LabelContainer>
        <form>
          <AuthInput
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

      <S.Footer>
        <PageLink $textcolor="#979797" to="/findId">
          아이디 찾기 / 비밀번호 찾기
        </PageLink>
        <PageLink $textcolor="#40AD00" to="/trainerSignup">
          회원 가입
        </PageLink>
      </S.Footer>
    </S.Container>
  );
};

export default LoginPage;
