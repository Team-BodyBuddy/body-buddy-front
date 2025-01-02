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
    overflow-x: auto;
    padding: 10px;
    margin-left: 10px;

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
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    width: 100px;
    height: 130px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
;`

export const MemberIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    margin-bottom: 12px;
;`

export const MemberName = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #333;
;`

export const MemberLevel = styled.div`
    font-size: 12px;
    color: #666;
;`