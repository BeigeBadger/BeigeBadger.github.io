import { YearMonth } from "./yearMonth";

export interface Education {
	institution: string;
	url: string;
	area: string;
	studyType: string;
	startDate: string;
	endDate: string;
	score: string;
	courses: any[];
	description: string;
	activities: string;
	start: YearMonth;
	end: YearMonth;
	website: string;
	gpa: string;
}
