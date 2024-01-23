import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { IValueProposition } from "../models/resume/valueProposition";
import SectionTitle from "./shared/sectionTitle";

interface IValuePropositionProps {
	valuePropositions: IValueProposition[];
	customClass: string;
}

const ValuePropositions: React.FC<IValuePropositionProps> = (props: IValuePropositionProps) => {
	return (
		<div className={props.customClass}>
			<Container>
				<Row>
					<Col className="col-print-12">
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

			<hr className="col-print-12" />
		</div>
	);
}

export default ValuePropositions;
