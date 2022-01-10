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
						<div className="work-history mb-3">
							<SectionTitle title="Work History" icon={faLaptopCode} />

							{
								props.jobHistory.map((job, index) => {
									return (
										<div key={index} className="mb-5">
											<div >
												<h5>
												{
													job.isCurrentRole
														? `${job.startDate} to Present`
														: `${job.startDate} to ${job.endDate}`
												}
												</h5>
											</div>

											<div className="fst-italic">
												{
													job.position
												}
											</div>

											<div className="mb-3">
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
