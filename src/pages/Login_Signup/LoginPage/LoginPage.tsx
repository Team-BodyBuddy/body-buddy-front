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
    console.log("로그인 버튼 클릭");

    try {
      // 로그인 API 호출
      const result = await Login(loginId, password);

      // 서버 응답에서 토큰 추출
      const accessToken = result?.accessToken;
      const refreshToken = result?.refreshToken;

      if (accessToken && refreshToken) {
        // 토큰을 localStorage에 저장
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        //로그인 id 로컬스토리지 저장
        localStorage.setItem("loginId", loginId);

        console.log("로그인 성공! 토큰, 로그인 아이디 저장 완료");

        // 로그인 후 페이지 이동 (예: 홈 화면)
        navigate("/loading");
      } else {
        setErrorMessage("로그인 실패: 토큰을 받을 수 없습니다.");
      }
    } catch (error) {
      console.error("로그인 에러:", error);
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
