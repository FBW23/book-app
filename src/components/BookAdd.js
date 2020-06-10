import React, { Component } from "react";
import { connect } from "react-redux"; //import the state
class BookAdd extends Component {
  state = {
      name: '', author:''
  }

  handleInputChange = (e)=>{
    this.setState({[e.target.name]: e.target.value});
  }
    render() { 
        console.log('props', this.props)
        return ( <div className='inputs-container'>
            <input onChange={this.handleInputChange} type='text' name='name' placeholder='Title -'></input>
            <input onChange={this.handleInputChange} type='text' name='author' placeholder='Author -'></input>
            <button onClick={()=>this.props.addBook(this.state.name, this.state.author)}>Add</button>
        </div> );
    }
}

let mapDispatchProps = (dispatch)=>({
    //dispatching - making actions available
addBook: (name, author)=> dispatch({type:'ADD_BOOK', payload:{name, author}})
})

export default connect(null, mapDispatchProps) (BookAdd);