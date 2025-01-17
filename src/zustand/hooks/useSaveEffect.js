// 특정 데이터를 저장하는 데 필요한 Side Effect를 처리하는 훅.
// 상태와 연관된 Side Effect(예: 데이터 요청, 로컬 스토리지 저장 등)를 처리.

import { useEffect } from "react";
import { useSaveStore } from "../stores/saveStore";

export const useSaveEffect = () => {
    const saveData = useSaveStore((state) => state.saveData);

    useEffect(() => {
        if (saveData) {
            // 데이터 저장 관련 로직
        }
    }, [saveData]);
};
