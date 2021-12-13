import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IResume } from "../models/resume/resume";
import { faGithub, faLinkedin, faStackOverflow, faRebel } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow, faMap, faMapMarked, faMapMarker, faMapPin } from "@fortawesome/free-solid-svg-icons";
interface IResumeProps {
	resumeData: IResume
};

const Resume: React.FC<IResumeProps> = (props: IResumeProps) => {
	return (
		<>
			<div className="header">
				<div className="basic-info display-flex w-50">
					<div>
						<img src={props.resumeData.basics.picture} alt="avatar" />
					</div>

					<div>
						{
							props.resumeData.basics.name
						}
					</div>

					<div>
						{
							props.resumeData.basics.jobTitle
						}
					</div>

					<div>
						{
							props.resumeData.basics.yearsOfExperience
						} years of experience
					</div>

					<div>
						<FontAwesomeIcon icon={faMapMarker} />

						{
							props.resumeData.basics.location
						}
					</div>
				</div>

				<div className="networks">
					{
						props.resumeData.basics.profiles.map((item, index) => {
							const icon =
								item.iconName === "github"
									? faGithub
									: item.iconName ==="linkedin"
										? faLinkedin
										: item.iconName === "stack-overflow"
											? faStackOverflow
											: faRebel

							return (
								<div key={index}>
									<FontAwesomeIcon icon={icon} />

									<a href={item.url}>
										{
											item.username
										}
									</a>
								</div>
							);
						})
					}

				</div>
			</div>

			<div className="content">
			</div>

			<div className="footer">
			</div>
		</>
	);
};

export default Resume;
