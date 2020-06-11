import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div className="book" key={book.id}>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </div>
    ))

    return ( <div className="books">{jsxBookList}</div> );
  }

}

// grab what you need from state and make it available
// to our component as props
let mapStateToProps = (state) => ({
  books: state.books, // this.props.books
  searchTerm: state.searchTerm // this.props.searchTerm
})

export default connect(mapStateToProps)(BookList);