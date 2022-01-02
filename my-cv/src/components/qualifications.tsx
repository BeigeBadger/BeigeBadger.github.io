import { Col, Container, Row } from "react-bootstrap";
import { IQualification } from "../models/resume/qualification";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface IQualificationsProps {
	qualifications: IQualification[]
}

const Qualifications: React.FC<IQualificationsProps> = (props: IQualificationsProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="qualifications">
							{
								props.qualifications.map((qualification, index) => {
									return (
										<div key={index}>
											<FontAwesomeIcon icon={faGraduationCap} />

											<div>
												{
													`${qualification.start.year}-${qualification.end.year}`
												}
											</div>

											<div>
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
		</>
	);
}

export default Qualifications;
