import React from 'react';
import '../App.css';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const BookDetails = () => {
	return (
		<div id="book-details">
			<p>Output book details here</p>
		</div>
	)
}

export default graphql(getBookQuery)(BookDetails);