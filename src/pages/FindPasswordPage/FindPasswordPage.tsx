// 비번 찾기 페이지
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import PageLink from "../../components/PageLink/PageLink";

const FindPasswordPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.TopContainer>
                <S.Icon><BackButton onClick={() => navigate("/login")} /></S.Icon>
                <S.Title>아이디/비밀번호 찾기</S.Title>
            </S.TopContainer>

            <S.FindOptions>
                <S.OptionsWrapper>
                    <PageLink 
                        $textcolor="#818181" 
                        text="아이디 찾기" 
                        to="/findId"
                        className="findId"></PageLink>
                    <PageLink 
                        $textcolor="#40AD00" 
                        text="비밀번호 찾기" 
                        to="/findPassword"
                        className="findPassword"></PageLink>
                </S.OptionsWrapper>
                <S.LineWrapper></S.LineWrapper>
            </S.FindOptions>
            
            <S.ContentWrapper></S.ContentWrapper>
        </S.Container>
    );
};

export default FindPasswordPage;