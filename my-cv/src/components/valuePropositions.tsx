import { Col, Container, Row } from "react-bootstrap";
import { IValueProposition } from "../models/resume/valueProposition";


interface IValuePropositionProps {
	valuePropositions: IValueProposition[]
}

const ValuePropositions: React.FC<IValuePropositionProps> = (props: IValuePropositionProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="what-i-bring">
							{
								props.valuePropositions.map((valueProposition, index) => {
									return (
										<div key={index}>
											<label>
												<span>
													{
														valueProposition.description
													}
												</span>
											</label>
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

export default ValuePropositions;
