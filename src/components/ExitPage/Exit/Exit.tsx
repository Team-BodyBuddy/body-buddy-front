//마이페이지 : 회원 탈퇴
import React from "react";
import { useEffect, useState } from "react";
import * as S from "./Styles";
import { ExitLogo } from "../../icons";
import { UserExit } from "../../../apis/Exit/exitApi";
import axios from "axios";

const Exit: React.FC = () => {
  const [loginId, setLoginId] = useState<string | null>(null);

  // 토큰 가져오기(로컬 스토리지)
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const storedloginId = localStorage.getItem("loginId");
    console.log("=====================================");
    if (accessToken) {
      console.log("Access Token:", accessToken); // 콘솔에 accessToken 출력
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }
    if (refreshToken) {
      console.log("Refresh Token:", refreshToken); // 콘솔에 refreshToken 출력
    }
    if (storedloginId) {
      console.log("Login ID:", storedloginId); // 콘솔에 loginId 출력
      setLoginId(storedloginId);
    }
  }, []);

  const handleExitClick = () => {
    console.log("회원탈퇴 버튼 클릭됨");
    if (loginId) {
      try {
        UserExit(loginId);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("로그인 아이디를 찾을 수 없습니다.");
    }
  };

  return (
    <S.Container>
      <S.Img>
        <ExitLogo />
      </S.Img>
      <S.Title>정말 탈퇴하시겠어요?</S.Title>
      <S.Text>
        탈퇴 버튼 선택시,
        <br />
        계정은 삭제되며 복구되지 않습니다.
      </S.Text>
      <S.Btn onClick={handleExitClick}>회원탈퇴</S.Btn>
    </S.Container>
  );
};

export default Exit;
