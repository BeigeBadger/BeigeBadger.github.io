import { IProfile } from "./profile";

export interface IBasics {
	name: string;
	jobTitle: string;
	summary: string;
	profiles: IProfile[];
	headline: string;
	blog?: any;
	fullTimeExperienceStartDate: string;
	location: string;
	id: string;
	picture: string;
}
