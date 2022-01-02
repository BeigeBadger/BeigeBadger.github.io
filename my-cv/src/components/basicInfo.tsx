import { Col, Container, Row } from "react-bootstrap";
import { IBasics } from "../models/resume/basics";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IBasicInfoProps {
	basics: IBasics
};

const BasicInfo: React.FC<IBasicInfoProps> = (props: IBasicInfoProps) => {
	return (
		<>
			<Container>
				<div className="basic-info">
					<Row>
						<Col>
							{
								props.basics.name
							}
						</Col>
					</Row>

					<Row>
						<Col>
							{
								props.basics.jobTitle
							}
						</Col>
					</Row>

					<Row>
						<Col>
							{
								`${props.basics.yearsOfExperience} years of experience`
							}
						</Col>
					</Row>

					<Row>
						<Col>
							<FontAwesomeIcon icon={faMapMarker} className="me-2" />

							{
								props.basics.location
							}
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default BasicInfo;
