import { Col, Container, Row } from "react-bootstrap";
import { IProject } from "../models/resume/project";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./shared/sectionTitle";

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
							<SectionTitle title="Open Source Contributions" icon={faHandHoldingHeart} />

							{
								props.projects.map((project, index) => {
									return (
										<div key={index} className="mb-3">
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
