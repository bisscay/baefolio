import React from 'react';
import './home.css';

export  class Home extends React.Component {
	render() {
		return(
			<div className="home">
				<h6 className="hi">Hi, my name is</h6>
				<h1 className="name">Bissallah Ekele<span className="catchy">.</span></h1>
				<h4 className="job1">a n<span className="catchy">e</span>twork engineer <span className="catchy">&</span></h4>
				<h4 className="job2">web de<span className="catchy">v</span>eloper</h4>
			</div>
			);
	}
}