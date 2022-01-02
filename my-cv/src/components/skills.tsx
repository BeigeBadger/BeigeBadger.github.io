import { Col, Container, Row } from "react-bootstrap";
import { ISkill } from "../models/resume/skill";

interface ISkillsProps {
	skills: ISkill[];
};

const Skills: React.FC<ISkillsProps> = (props: ISkillsProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="skills">
							{/* TODO: Could use a stack here? */}
							{
								props.skills.map((skill, index) => {
									return (
										<div key={index}>
											<label>
												<span>
													{
														skill.name
													}
												</span>

												<span>
													{
														`${skill.yearsOfExperience} years of experience`
													}
												</span>

												<span>
													{
														skill.level
													}
												</span>
											</label>
										</div>
									);
								})
							}
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Skills;
