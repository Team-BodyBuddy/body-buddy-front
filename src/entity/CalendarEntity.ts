export interface MonthData {
    calendarId: number;
    date: string;
    indicatorType: string;
    evaluationStatus: string;
}

export const defaultCalendarEntry: MonthData = {
    calendarId: 0,
    date: "",
    indicatorType: "NONE",
    evaluationStatus: "NONE",
};
