import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { updateBook, deleteBook } from '../store/actions';

class Book extends Component {
  // setup local / UI state for our inputs to edit a book
  // take the current values of the book as defaults for our input fiels
  state = {
    editMode: false,
    title: this.props.book.title,
    author: this.props.book.author
  };

  updateBook = () => {
    let titleNew = prompt("New title:")
    if(!titleNew) return // no title given? get outta here...
    let book = this.props.book
    this.props.updateBook({...book, title: titleNew}); // update item in redux store
  };

  render() {

    let book = this.props.book

    return (
      <div className="book" >
        <div></div>
        <div className="book-info">
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
        </div>
        <div className="book-actions">
          <FontAwesomeIcon icon={faEdit} onClick={this.updateBook} />
          <FontAwesomeIcon icon={faTrashAlt} 
            onClick={() => this.props.deleteBook(book.id) } />
        </div>
      </div>
    );

  }
}

export default connect(null, { updateBook, deleteBook })(Book);
