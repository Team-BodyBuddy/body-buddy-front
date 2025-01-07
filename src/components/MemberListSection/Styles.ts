import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 20px 0;
;`

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 22px;
    
;`

export const MemberList = styled.div`
    display: flex;
    gap: 10px;
    justify-content:space-between;
    overflow-y: auto;
    flex-wrap: wrap;
    margin: 20px;

    &::-webkit-scrollbar {
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f9f9f9;
    }
;`

export const MemberCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    border-radius: 10px;
    width: 96px;
    height: 150px;
    gap:5px;
    flex-shrink: 0;
;`

export const MemberIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    margin-bottom: 12px;
;`

export const MemberProfileWrapper=styled.div`
    width: 100%;
    height: 70%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 9px;
    background-color: #EFEFEF;
`

export const MemberName = styled.div`
    margin-top:5%;
    font-size: 13px;
    font-weight: 500;
    color: #333;
;`

export const MemberLevel = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: #333333;
;`