import { Col, Container, Row } from "react-bootstrap";
import { IProject } from "../models/resume/project";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IOpenSourceProjectsProps {
	projects: IProject[]
}

const OpenSourceProjects: React.FC<IOpenSourceProjectsProps> = (props: IOpenSourceProjectsProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="open-source-development">
							{
								props.projects.map((project, index) => {
									return (
										<div key={index}>
											<FontAwesomeIcon icon={faHandHoldingHeart} />

											<div>
												{
													project.displayName
												}
											</div>

											<div>
												{
													project.description
												}
											</div>

											<div>
												{
													project.githubUrl &&
													<a href={project.githubUrl}>
														Project homepage
													</a>
												}
											</div>
										</div>
									)
								})
							}
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default OpenSourceProjects;
