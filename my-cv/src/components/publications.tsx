import { Col, Container, Row } from "react-bootstrap";
import { IPublication } from "../models/resume/publication";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./shared/sectionTitle";

interface IPublicationProps {
	publications: IPublication[]
}

const Publications: React.FC<IPublicationProps> = (props: IPublicationProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="publications mb-3">
							<SectionTitle title="Publications" icon={faBook} />

							{
								props.publications.map((publication, index) => {
									return (
										<div key={index} className="mb-3">
											<div className="fw-bold">
												{
													publication.fullReleaseDate.year
												}
											</div>

											<div className="fst-italic">
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
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Publications;
