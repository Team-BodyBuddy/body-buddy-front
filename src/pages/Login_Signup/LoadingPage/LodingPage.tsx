import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import { TitleLoading } from "../../../components/icons";

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // 이동하려는 페이지 경로로 변경하세요
    }, 3000); // 3초 후에 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <S.Container>
      <S.Logo>
        <TitleLoading />
      </S.Logo>
    </S.Container>
  );
};

export default LoadingPage;
