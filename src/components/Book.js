import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { deleteBook } from "../store/actions";
import { updateBook } from "../store/actions";

class Book extends Component {
  handleEditBook = (e) => {
    let bookName = prompt("New name:");
    console.log(bookName);
    this.props.updateBook({ ...this.props.data, name: bookName });
  };

  render() {
    let book = this.props.data;

    return (
      <div className="books-info">
        <div key={book.id} className='book-sec'>
          <p>Title : {book.name}</p>
          <p className="author">Author : {book.author}</p>
        </div>
        <div className='icons'>
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => this.handleEditBook()}
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => this.props.deleteBook(book.id)}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteBook, updateBook })(Book);
