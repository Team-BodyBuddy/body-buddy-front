import { DefaultProfile } from "../icons";
import * as S from "./Styles";

const MemberList:React.FC<{members:any[]}>=({members})=>{
    return(
        <S.MemberList>
            {members.map((member, index) => (
                <S.MemberCard key={index}>
                    <S.MemberProfileWrapper>
                        <DefaultProfile/>
                    </S.MemberProfileWrapper>
                    <S.MemberName>{member.name}</S.MemberName>
                    <S.MemberLevel>{member.level}</S.MemberLevel>
                </S.MemberCard>
            ))}
        </S.MemberList>
    )
}

export default MemberList;