import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';

class BookList extends Component {

  render() { 

    console.log("[BookList] Props: ", this.props);

    let books = this.props.books || []
    let searchTerm = this.props.searchTerm

    // search by filtering our list
    if(searchTerm) {
      // searching case insensitive
      searchTerm = searchTerm.toLowerCase()
      books = books.filter(book => book.title.toLowerCase().includes(searchTerm))
    }

    let jsxBookList = books.map(book => (
      <Book key={book.id} book={book}></Book>
    ))

    return ( <div className="books">{
      books.length > 0 ? jsxBookList : <div>No books available</div>
    }</div> );
  }

}

// grab what you need from state and make it available
// to our component as props
let mapStateToProps = (state) => ({
  books: state.books, // this.props.books
  searchTerm: state.searchTerm // this.props.searchTerm
})

export default connect(mapStateToProps)(BookList);