import { Col, Container, Row } from "react-bootstrap";
import { IBasics } from "../models/resume/basics";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface IBasicInfoProps {
	basics: IBasics
};

const BasicInfo: React.FC<IBasicInfoProps> = (props: IBasicInfoProps) => {
	const [yearsOfFullTimeExperience, setYearsOfFullTimeExperience] = useState<number | null>(null)

	useEffect(() => {
		const startDate = dayjs(props.basics.fullTimeExperienceStartDate);
		const now = dayjs();

		// https://day.js.org/docs/en/display/difference#docsNav
		const difference = now.diff(startDate, "years");

		setYearsOfFullTimeExperience(difference);
	}, [props.basics.fullTimeExperienceStartDate]);

	return (
		<>
			<Container>
				<div className="basic-info mb-sm-3">
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
								`${yearsOfFullTimeExperience} years of experience`
							}
						</Col>
					</Row>

					<Row>
						<Col>
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
