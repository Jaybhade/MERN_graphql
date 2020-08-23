import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import '../App.css';

const getBooksQuery = gql`
	{
		books{
			name
			id
		}
	}
`

const BookList = (props) => {
	console.log(props)
  return (
    <div>
    	<ul id="book-list">
    		<li>Book name</li>
    	</ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
