import React, { Component } from 'react';
import './Quotes.css';

class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			quote: {},
		};
	}
	componentDidMount() {
		fetch('https://type.fit/api/quotes')
			.then((res) => res.json())
			.then((json) => {
				this.setState({ data: json });
				let index = Math.floor(Math.random() * 300);
				let quote = this.state.data[index];
				this.setState({ quote: quote });
			});
	}

	render() {
		return (
			<div>
				<div className='quote'>
					<h1 className='quote-text'>{this.state.quote.text}</h1>
					<p className='quote-author'>-{this.state.quote.author}</p>
				</div>
			</div>
		);
	}
}

export default Quotes;
