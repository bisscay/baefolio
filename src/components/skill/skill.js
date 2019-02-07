import React from 'react';
import './skill.css';

export class Skill extends React.Component {
	render() {
		return(
			<div>
				<h1> ABOUT </h1>
				<div className="about">
					<div className="aboutText">
						<p>I am a cultured professional based in Abuja with an interest in effective end user connectivity.</p>
						<p>I am well adept with Cisco devices and it's IOS shell.</p>
						<p>I work well and adapt quickly to several distributors I come accross, ocaccasionally Ubiquiti and Mikrotik.</p>
						<p>I also design and develop high quality websites and applications.</p>
					</div>
					<div className="aboutImage">
						<img />
					</div>
				</div>
				<h3>Here are a few things I'm experienced with:</h3>
				<div className="skills">
					<div className="softSkills">
						<h4>MY KNOWLEDGE LEVEL IN SOFTWARE</h4>
						<h5>JAVASCRIPT</h5>
						<div className="progressContainer">
							<div className="progressBar">
								<div id="progressJS"></div>
							</div>
							<div id="progressPercentJS">85%</div>
						</div>
						
						<h5>REACT</h5>
						<div className="progressContainer">
							<div className="progressBar">
								<div id="progressREACT"></div>
							</div>
							<div id="progressPercentJS">90%</div>
						</div>
						<h5>HTML & CSS</h5>
						<div className="progressContainer">
							<div className="progressBar">
								<div id="progressCSS"></div>
							</div>
							<div id="progressPercentJS">95%</div>
						</div>
					</div>
					<div className="netSkills">
						<h4>MY KNOWLEDGE LEVEL IN NETWORKING</h4>
						<h5>CISCO (CCNA)</h5>
						<div className="progressContainer">
							<div className="progressBar">
								<div id="progressCISCO"></div>
							</div>
							<div id="progressPercentJS">98%</div>
						</div>
						<h5>MIKROTIK</h5>
						<div className="progressContainer">
							<div className="progressBar">
								<div id="progressMIKROTIK"></div>
							</div>
							<div id="progressPercentJS">75%</div>
						</div>
						<h5>UBIQUITI</h5>
						<div className="progressContainer">
							<div className="progressBar">
								<div id="progressUNIFI"></div>
							</div>
							<div id="progressPercentJS">80%</div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}