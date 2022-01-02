import { Col, Container, Row } from "react-bootstrap";
import { IAward } from "../models/resume/award";
import { faAward, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface IAwardProps {
	awards: IAward[]
}

const Awards: React.FC<IAwardProps> = (props: IAwardProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="awards">
							{
								props.awards.map((award, index) => {
									const icon = award.type === "trophy"
										? faTrophy
										: faAward;

									return (
										<div key={index}>
											<FontAwesomeIcon icon={icon} />

											<div>
												{
													award.date
												}
											</div>

											<div>
												{
													award.title
												}
											</div>

											<div>
												{
													award.awarder
												}
											</div>

											<div>
												{
													award.summary
												}
											</div>

											<div>
												{
													award.link && <a href={award.link}>Link</a>
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

export default Awards;
