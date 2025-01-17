import styled from "styled-components";

export const Container = styled.select`
    border: 2px solid #DADADA;
    
    &.select1 { // 성별, 생년월일
        width: 94px;
        height: 43px;
        padding-left: 10px;
        border-radius: 7px;
        border: 2px 0px 0px 0px;

        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #333333;
    }
    &.select2 { // 지역
        width: 117px;
        height: 43px;
        padding-left: 10px;
        border-radius: 7px;
        border: 2px 0px 0px 0px;
        justify: space-between;

        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #333333;
    }
    &.select3 { // gym 선택
    width: 186px;
    height: 43px;
    padding-left: 10px;
    border-radius: 7px;
    border: 2px 0px 0px 0px;
    justify: space-between;

    }   
`;
