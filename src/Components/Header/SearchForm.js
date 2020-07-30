import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm() {
	return (
		<Form size='lg'>
			<Form.Control placeholder='enter name here...' />
			<Button variant='secondary' type='submit'>
				submit
			</Button>
		</Form>
	);
}

export default SearchForm;
