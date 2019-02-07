import React from 'react';
import './navigation.css';
import { Home } from '../../components/home/home.js';
import { Skill } from '../../components/skill/skill.js';
import { Experience } from '../../components/experience/experience.js';
import { Portfolio } from '../../components/portfolio/portfolio.js';
import { Contact } from '../../components/contact/contact.js';

export class Navigation extends React.Component {
	render() {
		return(
			<nav className="db dt-l w-100 border-box pa3 ph5-l fixed">
			  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
			    <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="baefolio"/>
			  </a>
			  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
			    <a className="link dim gray f6 f5-l dib mr3 mr4-l" href="#home" title="Home">HOME</a>
			    <a className="link dim gray f6 f5-l dib mr3 mr4-l" href="#skill" title="About Me">SKILLS</a>
			    <a className="link dim gray f6 f5-l dib mr3 mr4-l" href="#experience" title="Where I've Worked">EXPERIENCE</a>
			    <a className="link dim gray f6 f5-l dib mr3 mr4-l" href="#portfolio" title="Things I've Built">PORTFOLIO</a>
			    <a className="link dim gray f6 f5-l dib" href="#contact" title="Contact">CONTACT</a>
			  </div>
			</nav>
			);
	}
}