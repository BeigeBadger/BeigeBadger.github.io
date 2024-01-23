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
					<Col className="col-print-12">
						<ValuePropositions valuePropositions={props.resumeData.valuePropositions} />
					</Col>
				</Row>
			</Container>

			<hr className="col-print-12" />

			<Container>
				<Row>
					<Col className="col-print-12">
						<Tooling tooling={props.resumeData.tooling} />
					</Col>
				</Row>
			</Container>

			<hr className="col-print-12" />

			<Container>
				<Row className="no-print">
					<Col>
						<OpenSourceProjects projects={props.resumeData.openSourceProjects} />
					</Col>
				</Row>
			</Container>

			<hr className="no-print" />

			<Container>
				<Row className="no-print">
					<Col>
						<Publications publications={props.resumeData.publications} />
					</Col>
				</Row>
			</Container>

			<hr className="no-print" />

			<Container>
				<Row>
					<Col className="col-print-12">
						<Qualifications qualifications={props.resumeData.qualifications} />
					</Col>
				</Row>
			</Container>

			<hr className="col-print-12" />

			<Container>
				<Row>
					<Col className="col-print-12">
						<References references={props.resumeData.references} />
					</Col>
				</Row>
			</Container>

			<hr className="col-print-12" />
		</>
	);
};

export default SideContent;
