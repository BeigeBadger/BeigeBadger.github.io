import { Col, Container, Row } from "react-bootstrap";
import { ITooling } from "../models/resume/tooling";


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
							{
								props.tooling.map((tool, index) => {
									return (
										<div key={index}>
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
