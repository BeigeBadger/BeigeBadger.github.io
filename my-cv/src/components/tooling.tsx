import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { ITooling } from "../models/resume/tooling";
import SectionTitle from "./shared/sectionTitle";
import { BrevityEnum } from "../models/brevityEnum";


interface IToolingProps {
	tooling: ITooling[]
	brevityLevel: BrevityEnum
}

const Tooling: React.FC<IToolingProps> = (props: IToolingProps) => {
	return (
		<>
			<Container>
				<Row>
					<Col className="col-print-12">
						<div className="tooling mb-3">
							<SectionTitle title="Tooling" icon={faToolbox} />

							<Container className="p-0">
								<Row className="flex-column print-flex-direction-row">

								{
									props.tooling.map((tool, index) => {
										const currentElements = (
											<div>
												{
													` ${tool.current.sort().join(", ")}`
												}
											</div>
										);

										const historicalElements = tool.historical.length <= 0
											? null
											: (
												<div>
													{
														` ${tool.historical.sort().join(", ")}`
													}
												</div>
											);

										return (
											<Col className={`col-print-6 print-order-${tool.printOrder}`}>
												<div key={index} className="mb-3">
													<div>
														<h5>
															{
																tool.name
															}
														</h5>
													</div>

													<>
														<div className="fst-italic">
															{/* <div className="fw-lighter"> */}
															Current
														</div>

														<div className="mb-2">
															{
																currentElements
															}
														</div>
													</>

													{
														tool.historical.length > 0 &&
														props.brevityLevel === BrevityEnum.Full &&
														<div className="no-print">
															<div className="fst-italic">
																{/* <div className="fw-lighter"> */}
																Historical
															</div>

															<div className="mb-2">
																{
																	historicalElements
																}
															</div>
														</div>
													}
												</div>
											</Col>
										)
									})
								}

								</Row>
							</Container>
						</div>

					</Col>
				</Row>
			</Container>

			<hr className="col-print-12" />
		</>
	);
}

export default Tooling;
