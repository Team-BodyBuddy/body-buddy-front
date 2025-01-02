//랭크

import styled from "styled-components";
import { COLORS } from "../../styles/color";
import { DefaultProfile } from "../icons";

export const RankingElement:React.FC<{data:any}>=({ data })=>{
    
    return (
        <Container>
            <Rank>{data.rank}</Rank>
            <LV>{data.level}</LV>
            <Profile $head={false}>
                {data.profileImg ? <img src={data.profileImg} alt="Profile" /> : null}
            </Profile>
            <Name>{data.name}</Name>
            <Score>{data.score}</Score>
        </Container>
    )
}

export const RankingHead:React.FC=()=>{
    return (
        <Container>
            <Rank>랭킹</Rank>
            <LV>LV</LV>
            <Profile $head={true}><DefaultProfile/></Profile>
            <Name>닉네임</Name>
            <Score>점수</Score>
        </Container>
    )
}



const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height:100%;
    padding: 0px;
    font-size:0.9rem;
`;

const Rank = styled.div`
    width: 35px; 
    text-align: center;
    color: #333;
`;

const LV = styled.div`
    width: 35px;
    text-align: center;
    color: #555;
`;

const Profile = styled.div<{ $head?: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ $head }) => ($head ? "white" : `${COLORS.LineGray}`)};
    border:1px solid ${({ $head }) => ($head ? `${COLORS.LightGray}` : `${COLORS.LineGray}`)};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    svg{
        width:60%;
        height:60%;
    }

`;

const Name = styled.div`
    text-align: center;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    width:80px;
`;

const Score = styled.div`
    text-align: center;
    width: 50px;
`;

