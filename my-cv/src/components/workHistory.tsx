import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap"
import { IJobRole } from "../models/resume/jobRole";
import SectionTitle from "./shared/sectionTitle";
import { BrevityEnum } from "../models/brevityEnum";

interface IWorkHistoryProps {
	jobHistory: IJobRole[];
	customClass: string;
	brevityLevel: BrevityEnum
}

const WorkHistory: React.FC<IWorkHistoryProps> = (props: IWorkHistoryProps) => {
	return (
		<div className={props.customClass}>
			<Container>
				<Row>
					<Col className="col-print-12 page-break-before-always">
						<div className="work-history mb-3">
							<SectionTitle title="Work History" icon={faLaptopCode} />
							{
								props.jobHistory.map((job, index) => {
									return (
										<div key={index} className="job-history-entry mb-5">
											<div >
												<h5>
													{
														job.end
															? `${job.start} to ${job.end}`
															: `${job.start} to Present`
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
												{
													` | ${job.workModel}`
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
															let fullText = highlight;
															const displayText = props.brevityLevel === BrevityEnum.Full
																? highlight
																: highlight.split("</strong>")[0].replace("<strong>", "");

															return (
																<li key={index} dangerouslySetInnerHTML={{ __html: displayText }}>
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
