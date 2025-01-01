import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";

interface ListSectionProps {
  onListItemClick: () => void;
}

const ListSection: React.FC<ListSectionProps> = ({ onListItemClick }) => {
    const navigate = useNavigate();

    const handleProfileClick = (profile: { name: string; age: number; gender: string }) => {
        navigate("/portfolio", { state: profile }); // 상태 전달
    };

    return (
        <S.ListContainer>
            {Array.from({ length: 15 }).map((_, index) => {
                const profile = {
                    name: `김건강${index + 1}`,
                    age: 27,
                    gender: "남",
                };

                return (
                    <S.ListItem key={index} onClick={() => handleProfileClick(profile)}>
                        <S.ProfileImage />
                        <S.ProfileText>
                            {profile.name}({profile.age}세, {profile.gender})
                        </S.ProfileText>
                    </S.ListItem>
                );
            })}
        </S.ListContainer>
    );
};

export default ListSection;
