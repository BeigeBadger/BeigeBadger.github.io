import { IResume } from "../models/resume/resume";
import ValuePropositions from "./valuePropositions";
import Tooling from "./tooling";
import OpenSourceProjects from "./openSourceProjects";
import Publications from "./publications";
import Qualifications from "./qualifications";
import References from "./references";
import Awards from "./awards";

interface ISideContentProps {
	resumeData: IResume
}

const SideContent: React.FC<ISideContentProps> = (props: ISideContentProps) => {
	return (
		<>
			<ValuePropositions valuePropositions={props.resumeData.valuePropositions} />

			<Tooling tooling={props.resumeData.tooling} />

			<OpenSourceProjects projects={props.resumeData.openSourceProjects} />

			<Awards awards={props.resumeData.awards} />

			<Publications publications={props.resumeData.publications} />

			<Qualifications qualifications={props.resumeData.qualifications} />

			<References references={props.resumeData.references} />
		</>
	);
};

export default SideContent;
