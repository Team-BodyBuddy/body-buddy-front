//트레이너-회원상세페이지 상단의 정보 컴포넌트

import * as S from "./Styles";

const MemberInfo:React.FC=()=>{
    return(
        <S.Container>
            <S.Img>이미지</S.Img>
            <S.Name>이름</S.Name>
        </S.Container>
    )
}

export default MemberInfo;