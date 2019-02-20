import React from 'react';
import './experience.css';

export class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			position: 'ICT Engineer',
			link: 'https://fmckeffi.com.ng/',
			arialLabel: 'Federal Medical Centre Jabi',
			employer: 'Federal Medical Centre Jabi',
			period: 'Nov. 18 - Present',
			role1: 'Developing a website for the institution.', 
			role2: '###',
			role3: 'Running and termination of CAT 6 cables.',
			role4: '###',
			role5: 'Maintenance of network devices, OS installation and optimization.'
		};
		this.changeColor = this.changeColor.bind(this);
		this.changeColor2 = this.changeColor2.bind(this);
		this.changeText3 = this.changeText3.bind(this);
	}

	changeColor() {
		//const newColor = this.state.color === green ? yellow : green;
		this.setState({
			//color: newColor,
			position: 'ICT Engineer',
			link: 'https://fmckeffi.com.ng/',
			arialLabel: 'Federal Medical Centre Jabi',
			employer: 'Federal Medical Centre Jabi',
			period: 'Nov. 18 - Present',
			role1: 'Developing a website for the institution.', 
			role2: '###',
			role3: 'Running and termination of CAT 6 cables.',
			role4: '###',
			role5: 'Maintenance of network devices, OS installation and optimization.'
		});
	}

	changeColor2() {
		this.setState({
			position: 'Networking and Maintenance Engineer',
			link: 'https://fmckeffi.com.ng/',
			arialLabel: 'Federal Medical Centre Keffi',
			employer: 'Federal Medical Centre Keffi',
			period: 'Nov. 17 - Nov. 18',
			role1: 'Mounting and configuration of Cisco routers, Cisco and DLINK switches, Mikrotik and Ubiquiti access points.', 
			role2: 'Coupling and mounting of racks, patch panels, faceplates.',
			role3: 'Running and termination of CAT 6 cables through walls and ceilings.', 
			role4: 'Coaching of interns posted to the department.',
			role5: 'Maintenance of intermediary devices, OS installation and optimization.'
		});
	}

	changeText3() {
		this.setState({
			position: 'Advanced Communication Internship',
			link: 'http://nasrda.gov.ng/en/',
			arialLabel: 'National Space Research and Development Agency',
			employer: 'National Space Research and Development Agency',
			period: 'June 16 - Sept. 16',
			role1: 'Designed and simulated an inverter using a multivibratpr in LT Spice.', 
			role2: 'Implemented an inverter that powered a 128GB RAM, 4TB system.',
			role3: 'Modeled and soldered several mini project: subwoofer amplifier, alarm system, dark detector, night rider.', 
			role4: 'Built extention boxes.',
			role5: 'Conducted desk research, attended talks and prepared presentations.'
		})
	}

	render() {
		return(
			<div>
				<h1> Experience </h1>
					<div className="linkBody">
						<div className="pills pt4 pl3">
								<button onClick={this.changeColor} className="f5 grow br-pill ba ph3 pv2 mb2 mr2 white dib">
									FMC Jabi
								</button>
								<button onClick={this.changeColor2} className="f5 grow br-pill ph3 pv2 mb2 ba mr2 white dib">
									FMC Keffi
								</button>
								<button onClick={this.changeText3} className="f5 grow br-pill ph3 pv2 mb2 ba white dib">
									NSRDA
								</button>
						</div>
						<div className="expContainer pa3 pa5-ns">
							<div className="expContainerBody f5 lh-copy measure-wide">
								<h2>{this.state.note}</h2>
									<p>{this.state.position}</p>
									<a href={this.state.link}
										target="_blank"
										rel="nofollow noopener noreferrer"
										arial-label={this.state.arialLabel}
										>
										<p>{this.state.employer}</p>
									</a>
									<p>{this.state.role1}</p>
									<p>{this.state.role2}</p>
									<p>{this.state.role3}</p>
									<p>{this.state.role4}</p>
									<p>{this.state.role5}</p>
							</div>
						</div>
					</div>
			</div>
			);
	}
}