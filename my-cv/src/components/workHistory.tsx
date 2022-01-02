import { Col, Container, Row } from "react-bootstrap"
import { IJob } from "../models/resume/job";

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
							{
								props.jobHistory.map((job, index) => {
									return (
										<div key={index}>
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
													`Achievements: ${job.highlights}`
												}
											</div>

											<div>
												{
													`Description: ${job.description}`
												}
											</div>

											<br />
										</div>
									)
								})
							}
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default WorkHistory;
