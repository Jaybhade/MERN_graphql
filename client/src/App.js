import React from 'react';
import './App.css';

import BookList from './components/BookList';

function App() {
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
