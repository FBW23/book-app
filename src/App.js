import React from 'react';
import './App.scss';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Search for your favorite Book!
      </header>
      <main>
        <div className='books-container'>
        <BookList></BookList>
        </div>
      </main>
    </div>
  );
}

export default App;
