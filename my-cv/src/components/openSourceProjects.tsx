import { Col, Container, Row } from "react-bootstrap";
import { IProject } from "../models/resume/project";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./shared/sectionTitle";

interface IOpenSourceProjectsProps {
	projects: IProject[]
}

const OpenSourceProjects: React.FC<IOpenSourceProjectsProps> = (props: IOpenSourceProjectsProps) => {
	function nameSort(projectA: IProject, projectB: IProject) {
		const projectAName: string = projectA.displayName;
		const projectBName: string = projectB.displayName;

		if (projectAName < projectBName) {
			return -1;
		}
		else if (projectAName > projectBName) {
			return 1;
		}
		else {
			return 0;
		}
	};

	return (
		<>
			<Container className="no-print">
				<Row>
					<Col>
						<div className="open-source-development mb-3">
							<SectionTitle title="Open Source Contributions" icon={faHandHoldingHeart} />

							{
								props.projects
									.sort((a,b) => nameSort(a, b))
									.map((project, index) => {
									return (
										<div key={index} className="mb-3">
											<div className="fw-bold">
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

			<hr className="no-print" />
		</>
	);
}

export default OpenSourceProjects;
