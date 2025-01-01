import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import { HomeIcon } from "../../components/icons";

type Tab = '운동관리' | '랭킹' | '홈' | '마이' | '바디버디';

interface TopNavigationProps {
    activeTab: Tab;
    onTabClick: (tab: Tab) => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ activeTab, onTabClick }) => {
    const navigate = useNavigate();

    const handleTabClick = (tab: Tab) => {
        onTabClick(tab); // 부모 컴포넌트로 클릭된 탭 전달
        switch (tab) {
            case '운동관리':
                navigate('/exercise');
                break;
            case '랭킹':
                navigate('/ranking');
                break;
            case '홈':
                navigate('/');
                break;
            case '마이':
                navigate('/userMyPage');
                break;
            case '바디버디':
                navigate('/bodybuddy');
                break;
            default:
                break;
        }
    };

    return (
        <S.TopWrapper>
            <S.Button
                $active={activeTab === '운동관리'}
                onClick={() => handleTabClick('운동관리')}
            >
                운동관리
            </S.Button>
            <S.Button
                $active={activeTab === '랭킹'}
                onClick={() => handleTabClick('랭킹')}
            >
                랭킹
            </S.Button>
            <S.CenterIcon $active={activeTab === '홈'}>
                <HomeIcon onClick={() => handleTabClick('홈')} />
            </S.CenterIcon>
            <S.Button
                $active={activeTab === '마이'}
                onClick={() => handleTabClick('마이')}
            >
                마이
            </S.Button>
            <S.Button
                $active={activeTab === '바디버디'}
                onClick={() => handleTabClick('바디버디')}
            >
                바디버디
            </S.Button>
        </S.TopWrapper>
    );
};

export default TopNavigation;
