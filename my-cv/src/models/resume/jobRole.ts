import { WorkModelEnum } from "../workModelEnum";

export interface IJobRole {
	location: string;
	responsibilities: string[];
	position: string;
	startDate: string;
	endDate: string;
	highlights: string[];
	start: string;
	end: string;
	company: string;
	website: string;
	workModel: WorkModelEnum;
}
