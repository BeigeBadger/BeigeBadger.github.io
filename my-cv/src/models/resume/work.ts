import { IYearMonth } from "./yearMonth";

export interface IWork {
	name: string;
	location: string;
	description: string;
	position: string;
	url: string;
	startDate: string;
	endDate: string;
	summary: string;
	highlights: string[];
	isCurrentRole: boolean;
	start: IYearMonth;
	end: IYearMonth;
	company: string;
	website: string;
}
