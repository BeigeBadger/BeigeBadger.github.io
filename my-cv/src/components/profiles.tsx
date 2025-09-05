import { Col, Container, Row } from "react-bootstrap";
import { IProfile } from "../models/resume/profile";
import { faGithub, faLinkedin, faStackOverflow, faRebel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProfilesProps {
	profiles: IProfile[]
};

const Profiles: React.FC<IProfilesProps> = (props: IProfilesProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="profiles">
							{/* TODO: Could use a stack here? */}
							{
								props.profiles.map((profile, index) => {
									const icon =
										profile.iconName === "github"
											? faGithub
											: profile.iconName === "linkedin"
												? faLinkedin
												: profile.iconName === "stack-overflow"
													? faStackOverflow
													: faRebel;

									return (
										<div key={index}>
											<FontAwesomeIcon icon={icon} className="me-2" />

											<a href={profile.url}>
												{
													profile.network
												}
											</a>
										</div>
									);
								})
							}
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Profiles;
