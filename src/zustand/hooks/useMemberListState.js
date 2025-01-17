// 회원 목록 상태를 가져오는 훅.
// Zustand 상태를 컴포넌트에서 가져와 사용하는 역할.
import { useMemberStore } from "../stores/memberStore";

export const useMemberListState = () => {
    const memberList = useMemberStore((state) => state.memberList);
    return memberList;
};
