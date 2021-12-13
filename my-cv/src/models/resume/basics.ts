import { IProfile } from "./profile";

export interface IBasics {
	name: string;
	jobTitle: string;
	image: string;
	email: string;
	phone: string;
	url?: any;
	summary: string;
	profiles: IProfile[];
	headline: string;
	blog?: any;
	yearsOfExperience: number;
	username: string;
	locationAsString: string;
	location: string;
	karma: number;
	id: string;
	followers: number;
	following: number;
	picture: string;
	website?: any;
}
