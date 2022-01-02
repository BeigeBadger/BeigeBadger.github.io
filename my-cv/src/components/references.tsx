import { Col, Container, Row } from "react-bootstrap";
import { IReference } from "../models/resume/reference";

interface IReferencesProps {
	references: IReference[]
}

const References: React.FC<IReferencesProps> = (props: IReferencesProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="references">
							{
								props.references.map((reference, index) => {
									return (
										<div key={index}>
											<div>
												{
													reference.role
												}
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
		</>
	);
}

export default References;
