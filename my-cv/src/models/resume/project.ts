import { IYearMonthDay } from "./yearMonthDay";

export interface IProject {
	name: string;
	description: string;
	url: string;
	highlights: any[];
	keywords: any[];
	roles: any[];
	startDate: string;
	endDate: string;
	entity: string;
	type: string;
	displayName: string;
	website: string;
	summary: string;
	primaryLanguage: string;
	languages: string[];
	libraries: any[];
	githubUrl: string;
	repositoryUrl: string;
	start: IYearMonthDay;
	end: IYearMonthDay;
	images: any[];
	videos: any[];
}
