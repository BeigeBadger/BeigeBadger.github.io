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
			<Container>
				<Row>
					<Col className="col-print-12">
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

			<hr className="col-print-12" />
		</>
	);
}

export default References;
