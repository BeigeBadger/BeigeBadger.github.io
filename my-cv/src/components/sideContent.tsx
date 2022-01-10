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

				<hr />

				<Row>
					<Col>
						<Tooling tooling={props.resumeData.tooling} />
					</Col>
				</Row>

				<hr />

				<Row>
					<Col>
						<OpenSourceProjects projects={props.resumeData.openSourceProjects} />
					</Col>
				</Row>

				<hr />

				<Row>
					<Col>
						<Awards awards={props.resumeData.awards} />
					</Col>
				</Row>

				<hr />

				<Row>
					<Col>
						<Publications publications={props.resumeData.publications} />
					</Col>
				</Row>

				<hr />

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
