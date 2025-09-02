import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./shared/sectionTitle";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

const References: React.FC = () => {
	return (
		<>
			<Container className="col-print-6">
				<Row>
					<Col>
						<div className="references mb-3">
							<SectionTitle title="References" icon={faUserCheck} />

							<div className="mb-3">
								<div>
									Available by request
								</div>
							</div>
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
