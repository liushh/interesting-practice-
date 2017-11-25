import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import { BACKEND_SERVER_PORT } from './constants';
import './App.css';

class App extends Component {
	componentDidMount() {
		// Example get reports request
		fetch(`http://localhost:${BACKEND_SERVER_PORT}/api/requests`)
		.then(res => res.json())
		.then(result => console.log('Example report request', result));
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's front-end code challenge!</h1>
				</header>
			</div>
		);
	}
}

export default App;
