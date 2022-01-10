import { Col, Container, Row } from "react-bootstrap";
import { IAward } from "../models/resume/award";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./shared/sectionTitle";


interface IAwardProps {
	awards: IAward[]
}

const Awards: React.FC<IAwardProps> = (props: IAwardProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="awards mb-3">
							<SectionTitle title="Awards" icon={faAward} />

							{
								props.awards
									.filter(award => award.display)
									.map((award, index) => {

										return (
											<div key={index} className="mb-3">
												<div className="fw-bold">
													{
														` ${award.date}`
													}
												</div>

												<div className="fst-italic">
													{
														award.title
													}
												</div>

												<div>
													{
														`Awarded by ${award.awarder}`
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
