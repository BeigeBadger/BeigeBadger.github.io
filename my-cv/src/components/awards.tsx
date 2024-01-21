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
			<Container className="no-print">
				<Row>
					<Col>
						<div className="awards">
							<SectionTitle title="Awards" icon={faAward} />

							{
								props.awards
									.filter(award => award.display)
									.map((award, index) => {

										return (
											<div key={index} className="mb-3">
												<div className="fw-bold">
												{
														award.title
													}
												</div>

												<div className="fst-italic">
													{
														`Awarded by ${award.awarder} on ${award.date}`
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

				<hr/>

			</Container>
		</>
	);
}

export default Awards;
