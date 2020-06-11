import React, {Component} from 'react';
import {connect} from 'react-redux'
import { updateNameFilter } from '../store/actions'
class BookFilter extends Component {
  
   
    render() {
        console.log('props', this.props) 
        return ( <div>
            <input placeholder='Search item -' onChange={(e) => this.props.updateNameFilter(e.target.value)}></input>
        </div> );
    }
}
 



export default connect(null, {updateNameFilter}) (BookFilter);