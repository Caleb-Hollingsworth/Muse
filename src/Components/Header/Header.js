import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';
import Quotes from '../Quotes/Quotes';

import Button from 'react-bootstrap/Button';
import './Header.css';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			display: false,
		};
	}
	handleDisplay = (event) => {
		event.preventDefault();
		this.setState({ display: !this.state.display });
	};
	handleWelcome = (event) => {
		event.preventDefault();
		this.props.history.push('/');
	};
	render() {
		return (
			<div className='main-page'>
				<header className='header'>
					<div className='muse-container'>
						<div className='search-form'>
							{this.state.display && (
								<SearchForm
									setQuery={this.props.setQuery}
									handleDisplay={this.handleDisplay}
									setPicture={this.props.setPicture}
								/>
							)}
							<Button
								size='md'
								variant='outline-light'
								onClick={this.handleDisplay}
								className='search-button'
								type='submit'>
								search
							</Button>
						</div>
						<h2 className='muse' onClick={this.handleWelcome}>
							MUSE
						</h2>
					</div>
				</header>

				<main className='feature'>
					<h1 className='welcome-text'>welcome, {this.props.name}</h1>
					<img className='image' src={this.props.displayPhoto} alt=''></img>
					<div className='quotes'>
						<Quotes className='quote' />
					</div>
				</main>
				<footer className='footer'>
					<a href='https://www.pexels.com'>
						<img
							className='pexel-logo'
							src='https://images.pexels.com/lib/api/pexels.png'
							alt=''
						/>
					</a>
				</footer>
			</div>
		);
	}
}

export default withRouter(Header);
