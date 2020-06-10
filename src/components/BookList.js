import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  render() { 

    let books = this.props.books || []

    let jsxBookList = books.map(book => (
      <div className="book" key={book.id}>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </div>
    ))

    return ( <div className="books">{jsxBookList}</div> );
  }

}

let mapStateToProps = (state) => ({
  books: state.books // this.props.books
})
 
export default connect(mapStateToProps)(BookList);