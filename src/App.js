import React from 'react';
import './App.scss';
import BookList from './components/BookList';
import BookAdd from './components/BookAdd';
import BookFilter from './components/BookFilter';
import { Component } from 'react';
import { fetchBooks } from './store/actions'
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Book App</h1>
        </header>
        <main>
          <div className="books-container">
            <BookFilter></BookFilter>
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
}

export default connect(null, { fetchBooks })(App);
