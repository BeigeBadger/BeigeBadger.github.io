import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IResume } from "../models/resume/resume";
import { faGithub, faLinkedin, faStackOverflow, faRebel } from "@fortawesome/free-brands-svg-icons";
import { faAward, faBook, faGraduationCap, faMapMarker, faTrophy } from "@fortawesome/free-solid-svg-icons";
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
							`${props.resumeData.basics.yearsOfExperience} years of experience`
						}
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
						props.resumeData.basics.profiles.map((profile, index) => {
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
									<FontAwesomeIcon icon={icon} />

									<a href={profile.url}>
										{
											profile.username
										}
									</a>
								</div>
							);
						})
					}
				</div>
			</div>

			<div className="neck">
				<div className="personal-blurb">
					{
						props.resumeData.basics.summary
					}
				</div>

				<div className="skills">
					{
						props.resumeData.skills.map((skill, index) => {
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

				<div className="what-i-bring">
					{
						props.resumeData.valuePropositions.map((valueProposition, index) => {
							return (
								<div key={index}>
									<label>
										<span>
											{
												valueProposition.description
											}
										</span>
									</label>
								</div>
							);
						})
					}
				</div>
			</div>

			<div className="content">

				<div className="work-history">

				</div>

				<div className="tooling">

				</div>

				<div className="open-source-development">

				</div>

				<div className="awards">
					{
						props.resumeData.awards.map((award, index) => {
							const icon = award.type === "trophy"
								? faTrophy
								: faAward;

							return (
								<div key={index}>
									<FontAwesomeIcon icon={icon} />

									<div>
										{
											award.date
										}
									</div>

									<div>
										{
											award.title
										}
									</div>

									<div>
										{
											award.awarder
										}
									</div>

									<div>
										{
											award.summary
										}
									</div>

									<div>
										{
											award.link && <a href={award.link}>Link</a>
										}
									</div>

								</div>
							)
						})
					}
				</div>

				<div className="publications">
					{
						props.resumeData.publications.map((publication, index) => {
							return (
								<div key={index}>
									<FontAwesomeIcon icon={faBook} />

									<div>
										{
											publication.fullReleaseDate.year
										}
									</div>

									<div>
										{
											publication.name
										}
									</div>

									<div>
										<label>
											{
												publication.authors.join(", ")
											}
										</label>
									</div>

									<div>
										{
											publication.summary
										}
									</div>

									<div>
										{
											publication.url && <a href={publication.url}>Link</a>
										}
									</div>
								</div>
							)
						})
					}
				</div>

				<div className="education">
					{
						props.resumeData.education.map((qualification, index) => {
							return (
								<div key={index}>
									<FontAwesomeIcon icon={faGraduationCap} />

									<div>
										{
											`${qualification.start.year}-${qualification.end.year}`
										}
									</div>

									<div>
										{
											qualification.endorsement
												?
												`${qualification.studyType} with ${qualification.endorsement}`
												:
												`${qualification.studyType}`
										}
									</div>

									<div>
										{
											qualification.area && `Majoring in ${qualification.area}`
										}
									</div>

									<div>
										{
											<a href={qualification.website}>
												{
													qualification.institution
												}
											</a>
										}
									</div>
								</div>
							)
						})
					}
				</div>

				<div className="references">
					{
						props.resumeData.references.map((reference, index) => {
							return (
								<>
									<div key={index}>
										<div>
											{
												reference.role
											}
										</div>

										<div>
											{
												reference.details
											}
										</div>
									</div>
								</>
							);
						})
					}
				</div>
			</div>

			<div className="footer">
			</div>
		</>
	);
};

export default Resume;
