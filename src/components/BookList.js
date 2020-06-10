import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  render() { 

    console.log("Props:", this.props)
    
    let books = this.props.books || []

    let jsxBookList = books.map(book => (
      <div className="book" key={book.id}>{book.title}</div>
    ))

    return ( <div className="books">{jsxBookList}</div> );
  }

}

let mapStateToProps = (state) => ({
  books: state.books // this.props.books
})
 
export default connect(mapStateToProps)(BookList);