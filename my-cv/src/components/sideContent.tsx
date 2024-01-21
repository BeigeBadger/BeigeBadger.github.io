import { Col, Container, Row } from "react-bootstrap";
import { IResume } from "../models/resume/resume";
import ValuePropositions from "./valuePropositions";
import Tooling from "./tooling";
import OpenSourceProjects from "./openSourceProjects";
import Publications from "./publications";
import Qualifications from "./qualifications";
import References from "./references";

interface ISideContentProps {
	resumeData: IResume
}

const SideContent: React.FC<ISideContentProps> = (props: ISideContentProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<ValuePropositions valuePropositions={props.resumeData.valuePropositions} />
					</Col>
				</Row>

				<hr />

				<Row>
					<Col>
						<Tooling tooling={props.resumeData.tooling} />
					</Col>
				</Row>

				<hr />

				<Row className="no-print">
					<Col>
						<OpenSourceProjects projects={props.resumeData.openSourceProjects} />
					</Col>
				</Row>

				<hr className="no-print" />

				<Row className="no-print">
					<Col>
						<Publications publications={props.resumeData.publications} />
					</Col>
				</Row>

				<hr className="no-print" />

				<Row>
					<Col>
						<Qualifications qualifications={props.resumeData.qualifications} />
					</Col>
				</Row>

				<hr />

				<Row>
					<Col>
						<References references={props.resumeData.references} />
					</Col>
				</Row>

				<hr />

			</Container>
		</>
	);
};

export default SideContent;
