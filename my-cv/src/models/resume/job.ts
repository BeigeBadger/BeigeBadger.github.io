import { IYearMonth } from "./yearMonth";

export interface IJob {
	location: string;
	description: string;
	position: string;
	url: string;
	startDate: string;
	endDate: string;
	highlights: string[];
	isCurrentRole: boolean;
	start: IYearMonth;
	end: IYearMonth;
	company: string;
	website: string;
}
