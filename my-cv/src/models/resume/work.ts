import { YearMonth } from "./yearMonth";

export interface Work {
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
	start: YearMonth;
	end: YearMonth;
	company: string;
	website: string;
}
