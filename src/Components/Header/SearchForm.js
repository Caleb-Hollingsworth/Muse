import React from 'react';
import Form from 'react-bootstrap/Form';
import './SearchForm.css';

function SearchForm({ setQuery, handleDisplay, setPicture }) {
	return (
		<div onSubmit={handleDisplay}>
			<Form className='form' size='lg' onSubmit={setPicture}>
				<Form.Control onChange={setQuery} placeholder='search for photos...' />
			</Form>
		</div>
	);
}

export default SearchForm;
