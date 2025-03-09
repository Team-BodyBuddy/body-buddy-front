import React, { useState } from "react";
import { useTrainers } from "../../react-query/query/bodyBuddy/useProfileQuery";
import * as S from "./Styles";

interface ListSectionProps {
  onListItemClick: (trainerId: number) => void; 
}

const ListSection: React.FC<ListSectionProps> = ({ onListItemClick }) => {
    const [gymId] = useState(1); 
    const { data: trainers, isLoading, isError } = useTrainers(gymId); 

    if (isLoading) return <p>로딩 중...</p>;
    if (isError || !trainers) return <p>트레이너 목록을 불러올 수 없습니다.</p>;

    return (
        <S.ListContainer>
            {trainers.map((trainer) => (
                <S.ListItem key={trainer.id} onClick={() => onListItemClick(trainer.id)}> 
                    <S.ProfileImage />
                    <S.ProfileText>
                        {trainer.realName} ({trainer.age}세)
                    </S.ProfileText>
                </S.ListItem>
            ))}
        </S.ListContainer>
    );
};

export default ListSection;
