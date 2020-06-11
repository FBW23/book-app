import React, { Component } from 'react';
import { updateSearchTerm } from '../store/actions'
import { connect } from 'react-redux';

class BookFilter extends Component {

  render() { 
    return ( <div className="book-filter">
      <input text="text" 
        onChange={(e) => this.props.updateSearchTerm(e.target.value)}
        placeholder="Search term..." />
    </div>
    );
  }
}
 
export default connect(null, { updateSearchTerm })(BookFilter);