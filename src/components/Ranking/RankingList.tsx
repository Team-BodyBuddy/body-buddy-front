//랭킹목록

import styled from "styled-components";
import { RankingHead, RankingElement } from "./Ranking";
import { RankingItem } from "../../entity/RankingEntity";

const RankingList: React.FC<{ rankingData: RankingItem[] }> = ({ rankingData }) => {
    //rank : 랭킹, 레벨, 프로필, 닉네임, 점수

    return (
        <Container>
            <StickyRankingHead>
                <RankingHead />
            </StickyRankingHead>
            <RankingWrapper>
                {rankingData.map((data, index) => (
                    <RankingElement key={index} data={data} />
                ))}
            </RankingWrapper>
        </Container>
    );
};

export default RankingList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const StickyRankingHead = styled.div`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
`;

const RankingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`;
