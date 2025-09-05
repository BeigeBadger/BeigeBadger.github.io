import { IYearMonth } from "./yearMonth";

export interface IQualification {
	institution: string;
	area: string;
	studyType: string;
	endorsement: string;
	start: IYearMonth;
	end: IYearMonth;
	website: string;
	result: string;
}
