import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { ITooling } from "../models/resume/tooling";
import SectionTitle from "./shared/sectionTitle";


interface IToolingProps {
	tooling: ITooling[]
}

const Tooling: React.FC<IToolingProps> = (props: IToolingProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="tooling">
							<SectionTitle title="Tooling" icon={faToolbox} />

							{
								props.tooling.map((tool, index) => {
									return (
										<div key={index} className="mb-3">
											<div>
												{
													tool.name
												}
											</div>

											<div>
												{
													`Current: ${tool.current.join(", ")}`
												}
											</div>

											<div>
												{
													tool.historical.length > 0 && `Historical: ${tool.historical.join(", ")}`
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

export default Tooling;
