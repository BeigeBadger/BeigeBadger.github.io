import { IYearMonth } from "./yearMonth";

export interface IEducation {
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
	start: IYearMonth;
	end: IYearMonth;
	website: string;
	gpa: string;
}
