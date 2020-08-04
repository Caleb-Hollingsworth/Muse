import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Welcome.css';

class Welcome extends Component {
	submitForm = (form) => {
		form.preventDefault();
		this.props.history.push('/home');
	};

	render() {
		return (
			<div className='welcome-page' onSubmit={this.submitForm}>
				<header className='welcome-header'>
					<h1 className='muse-title'>MUSE</h1>
					<div className='form-container'>
						<Form
							className='welcome-form'
							size='lg'
							onSubmit={this.props.saveName}>
							<Form.Control
								className='enter-form'
								onChange={this.props.setName}
								placeholder='enter name here...'
							/>
							<Button
								className='welcome-button'
								variant='outline-light'
								type='submit'>
								submit
							</Button>
						</Form>
					</div>
				</header>
				<main className='welcome-main'>
					<img
						className='welcome-image'
						src={this.props.displayPhoto}
						alt=''></img>
					<a className='welcome-pexel-container' href='https://www.pexels.com'>
						<img
							className='pexel-logo'
							src='https://images.pexels.com/lib/api/pexels.png'
							alt=''
						/>
					</a>
				</main>
			</div>
		);
	}
}

export default withRouter(Welcome);
