import { IResume } from "../models/resume/resume";
import ValuePropositions from "./valuePropositions";
import Tooling from "./tooling";
import OpenSourceProjects from "./openSourceProjects";
import Publications from "./publications";
import Qualifications from "./qualifications";
import References from "./references";
import Awards from "./awards";
import { BrevityEnum } from "../models/brevityEnum";

interface ISideContentProps {
	resumeData: IResume
	brevityLevel: BrevityEnum
}

const SideContent: React.FC<ISideContentProps> = (props: ISideContentProps) => {
	return (
		<>
			<ValuePropositions valuePropositions={props.resumeData.valuePropositions} customClass="no-print" />

			<Tooling tooling={props.resumeData.tooling} brevityLevel={props.brevityLevel}/>

			<OpenSourceProjects projects={props.resumeData.openSourceProjects} />

			<Awards awards={props.resumeData.awards} />

			<Publications publications={props.resumeData.publications} />

			<Qualifications qualifications={props.resumeData.qualifications} />

			<References />
		</>
	);
};

export default SideContent;
