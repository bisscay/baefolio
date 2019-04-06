import React from 'react';
import classnames from "classnames";
import './navigation.css';
import { Home } from '../../components/home/home.js';
import { Skill } from '../../components/skill/skill.js';
import { Experience } from '../../components/experience/experience.js';
import { Portfolio } from '../../components/portfolio/portfolio.js';
import { Contact } from '../../components/contact/contact.js';

export class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			prevScrollpos: window.pageYOffset,
			visible: true
		};
	}
		// Add an event listener when the component is mount.
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	// 	Hide or show the menu.
	handleScroll = () => {
		const { prevScrollpos } = this.state;

		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos > currentScrollPos;

		this.setState({
			prevScrollpos: currentScrollPos,
			visible
		});
	};
	render() {
		return(
			
			<nav id="navigation"
				className={classnames("navbar", {
					"navbar--hidden": !this.state.visible
				})}
			>
				<div className="db dt-l w-100 border-box pa3 ph5-l fixed">
				  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
				    <div id="imgN" class="dib br-100" alt="baefolio"/>
				  </a>
				  <div className="db dtc-l v-mid w-100 w-75-l tc tl-l">
				    <a className="bc link dim kelly-green f6 f5-l dib mr3 mr4-l" href="#home" title="Home">HOME</a>
				    <a className="bc link dim kelly-green f6 f5-l dib mr3 mr4-l" href="#skill" title="About Me">SKILLS</a>
				    <a className="bc link dim kelly-green f6 f5-l dib mr3 mr4-l" href="#experience" title="Where I've Worked">EXPERIENCE</a>
				    <a className="bc link dim kelly-green f6 f5-l dib mr3 mr4-l" href="#portfolio" title="Things I've Built">PORTFOLIO</a>
				    <a className="bc link dim kelly-green f6 f5-l dib" href="#contact" title="Contact">CONTACT</a>
				  </div>
				</div>
			</nav>
			);
	}
}