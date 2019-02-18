import React from 'react';
import './contact.css';

export class Contact extends React.Component {
	render() {
		return(
			<div id="contact">
				<h1 className="pl5">Get In Touch</h1>
				<p>Although I'm not currently looking for any freelance opportunities, 
					my inbox is always open. 
					Whether for a potential project or just to say hi, 
					I'll try my best to answer your email!
				</p>
				<div className="pl6 pr6">
				<button>
					<a href="mailto:bisskay@gmail.com" id="button">
						Say Hello
					</a>
				</button>
				</div>
			</div>
			);
	}
} 