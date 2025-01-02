import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 35px;
    padding: 0 10px;
    gap: 3px;
    width: 100%;
`;

export const RegionDropdown = styled.div`
    position: relative;
    width: 139px;
`;

export const GymDropdown = styled.div`
    position: relative;
    width: 215px;
`;

export const RegionButton = styled.button`
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
    background-color: white;
    color: gray;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 7px;
`;

export const GymButton = styled(RegionButton)`
    width: 100%; 
`;

export const RegionMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    border: none;
    border: 1px solid #ddd;
    border-radius: 7px;
    box-shadow: none;
    max-height: 150px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px; 
        background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* 투명한 스크롤 트랙 */
    }
`;

export const GymMenu = styled(RegionMenu)``;

export const RegionItem = styled.div`
    padding: 10px;
    font-size: 15px;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const GymItem = styled(RegionItem)``;

export const DropdownIcon = styled.div`

    width: 0;
    height: 0;
    border-left: 4px solid transparent; /* 좌우 값 */
    border-right: 4px solid transparent; /* 좌우 값 */
    border-top: 6.9px solid gray; /* 루트 3(약 1.732) 비율로 설정 */
    margin-left: 4px;
    display: inline-block;
`;

