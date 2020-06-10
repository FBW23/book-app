import React, { Component } from "react";
import { connect } from "react-redux"; //import the state

class BookList extends Component {
  render() {
    let book = this.props.books;
    let booksMap = book.map((book) => <div><p>{book.name}</p>
    <p>{book.author}</p></div>);

    return <div>{booksMap}</div>;
  }
}
let mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
