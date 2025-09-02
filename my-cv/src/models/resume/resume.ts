import { IAward } from "./award";
import { IBasics } from "./basics";
import { ITooling } from "./tooling";
import { IQualification } from "./qualification";
import { IValueProposition } from "./valueProposition";
import { ILanguage } from "./language";
import { IProject } from "./project";
import { IPublication } from "./publication";
import { ISkill } from "./skill";
import { IJob } from "./job";

export interface IResume {
	basics: IBasics;
	skills: ISkill[];
	openSourceProjects: IProject[];
	jobHistory: IJob[];
	publications: IPublication[];
	qualifications: IQualification[];
	volunteer: any[];
	awards: IAward[];
	languages: ILanguage[];
	valuePropositions: IValueProposition[];
	tooling: ITooling[];
}
