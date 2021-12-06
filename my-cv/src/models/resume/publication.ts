import { FullReleaseDate } from "./fullReleaseDate";

export interface Publication {
	name: string;
	publisher: string;
	releaseDate: string;
	url: string;
	summary: string;
	fullReleaseDate: FullReleaseDate;
	website: string;
}
