import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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

  toggleEditMode = () => {
    this.setState({editMode: !this.state.editMode})
  }

  updateBook = () => {
    let book = this.props.book;

    // update item in redux store
    this.props.updateBook({ ...book,
      title: this.state.title, // update title with our value from input field
      author: this.state.author // update author with out value from input field
    }); 
    this.toggleEditMode()
  };

  render() {
    let book = this.props.book;
    let editMode = this.state.editMode;

    return (
      <div className="book">
        <div />
        <div className="book-info" onDoubleClick={this.toggleEditMode}>
          <div className="book-title">
          { editMode ? 
              <input type="text" 
                value={this.state.title} 
                onChange={(e) => this.setState({ title: e.target.value })} /> :
            book.title
          }
          </div>
          <div className="book-author">
          { editMode ? 
              <input type="text" 
              value={this.state.author} 
              onChange={(e) => this.setState({ author: e.target.value })} /> :
            book.author
          }
          </div>
        </div>
        <div className="book-actions">
          <FontAwesomeIcon icon={faSave} onClick={this.updateBook} 
            style={{visibility: editMode ? "visible" : "hidden" }}
          />
          <FontAwesomeIcon icon={faEdit} 
            onClick={this.toggleEditMode} 
          />
          <FontAwesomeIcon icon={faTrashAlt} 
          onClick={() => this.props.deleteBook(book.id)} />
        </div>
      </div>
    );
  }
}

export default connect(null, { updateBook, deleteBook })(Book);
