import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./shared/sectionTitle";

interface IPersonalSummaryProps {
	personalSummary: string
};

const PersonalSummary: React.FC<IPersonalSummaryProps> = (props: IPersonalSummaryProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="personal-summary mb-3 text-start">
							<SectionTitle title="Personal Statement" icon={faBookReader} />

							{
								props.personalSummary
							}
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default PersonalSummary;
