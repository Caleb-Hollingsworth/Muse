import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			displayPhoto: null,
			query: '',
		};
	}
	componentDidMount() {
		const key = process.env.REACT_APP_MYPHOTOAPI_KEY;
		const url1 = 'https://api.pexels.com/v1/curated?per_page=80';
		fetch(url1, { headers: { Authorization: key } })
			.then((res) => res.json())
			.then((json) => {
				let index = Math.floor(Math.random() * 80);
				this.setState({ displayPhoto: json.photos[index].src.landscape });
			});
	}
	setPicture = (event) => {
		event.preventDefault();

		const key = process.env.REACT_APP_MYPHOTOAPI_KEY;
		const url2 = `https://api.pexels.com/v1/search?query=${this.state.query}&per_page=1`;
		fetch(url2, { headers: { Authorization: key } })
			.then((res) => res.json())
			.then((json) => {
				this.setState({ displayPhoto: json.photos[0].src.landscape });
			});
	};
	setQuery = (event) => {
		event.preventDefault();
		this.setState({ query: event.target.value });
	};

	setName = (event) => {
		event.preventDefault();
		this.setState({ newName: event.target.value });
	};
	saveName = (event) => {
		event.preventDefault();
		this.setState({ name: this.state.newName });
	};

	render() {
		return (
			<div className='App'>
				<nav>
					<Link to='/'></Link>
				</nav>
				<main>
					<Route
						exact
						path='/'
						render={() => {
							return (
								<Welcome
									setName={this.setName}
									saveName={this.saveName}
									displayPhoto={this.state.displayPhoto}
								/>
							);
						}}
					/>
					<Route
						path='/home'
						render={() => {
							return (
								<Header
									setQuery={this.setQuery}
									setPicture={this.setPicture}
									name={this.state.name}
									displayPhoto={this.state.displayPhoto}
								/>
							);
						}}
					/>
				</main>
			</div>
		);
	}
}

export default App;
