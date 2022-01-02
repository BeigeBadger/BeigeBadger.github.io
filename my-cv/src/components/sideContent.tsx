import { Col, Container, Row } from "react-bootstrap";
import { IResume } from "../models/resume/resume";
import ValuePropositions from "./valuePropositions";
import Tooling from "./tooling";
import OpenSourceProjects from "./openSourceProjects";
import Awards from "./awards";
import Publications from "./publications";
import Qualifications from "./qualifications";
import References from "./references";

interface ISideContentProps {
	resumeData: IResume
}

const SideContent: React.FC<ISideContentProps> = (props: ISideContentProps) => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<ValuePropositions valuePropositions={props.resumeData.valuePropositions} />
					</Col>
				</Row>

				<Row>
					<Col>
						<Tooling tooling={props.resumeData.tooling} />
					</Col>
				</Row>

				<Row>
					<Col>
						<OpenSourceProjects projects={props.resumeData.openSourceProjects} />
					</Col>
				</Row>

				<Row>
					<Col>
						<Awards awards={props.resumeData.awards} />
					</Col>
				</Row>

				<Row>
					<Col>
						<Publications publications={props.resumeData.publications} />
					</Col>
				</Row>

				<Row>
					<Col>
						<Qualifications qualifications={props.resumeData.qualifications} />
					</Col>
				</Row>

				<Row>
					<Col>
						<References references={props.resumeData.references} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SideContent;
