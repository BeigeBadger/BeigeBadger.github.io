import { IResume } from "../models/resume/resume";
import { Col, Container, Row } from "react-bootstrap";
import BasicInfo from "./basicInfo";
import Profiles from "./profiles";
import PersonalSummary from "./personalSummary";
import Skills from "./skills";
import WorkHistory from "./workHistory";
import SideContent from "./sideContent";
import dayjs from "dayjs";
import ValuePropositions from "./valuePropositions";

interface IResumeProps {
	resumeData: IResume
};

const Resume: React.FC<IResumeProps> = (props: IResumeProps) => {
	const footerText = `© Copyright ${dayjs().year()} Matt Stannett`;

	return (
		<>
			<div className="header">
				<Container className="no-print">
					<Row>
						<Col>
							<img className="mt-4" src={props.resumeData.basics.picture} alt="Matt Stannett's avatar" />
						</Col>
					</Row>
				</Container>

				<Container>
					<Row>
						<Col className="col-print-12">
							<h1 className="my-3">
								{
									props.resumeData.basics.name
								}
							</h1>
						</Col>
					</Row>
				</Container>

				<Container>
					<Row>
						<Col xs={12} sm={{ span: 6 }} md={{ span: 4, offset: 2 }} className="text-center text-sm-end col-print-6 print-no-offset">
							<BasicInfo basics={props.resumeData.basics} />
						</Col>

						<Col xs={12} sm={6} md={4} className="text-center text-sm-start col-print-6">
							<Profiles profiles={props.resumeData.basics.profiles} />
						</Col>
					</Row>

					<hr />

				</Container>
			</div>

			<div className="neck">
				<Container>
					<Row>
						<Col className="col-print-12">
							<PersonalSummary personalSummary={props.resumeData.basics.summary} />
						</Col>
					</Row>

					<hr />

					<Row className="no-print">
						<Col>
							<Skills skills={props.resumeData.skills} />
						</Col>
					</Row>

					<hr className="no-print" />

				</Container>
			</div>

			<div className="content text-start">
				<Container>
					<Row>
						<Col xs={12} md={7} lg={7} className="col-print-12 d-flex flex-column">
							<WorkHistory jobHistory={props.resumeData.jobHistory} customClass="print-order-2 page-break-before-always" />

							<ValuePropositions valuePropositions={props.resumeData.valuePropositions} customClass="only-show-when-printing print-order-1" />
						</Col>

						<Col xs={12} md={5} lg={5} className="col-print-12">
							<SideContent resumeData={props.resumeData} />
						</Col>
					</Row>
				</Container>
			</div>

			<div className="footer">
				<Container>
					<hr />
				</Container>

				<Container className="no-print">
					<Row>
						<Col>
							<div className="my-4">
								{
									footerText
								}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Resume;
