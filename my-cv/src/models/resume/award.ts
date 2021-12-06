import { YearMonthDay } from "./yearMonthDay";

export interface Award {
	title: string;
	date: string;
	awarder: string;
	summary: string;
	fullDate: YearMonthDay;
}
