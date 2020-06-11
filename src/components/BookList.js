import React, { Component } from "react";
import { connect } from "react-redux"; //import the state
import Book from './Book.js'

class BookList extends Component {
  render() {
    console.log(this.props.nameFilter);
    let books = this.props.books;
    let nameFilter = this.props.nameFilter;
    if (nameFilter) {
      nameFilter = nameFilter.toLowerCase();
      books = books.filter((book) =>
        book.name.toLowerCase().includes(nameFilter)
      );
    }
    let booksMap = books.map((book) => (
    <Book data={book}></Book>
    ));

    return (
      <div>{books.length > 0 ? booksMap : <div>No book available</div>}</div>
    );
  }
}
let mapStateToProps = (state) => ({
  books: state.books,
  nameFilter: state.nameFilter,
});

export default connect(mapStateToProps)(BookList);
