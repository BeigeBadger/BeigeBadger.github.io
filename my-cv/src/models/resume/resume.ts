import { IAward } from "./award";
import { IBasics } from "./basics";
import { ITooling } from "./tooling";
import { IQualification } from "./qualification";
import { IValueProposition } from "./valueProposition";
import { IProject } from "./project";
import { IPublication } from "./publication";
import { ISkill } from "./skill";
import { IJobRole } from "./jobRole";

export interface IResume {
	basics: IBasics;
	skills: ISkill[];
	openSourceProjects: IProject[];
	jobHistory: IJobRole[];
	publications: IPublication[];
	qualifications: IQualification[];
	awards: IAward[];
	valuePropositions: IValueProposition[];
	tooling: ITooling[];
}
