import { Col, Container, Row } from "react-bootstrap";
import { ISkill } from "../models/resume/skill";
import { Rating } from 'react-simple-star-rating'
import { FaFileCode } from 'react-icons/fa';


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
							<h3>
								Skills
							</h3>

							<Container fluid>
								<Row>
									{/* TODO: Could use a stack here? */}
									{
										props.skills.map((skill, index) => {
											return (
												<Col key={index} xs={12} sm={6} md={4} lg={3}>
													<div >
														<div>
															<h5>
																{
																	skill.name
																}
															</h5>
														</div>

														<div>
															<Rating
																ratingValue={skill.rating * 20}
																readonly={true}
																allowHover={false}
																fillColor="currentColor"
																emptyIcon={<FaFileCode size={25} />}
																fullIcon={<FaFileCode size={25} />}
															/>
														</div>

														<div>
															<p>
																<label>
																	{
																		skill.level
																	}
																</label>

																<br />

																<label>
																	{
																		`${skill.yearsOfExperience} ${skill.yearsOfExperience !== 1 ? `years` : `year`} of experience`
																	}
																</label>
															</p>
														</div>
													</div>
												</Col>
											);
										})
									}
								</Row>
							</Container>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Skills;
