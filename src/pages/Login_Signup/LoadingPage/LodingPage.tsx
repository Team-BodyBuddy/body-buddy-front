import * as S from "./Styles";
import { TitleLoading } from "../../../components/icons";

const LoadingPage: React.FC = () => {

    return (
        <S.Container>
            <S.Logo><TitleLoading></TitleLoading></S.Logo>
        </S.Container>
    );
};

export default LoadingPage;