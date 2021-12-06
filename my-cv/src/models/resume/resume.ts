import { Award } from "./award";
import { Basics } from "./basics";
import { Certificate } from "./certificate";
import { Education } from "./education";
import { Interest } from "./interest";
import { Language } from "./language";
import { Project } from "./project";
import { Publication } from "./publication";
import { Reference } from "./reference";
import { Skill } from "./skill";
import { Work } from "./work";

export interface Resume {
	basics: Basics;
	skills: Skill[];
	projects: Project[];
	work: Work[];
	publications: Publication[];
	education: Education[];
	// TODO
	volunteer: any[];
	awards: Award[];
	languages: Language[];
	interests: Interest[];
	references: Reference[];
	certificates: Certificate[];
}
