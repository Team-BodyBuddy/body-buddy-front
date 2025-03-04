import { TodayBad, TodayGood, TodaySo } from "../icons";
import * as S from "./Styles";

interface TodayScoreProps {
    onClick: (score: "BAD" | "SOSO" | "GOOD", memberId: number, date: string) => void;
    memberId: number;
    date: string;
}

const TodayScore: React.FC<TodayScoreProps> = ({ onClick, memberId, date }) => {
    return (
        <S.TodayScoreContainer>
            <S.Text>오늘의 평가</S.Text>
            <S.ButtonWrapper>
                <TodayBad onClick={() => onClick("BAD", memberId, date)} />
                <TodaySo onClick={() => onClick("SOSO", memberId, date)} />
                <TodayGood onClick={() => onClick("GOOD", memberId, date)} />
            </S.ButtonWrapper>
        </S.TodayScoreContainer>
    );
};

export default TodayScore;
