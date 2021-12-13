import logo from './images/Matt-Gravatar.png';
import './App.scss';
import { useEffect } from 'react';
import { IResume } from './models/resume/resume';


const App = () => {
	useEffect(() => {
		async function LoadResumeDetailsFromLocalFile() {
			const resumeFileName = "resume.json";

			const resumeJson =
				await fetch(resumeFileName)
					.then(function(response) {
						return response.json();
					})
					.catch(function(reason) {
						debugger;
						// TODO: Handle the failure case
					});

			console.log(resumeJson);

			const resume = resumeJson as IResume;
		}

		LoadResumeDetailsFromLocalFile();
	 }, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Under construction, check back soon.
				</p>
			</header>
		</div>
	);
}

export default App;
