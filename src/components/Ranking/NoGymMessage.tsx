//소속 Gym이 없을 경우 보이는 컴포넌트
import styled from "styled-components";
import { GreenHealth } from "../icons";
import { COLORS } from "../../styles/color";

const NoGymMessage:React.FC=()=>{

    return (
        <Container>
            <BoxContainer>
                <GreenHealth/>
                <Message>소속되어 있는 Gym이 없습니다.</Message>
            </BoxContainer>
        </Container>
    )
}

export default NoGymMessage;

const Container=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:50px;
`

const BoxContainer=styled.div`
    width:100%;
    height:398px;
    border: 1px solid ${COLORS.LightGray};
    border-radius: 17px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:30px;

    svg{
        width:97px;
        height:97px;
    }
`;

const Message = styled.div`
    font-size: 20px;
    font-weight: bold;
`;
