import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm({ setQuery, handleDisplay, setPicture }) {
	return (
		<div onSubmit={handleDisplay}>
			<Form size='lg' onSubmit={setPicture}>
				<Form.Control onChange={setQuery} placeholder='search for photos...' />
			</Form>
		</div>
	);
}

export default SearchForm;
