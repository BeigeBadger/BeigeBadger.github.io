import { IAward } from "./award";
import { IBasics } from "./basics";
import { ICertificate } from "./certificate";
import { IEducation } from "./education";
import { IInterest } from "./interest";
import { ILanguage } from "./language";
import { IProject } from "./project";
import { IPublication } from "./publication";
import { IReference } from "./reference";
import { ISkill } from "./skill";
import { IWork } from "./work";

export interface IResume {
	basics: IBasics;
	skills: ISkill[];
	openSourceProjects: IProject[];
	work: IWork[];
	publications: IPublication[];
	education: IEducation[];
	volunteer: any[];
	awards: IAward[];
	languages: ILanguage[];
	interests: IInterest[];
	references: IReference[];
	certificates: ICertificate[];
}
