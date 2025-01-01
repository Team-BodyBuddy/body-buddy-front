import React from "react";
import * as S from "./Styles";
import { Back } from "../../components/icons"

interface BackButtonProps {
  onClick: () => void; // 뒤로가기 동작
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return <S.BackButton onClick={onClick}><Back /></S.BackButton>;
};

export default BackButton;
