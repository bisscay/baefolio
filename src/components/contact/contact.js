import React from 'react';
import './contact.css';

export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.showForm = this.showForm.bind(this);
	}
	showForm() {

	}
	render() {
		return(
			<div>
				<h1>Get In Touch</h1>
				<p>Although I'm not currently looking for any freelance opportunities, 
					my inbox is always open. 
					Whether for a potential project or just to say hi, 
					I'll try my best to answer your email!
				</p>
				<button onClick={this.showForm}> Say Hello </button>
				<article class="pa4 black-80">
			  <form action="sign-up_submit" method="get" accept-charset="utf-8">
			    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
			      <legend class="ph0 mh0 fw6 clip">Say Hello</legend>
			      <div class="mt3">
			        <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
			        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div class="mt3">
			        <label class="db fw4 lh-copy f6" for="message">Message</label>
			        <input class="b pa2 input-reset ba bg-transparent" type="text" name="message"  id="message"/>
			      </div>
			    </fieldset>
			    <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send"/></div>
			  </form>
			</article>
			</div>
			);
	}
} 