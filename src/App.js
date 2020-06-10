import React from 'react';
import './App.scss';
import BookList from './components/BookList';
import BookAdd from './components/BookAdd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Add your favorite Book!
      </header>
      <main>
        <div className='books-container'>
        <BookAdd></BookAdd>
        <BookList></BookList>
        
        </div>
      </main>
    </div>
  );
}

export default App;
