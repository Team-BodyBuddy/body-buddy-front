import React from "react";
import * as S from "./Styles";
import { Edit } from "../../icons";

interface EditInfoProps {
    region: string;
    heightweight: string;
}

const EditInfo: React.FC<EditInfoProps> = ({ region, heightweight }) => {
    return (
        <S.Container>
            <S.Contents>지역: {region}</S.Contents>
            <S.Btn>
                <Edit />
            </S.Btn>
            <S.Contents>키/몸무게: {heightweight}</S.Contents>
        </S.Container>
    );
};

export default EditInfo;
