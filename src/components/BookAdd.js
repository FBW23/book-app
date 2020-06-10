import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../store/actions';

class BookAdd extends Component {

  // Local State / UI State
  state = { title: '', author: '' }


  addBook = () => {
    this.props.addBook(this.state.title, this.state.author)
    this.setState({title: '', author: ''})
  }

  render() { 

    console.log("Book Add Props:", this.props);

    return ( <div className="book-add">
      {/* save typed data of user in local state */}
      <input value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}
        autoComplete="off" placeholder="Title..." type="text" name="title" />
      <input value={this.state.author} onChange={(e) => this.setState({author: e.target.value})}
        autoComplete="off" placeholder="Author..." type="text" name="author" />
      {/* on submit => call our action - and pass in our form data */}
      <button onClick={this.addBook}>ADD</button>
    </div> );
  }
}

// make our addBook action available to our component
// remember: under the hood this will get dispatched to our reducer
// so all our actions call the same function: the reducer function
// and by the TYPE of the action the reducer will know, 
// what operation it should perform 
export default connect(null, { addBook })(BookAdd);