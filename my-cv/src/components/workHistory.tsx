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
										/* Do no apply the bottom margin on the last element, could also use CSS selectors to do this */
										<div key={index} className={index === props.jobHistory.length - 1 ? "" : "mb-5"}>
											<div >
												<h5>
													{
														job.isCurrentRole
															? `${job.start} to Present`
															: `${job.start} to ${job.end}`
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

											<div className="mb-3">
												{
													job.responsibilities.map((responsibility, index) => {
														return (
															<p key={index}>
																{
																	responsibility
																}
															</p>
														)
													})
												}
											</div>

											<div className="fw-bold">
												Achievements
											</div>

											<div>
												<ul>
													{
														job.highlights.map((highlight, index) => {
															return (
																<li key={index} dangerouslySetInnerHTML={{ __html: highlight }}>
																</li>
															)
														})
													}
												</ul>
											</div>
										</div>
									);
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
