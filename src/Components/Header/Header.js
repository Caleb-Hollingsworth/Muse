import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Quotes from '../Quotes/Quotes';
import Button from 'react-bootstrap/Button';
import './Header.css';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			display: false,
			error: false,
		};
	}
	handleDisplay = (event) => {
		event.preventDefault();
		this.setState({ display: true });
	};
	render() {
		return (
			<div class='page'>
				<header className='header-container'>
					{this.state.display && <SearchForm />}
					<div className='emblem-container'>
						<h1 className='muse'>muse</h1>
					</div>
					<h1 className='welcome-text'>Welcome to muse, {this.props.name}</h1>
					<img className='image' src={this.props.displayPhoto} alt=''></img>
					<Button
						onClick={this.handleDisplay}
						className='search-button'
						variant='secondary'
						type='submit'>
						search
					</Button>
				</header>
				<main>
					<Quotes className='quotes' />
				</main>
			</div>
		);
	}
}

export default Header;
