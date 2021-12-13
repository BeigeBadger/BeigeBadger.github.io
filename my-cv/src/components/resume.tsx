import { IResume } from "../models/resume/resume";

interface IResumeProps {
	resumeData: IResume
};

const Resume: React.FC<IResumeProps> = (props: IResumeProps) => {
	return (
		<>
			<div>
				Hello World!
			</div>

			<div>
				{
					props.resumeData.basics.name
				}
			</div>
		</>
	);
};

export default Resume;
