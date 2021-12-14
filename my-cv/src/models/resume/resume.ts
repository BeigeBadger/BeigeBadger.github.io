import { IAward } from "./award";
import { IBasics } from "./basics";
import { ITooling } from "./tooling";
import { IEducation } from "./education";
import { IValueProposition } from "./valueProposition";
import { ILanguage } from "./language";
import { IProject } from "./project";
import { IPublication } from "./publication";
import { IReference } from "./reference";
import { ISkill } from "./skill";
import { IJob } from "./job";

export interface IResume {
	basics: IBasics;
	skills: ISkill[];
	openSourceProjects: IProject[];
	jobHistory: IJob[];
	publications: IPublication[];
	education: IEducation[];
	volunteer: any[];
	awards: IAward[];
	languages: ILanguage[];
	valuePropositions: IValueProposition[];
	references: IReference[];
	tooling: ITooling[];
}
