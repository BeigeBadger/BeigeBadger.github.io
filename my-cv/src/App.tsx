import logo from './images/Matt-Gravatar.png';
import './App.scss';
import { useEffect, useState } from 'react';
import { IResume } from './models/resume/resume';
import Resume from './components/resume';


const App = () => {
	const [resumeData, setResumeData] = useState<IResume | null>(null)
	const [isUnderConstruction, setIsUnderConstruction] = useState<boolean>(false);

	useEffect(() => {
		async function LoadResumeDetailsFromLocalFile() {
			const resumeFileName = "resume.json";

			const resumeJson =
				await fetch(resumeFileName)
					.then(function (response) {
						return response.json();
					})
					.catch(function (reason) {
						debugger;
						// TODO: Handle the failure case
					});

			console.log(resumeJson);

			const resumeData = resumeJson as IResume;

			setResumeData(resumeData);
		}

		LoadResumeDetailsFromLocalFile();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{
					isUnderConstruction
						?
							<>
								<img src={logo} className="App-logo" alt="logo" />
								<p>
									Under construction, check back soon.
								</p>
							</>
						: null
				}

				{
					resumeData !== null && !isUnderConstruction
						? <Resume resumeData={resumeData} />
						: null
				}
			</header>
		</div>
	);
};

export default App;
