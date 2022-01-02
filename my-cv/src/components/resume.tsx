import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IResume } from "../models/resume/resume";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import BasicInfo from "./basicInfo";
import Profiles from "./profiles";
import PersonalSummary from "./personalSummary";
import Skills from "./skills";
import ValuePropositions from "./valuePropositions";
import WorkHistory from "./workHistory";
import Tooling from "./tooling";
import OpenSourceProjects from "./openSourceProjects";
import Awards from "./awards";
import Publications from "./publications";
import Qualifications from "./qualifications";
import References from "./references";

interface IResumeProps {
	resumeData: IResume
};

const Resume: React.FC<IResumeProps> = (props: IResumeProps) => {
	return (
		<>
			<div className="header">
				<Container fluid>
					<Row>
						<Col>
							<img src={props.resumeData.basics.picture} alt="avatar" />
						</Col>
					</Row>
				</Container>

				<Container fluid>
					<Row>
						<Col>
							<BasicInfo basics={props.resumeData.basics} />
						</Col>

						<Col>
							<Profiles profiles={props.resumeData.basics.profiles} />
						</Col>
					</Row>

					<hr />

				</Container>
			</div >

			<div className="neck">
				<Container fluid>
					<Row>
						<Col>
							<PersonalSummary personalSummary={props.resumeData.basics.summary} />
						</Col>
					</Row>

					<hr />

					<Row>
						<Col>
							<Skills skills={props.resumeData.skills} />
						</Col>
					</Row>

					<hr />

				</Container>
			</div>

			<div className="content">
				<Container fluid>
					<Row>
						<Col>
							<ValuePropositions valuePropositions={props.resumeData.valuePropositions} />
						</Col>
					</Row>
				</Container>

				<hr />

				<Container fluid>
					<Row>
						<Col>
							<WorkHistory jobHistory={props.resumeData.jobHistory} />
						</Col>
					</Row>
				</Container>

				<hr />

				<Container fluid>
					<Row>
						<Col>
							<Tooling tooling={props.resumeData.tooling} />
						</Col>
					</Row>
				</Container>

				<hr />

				<Container fluid>
					<Row>
						<Col>
							<OpenSourceProjects projects={props.resumeData.openSourceProjects} />
						</Col>
					</Row>
				</Container>

				<hr />

				<Container fluid>
					<Row>
						<Col>
							<Awards awards={props.resumeData.awards} />
						</Col>
					</Row>
				</Container>

				<hr />

				<Container fluid>
					<Row>
						<Col>
							<Publications publications={props.resumeData.publications} />
						</Col>
					</Row>
				</Container>

				<hr />

				<Container fluid>
					<Row>
						<Col>
							<Qualifications qualifications={props.resumeData.qualifications} />
						</Col>
					</Row>
				</Container>

				<hr />

				<Container fluid>
					<Row>
						<Col>
							<References references={props.resumeData.references} />
						</Col>
					</Row>
				</Container>

				<hr />

			</div>

			<div className="footer">
			</div>
		</>
	);
};

export default Resume;
