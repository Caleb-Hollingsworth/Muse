import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Welcome extends Component {
	constructor() {
		super();
		this.state = {};
	}
	submitForm = (form) => {
		form.preventDefault();
		this.props.history.push('/home');
	};

	render() {
		return (
			<div onSubmit={this.submitForm}>
				<img src={this.props.displayPhoto} alt=''></img>
				<h1>muse</h1>
				<Form size='lg' onSubmit={this.props.saveName}>
					<Form.Control
						onChange={this.props.setName}
						placeholder='enter name here...'
					/>
					<Button variant='secondary' type='submit'>
						submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default withRouter(Welcome);
