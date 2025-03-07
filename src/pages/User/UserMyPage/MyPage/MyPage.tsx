import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../../../react-query/query/myPage/useGetUser"; // ✅ API 연결을 부모에서
import * as S from "./Styles";
import Buttons from "../../../../components/MyPage/Buttons/Buttons";
import EditInfo from "../../../../components/MyPage/EditInfo/EditInfo";
import Nickname from "../../../../components/MyPage/Nickname/Nickname";
import UserInfo from "../../../../components/MyPage/UserInfo/UserInfo";
import TopNavigation from "../../../../components/TopNavigation/TopNavigation";

const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const memberId = 13; // 실제 로그인된 사용자의 ID를 넣어야 함

    // ✅ 부모 컴포넌트에서 API 데이터 불러오기
    const { data: userInfo, isLoading, error } = useUserInfo(memberId);

    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const handleExitClick = () => {
        navigate("/my/exit");
    };

    if (isLoading) return <p>로딩 중...</p>;
    if (error) return <p>유저 정보를 불러오는 중 오류가 발생했습니다.</p>;
    return (
        <S.Container>
            <TopNavigation activeTab="마이" onTabClick={handleTabClick} />
            {/* ✅ userInfo가 undefined일 경우 기본값을 설정하여 오류 방지 */}
            {userInfo ? (
                <>
                    <Nickname nickname={userInfo.nickname ?? "닉네임 없음"} avatarLevel={userInfo.avatarLevel ?? 0} />
                    <UserInfo name={userInfo.realName ?? "이름 없음"} gender={userInfo.gender ?? "성별 정보 없음"} birthDate={userInfo.birthday ?? "생일 정보 없음"} />
                    <EditInfo region={userInfo.region ?? "지역 정보 없음"} heightweight={userInfo.heightWeight ?? "키/몸무게 정보 없음"} />
                    <Buttons />
                    <S.Text onClick={handleExitClick}>로그아웃 / 회원 탈퇴</S.Text>
                </>
            ) : (
                <p>유저 정보를 불러오는 중입니다...</p>
            )}
        </S.Container>
    );
};

export default MyPage;
