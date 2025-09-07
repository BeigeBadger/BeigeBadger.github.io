import { WorkModelEnum } from "../workModelEnum";

export interface IJobRole {
	company: string;
	position: string;
	website: string;
	startDate: string;
	start: string;
	endDate: string;
	end: string;
	location: string;
	workModel: WorkModelEnum;
	responsibilities: string[];
	highlights: string[];
}
