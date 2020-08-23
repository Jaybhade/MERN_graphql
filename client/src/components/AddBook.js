import React from 'react';
import { getAuthorsQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import '../App.css';

const AddBook = (props) => {
	const displayAuthors = () => {
		var data = props.data;
		if(data.loading){
			return (<option disabled>Loading Authors...</option>)
		} else {
			return data.authors.map(author => {
				return (<option key={author.id} value={author.id}>{author.name}</option>)
			})
		}
	}

	return(
		<form id="add-book">
	
			<div className="field">
				<label>Book name:</label>
				<input type="text" />
			</div>

			<div className="field">
				<label>Genre:</label>
				<input type="text" />
			</div>

			<div className="field">
				<label>Author:</label>
				<select>
					<option>Select author</option>
					{displayAuthors()}
				</select>
			</div>

			<button>+</button>

		</form>
	)
}

export default graphql(getAuthorsQuery)(AddBook)