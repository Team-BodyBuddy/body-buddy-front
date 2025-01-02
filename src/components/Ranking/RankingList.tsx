//랭킹목록

import styled from "styled-components"
import { RankingHead,RankingElement } from "./Ranking";

interface RankingData {
    rank: number;
    level: number;
    name: string;
    score: number;
    profileImg?: string; // 선택적 필드
}


const RankingList:React.FC<{rankingData:RankingData[]}>=({rankingData})=>{
    //rank : 랭킹, 레벨, 프로필, 닉네임, 점수

    return(
        <Container>
            <RankingHead />
            {rankingData.map((data, index) => (
                <RankingElement key={index} data={data} />
            ))}
        </Container>
    )
}

export default RankingList;

const Container=styled.div`
    display:flex;
    flex-direction:column;
    gap:22px;
`