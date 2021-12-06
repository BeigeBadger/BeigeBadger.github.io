import { YearMonthDay } from "./yearMonthDay";

export interface Project {
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
	start: YearMonthDay;
	end: YearMonthDay;
	images: any[];
	videos: any[];
}
