import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm({ setQuery, handleDisplay, setPicture }) {
	return (
		<div onSubmit={handleDisplay}>
			<Form size='lg' onSubmit={setPicture}>
				<Form.Control onChange={setQuery} placeholder='enter name here...' />
			</Form>
			<Button onClick={handleDisplay} variant='outline-light' type='submit'>
				close
			</Button>
		</div>
	);
}

export default SearchForm;
