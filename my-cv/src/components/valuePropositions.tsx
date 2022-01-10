import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { IValueProposition } from "../models/resume/valueProposition";
import SectionTitle from "./shared/sectionTitle";

interface IValuePropositionProps {
	valuePropositions: IValueProposition[]
}

const ValuePropositions: React.FC<IValuePropositionProps> = (props: IValuePropositionProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="values mb-3">
							<SectionTitle title="Value Proposition" icon={faBalanceScale} />

							{
								props.valuePropositions.map((valueProposition, index) => {
									return (
										<div key={index} className="mb-3">
											<label dangerouslySetInnerHTML={{ __html: valueProposition.description}} />
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
