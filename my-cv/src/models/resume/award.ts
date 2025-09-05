import { IYearMonthDay } from "./yearMonthDay";

export interface IAward {
	title: string;
	date: string;
	awarder: string;
	summary: string;
	link: string;
	display: boolean;
}
