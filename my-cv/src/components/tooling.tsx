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
						<div className="tooling mb-3">
							<SectionTitle title="Tooling" icon={faToolbox} />

							{
								props.tooling.map((tool, index) => {
									const currentElements = (
										<div>
											{
												` ${tool.current.join(", ")}`
											}
										</div>
									);

									const historicalElements = tool.historical.length <= 0
										? null
										: (
											<div>
												{
													` ${tool.historical.join(", ")}`
												}
											</div>
										);

									return (
										<div key={index} className="mb-3">
											<div>
												<h5>
													{
														tool.name
													}
												</h5>
											</div>

											<div className="fst-italic">
												{/* <div className="fw-lighter"> */}
												Current
											</div>

											<div className="mb-2">
												{
													currentElements
												}
											</div>

											{
												tool.historical.length > 0 &&
												<>
													<div className="fst-italic">
														{/* <div className="fw-lighter"> */}
														Historical
													</div>

													<div className="mb-2">
														{
															historicalElements
														}
													</div>
												</>
											}
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
