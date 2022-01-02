import { Col, Container, Row } from "react-bootstrap";


interface IPersonalSummaryProps {
	personalSummary: string
};

const PersonalSummary: React.FC<IPersonalSummaryProps> = (props: IPersonalSummaryProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="personal-summary">
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
