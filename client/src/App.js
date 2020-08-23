import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
