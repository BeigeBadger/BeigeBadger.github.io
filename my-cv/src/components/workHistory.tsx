import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap"
import { IJob } from "../models/resume/job";
import SectionTitle from "./shared/sectionTitle";

interface IWorkHistoryProps {
	jobHistory: IJob[];
	customClass: string;
}

const WorkHistory: React.FC<IWorkHistoryProps> = (props: IWorkHistoryProps) => {
	return (
		<div className={props.customClass}>
			<Container>
				<Row>
					<Col className="col-print-12">
						<div className="work-history mb-3">
							<SectionTitle title="Work History" icon={faLaptopCode} />
							{
								props.jobHistory.map((job, index) => {
									return (
										<div key={index} className="job-history-entry mb-5">
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
			</Container>

			{/* Since this component is moved below the value props component when printing, we need to add an HR to separate it from the next element */}
			<hr className="col-print-12 only-show-when-printing" />
		</div>
	)
}

export default WorkHistory;
