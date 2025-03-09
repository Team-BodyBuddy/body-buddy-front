// utils/updateMonthData.ts
export const updateMonthDataEvaluatioinStatus = (oldData: any[], newData: any) => {
    if (!oldData) return oldData; // oldData가 없으면 그대로 반환

    const existingEntry = oldData.find((entry: any) => entry.date === newData.date);

    if (existingEntry) {
        // 기존 데이터에서 해당 날짜가 있으면 상태만 업데이트
        return oldData.map((entry: any) =>
            entry.date === newData.date
                ? { ...entry, evaluationStatus: newData.evaluationStatus } // 상태 업데이트
                : entry
        );
    } else {
        // 해당 날짜가 없으면 새로 추가
        return [
            ...oldData,
            { ...newData, evaluationStatus: newData.evaluationStatus }, // 새로운 데이터 추가
        ];
    }
};

export const updateMonthDataIndicator = (oldData: any[], newData: any) => {
    if (!oldData) return oldData; // oldData가 없으면 그대로 반환

    const existingEntry = oldData.find((entry: any) => entry.date === newData.date);

    if (existingEntry) {
        // 기존 데이터에서 해당 날짜가 있으면 상태만 업데이트
        return oldData.map((entry: any) =>
            entry.date === newData.date
                ? { ...entry, indicatorType: newData.indicator } // 상태 업데이트
                : entry
        );
    } else {
        // 해당 날짜가 없으면 새로 추가
        return [
            ...oldData,
            { ...newData, indicatorType: newData.indicator }, // 새로운 데이터 추가
        ];
    }
};
