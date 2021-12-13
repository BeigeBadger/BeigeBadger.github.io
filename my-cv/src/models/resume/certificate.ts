import { IYearMonthDay } from "./yearMonthDay";

export interface ICertificate {
	name: string;
	issuer: string;
	date: string;
	url: string;
	summary: string;
	fullDate: IYearMonthDay;
	website: string;
}
