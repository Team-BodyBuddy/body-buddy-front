// 서버 데이터와 관련된 작업을 Zustand와 연계하여 처리.

import { useEffect } from "react";
import { fetchMembers } from "../../utils/api";
import { useMemberStore } from "../stores/memberStore";

export const useFetchQuery = () => {
    const setMemberList = useMemberStore((state) => state.setMemberList);

    useEffect(() => {
        const fetchData = async () => {
            const members = await fetchMembers();
            setMemberList(members);
        };
        fetchData();
    }, []);
};
