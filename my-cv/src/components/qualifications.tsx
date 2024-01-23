import { Col, Container, Row } from "react-bootstrap";
import { IQualification } from "../models/resume/qualification";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./shared/sectionTitle";


interface IQualificationsProps {
	qualifications: IQualification[]
}

const Qualifications: React.FC<IQualificationsProps> = (props: IQualificationsProps) => {
	return (
		<>
			<Container className="col-print-6">
				<Row>
					<Col>
						<div className="qualifications mb-3">
							<SectionTitle title="Qualifications" icon={faGraduationCap} />

							{
								props.qualifications.map((qualification, index) => {
									return (
										<div key={index} className="mb-3">
											<div className="fw-bold">
												{
													`${qualification.start.year}-${qualification.end.year}`
												}
											</div>

											<div className="fst-italic">
												{
													qualification.endorsement
														?
														`${qualification.studyType} with ${qualification.endorsement}`
														:
														`${qualification.studyType}`
												}
											</div>

											<div>
												{
													qualification.area && `Majoring in ${qualification.area}`
												}
											</div>

											<div>
												{
													<a href={qualification.website}>
														{
															qualification.institution
														}
													</a>
												}
											</div>
										</div>
									)
								})
							}
						</div>
					</Col>
				</Row>
			</Container>

			{/* HR is omitted in print mode to avoid double HRs at the bottom of the page (one from the footer and one from this component */}
			<hr className="no-print" />
		</>
	);
}

export default Qualifications;
