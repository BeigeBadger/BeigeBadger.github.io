import { IResume } from "../models/resume/resume";
import { Col, Container, Row } from "react-bootstrap";
import BasicInfo from "./basicInfo";
import Profiles from "./profiles";
import PersonalSummary from "./personalSummary";
import Skills from "./skills";
import WorkHistory from "./workHistory";
import SideContent from "./sideContent";
import Awards from "./awards";

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
							<img className="mt-4" src={props.resumeData.basics.picture} alt="avatar" />
						</Col>
					</Row>
				</Container>

				<Container fluid>
					<Row>
						<Col>
							<h1 className="my-3">
								{
									props.resumeData.basics.name
								}
							</h1>
						</Col>
					</Row>
				</Container>

				<Container fluid>
					<Row>
						<Col xs={12} sm={{ span: 6 }} md={{ span: 4, offset: 2 }} className="text-sm-center text-md-end">
							<BasicInfo basics={props.resumeData.basics} />
						</Col>

						<Col xs={12} sm={6} md={4} className="text-sm-center text-md-start">
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

			<div className="content text-start">
					<Row>
						<Col xs={12} md={7} lg={7}>
							<WorkHistory jobHistory={props.resumeData.jobHistory} />

							<Awards awards={props.resumeData.awards} />
						</Col>

						<Col xs={12} md={5} lg={5}>
							<SideContent resumeData={props.resumeData} />
						</Col>
					</Row>
				</Container>
			</div>

			<div className="footer">
			</div>
		</>
	);
};

export default Resume;
