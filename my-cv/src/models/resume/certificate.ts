import { YearMonthDay } from "./yearMonthDay";

export interface Certificate {
	name: string;
	issuer: string;
	date: string;
	url: string;
	summary: string;
	fullDate: YearMonthDay;
	website: string;
}
