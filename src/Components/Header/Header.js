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
			<div className='page'>
				<header className='header-container'>
					<div className='emblem-container'>
						<Button
							size='lg'
							variant='outline-light'
							onClick={this.handleDisplay}
							className='search-button'
							type='submit'>
							search
						</Button>
						<h1 className='muse' onClick={this.handleWelcome}>
							muse
						</h1>
					</div>
					<div className='welcome-container'>
						<h1 className='welcome-text'>Welcome to muse, {this.props.name}</h1>
					</div>
					<div className='search-form'>
						{this.state.display && (
							<SearchForm
								setQuery={this.props.setQuery}
								handleDisplay={this.handleDisplay}
								setPicture={this.props.setPicture}
							/>
						)}
					</div>
					<img className='image' src={this.props.displayPhoto} alt=''></img>
				</header>
				<main className='quotes'>
					<Quotes />
				</main>
				<footer>
					<a href='https://www.pexels.com'>
						<img
							className='pexel-logo'
							src='https://images.pexels.com/lib/api/pexels.png'
							alt='images.pexels.com'
						/>
					</a>
				</footer>
			</div>
		);
	}
}

export default withRouter(Header);
