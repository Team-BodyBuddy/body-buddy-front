//마이페이지 : 사는곳, 몸무게
import React from "react";
import * as S from "./Styles";
import { Edit } from "../../icons";

const EditInfo: React.FC = () => {
    return (
        <S.Container>
            <S.Contents>지역</S.Contents>
            <S.Btn>
                <Edit></Edit>
            </S.Btn>
            <S.Contents>키/몸무게</S.Contents>
        </S.Container>
    );
};

export default EditInfo;
