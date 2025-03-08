import React from "react";
import * as S from "./Styles";
import { Back } from "../../components/icons"

interface BackButtonProps {
  onClick: () => void; 
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return <S.BackButton onClick={onClick}><Back /></S.BackButton>;
};

export default BackButton;
