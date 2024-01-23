import { Col, Container, Row } from "react-bootstrap";
import { IReference } from "../models/resume/reference";
import SectionTitle from "./shared/sectionTitle";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

interface IReferencesProps {
	references: IReference[]
}

const References: React.FC<IReferencesProps> = (props: IReferencesProps) => {
	return (
		<>
			<Container className="col-print-6">
				<Row>
					<Col>
						<div className="references mb-3">
							<SectionTitle title="References" icon={faUserCheck} />

							{
								props.references.map((reference, index) => {
									return (
										<div key={index} className="mb-3">
											<div>
												<h5>
													{
														reference.role
													}
												</h5>
											</div>

											<div>
												{
													reference.details
												}
											</div>
										</div>
									);
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

export default References;
