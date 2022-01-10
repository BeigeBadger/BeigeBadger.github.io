import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap"
import { IJob } from "../models/resume/job";
import SectionTitle from "./shared/sectionTitle";

interface IWorkHistoryProps {
	jobHistory: IJob[];
}

const WorkHistory: React.FC<IWorkHistoryProps> = (props: IWorkHistoryProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="work-history">
							<SectionTitle title="Work History" icon={faLaptopCode} />

							{
								props.jobHistory.map((job, index) => {
									return (
										<div key={index} className="mb-3">
											<div>
												{
													job.isCurrentRole
														? `${job.startDate}-Present`
														: `${job.startDate}-${job.endDate}`
												}
											</div>

											<div>
												{
													job.position
												}
											</div>

											<div>
												{
													<a href={job.website}>
														{
															job.company
														}
													</a>
												}
											</div>

											<div>
												{
													`Description: ${job.description}`
												}
											</div>

											<div>
												{
													`Achievements: ${job.highlights}`
												}
											</div>
										</div>
									)
								})
							}
						</div>
					</Col>
				</Row>

				<hr />

			</Container>
		</>
	)
}

export default WorkHistory;
