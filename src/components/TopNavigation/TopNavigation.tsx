// 회원 메인 - 탭 내비게이션 
import React from "react";
import * as S from "./Styles";
import { HomeIcon } from "../../components/icons";

type Tab = '운동관리' | '랭킹' | '홈' | '마이' | '바디버디';

interface TopNavigationProps {
    activeTab: Tab;
    onTabClick: (tab: Tab) => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ activeTab, onTabClick }) => {
    return (
        <S.TopWrapper>
            <S.Button
                $active={activeTab === '운동관리'}
                onClick={() => onTabClick('운동관리')}
            >
                운동관리
            </S.Button>
            <S.Button
                $active={activeTab === '랭킹'}
                onClick={() => onTabClick('랭킹')}
            >
                랭킹
            </S.Button>
            <S.CenterIcon $active={activeTab === "홈"}>
                <HomeIcon onClick={() => onTabClick('홈')} />
            </S.CenterIcon>
            <S.Button
                $active={activeTab === '마이'}
                onClick={() => onTabClick('마이')}
            >
                마이
            </S.Button>
            <S.Button
                $active={activeTab === '바디버디'}
                onClick={() => onTabClick('바디버디')}
            >
                바디버디
            </S.Button>
        </S.TopWrapper>
    );
};

export default TopNavigation;
