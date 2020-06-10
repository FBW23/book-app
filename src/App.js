import React from 'react';
import './App.scss';
import BookList from './components/BookList';
import BookAdd from './components/BookAdd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book App</h1>
      </header>
      <main>
        <div className="books-container">
          <BookList></BookList>
          <BookAdd></BookAdd>
        </div>
      </main>
      <footer>
        &copy; Copyright BookStore reloaded
      </footer>
    </div>
  );
}

export default App;
