import { IFullReleaseDate } from "./fullReleaseDate";

export interface IPublication {
	name: string;
	publisher: string;
	releaseDate: string;
	url: string;
	summary: string;
	fullReleaseDate: IFullReleaseDate;
	website: string;
}
