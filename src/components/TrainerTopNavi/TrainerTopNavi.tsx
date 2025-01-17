import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import { HomeIcon } from "../../components/icons";

type Tab = '포트폴리오' | '홈' | '마이';

interface TopNavigationProps {
    activeTab: Tab;
    onTabClick: (tab: Tab) => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ activeTab, onTabClick }) => {
    const navigate = useNavigate();

    const handleTabClick = (tab: Tab) => {
        onTabClick(tab); // 부모 컴포넌트로 클릭된 탭 전달
        switch (tab) {
            case '포트폴리오':
                navigate('/trainer/portfolio');
                break;
            case '홈':
                navigate('/trainer');
                break;
            case '마이':
                navigate('/trainer/my');
                break;
            default:
                break;
        }
    };

    return (
        <S.TopWrapper>
            <S.Button
                $active={activeTab === '포트폴리오'}
                onClick={() => handleTabClick('포트폴리오')}
            >
                포트폴리오
            </S.Button>

            <S.CenterIcon $active={activeTab === '홈'}>
                <HomeIcon onClick={() => handleTabClick('홈')}
              />
            </S.CenterIcon>
            <S.Button
                $active={activeTab === '마이'}
                onClick={() => handleTabClick('마이')}
            >
                마이
            </S.Button>
        </S.TopWrapper>
    );
};

export default TopNavigation;
