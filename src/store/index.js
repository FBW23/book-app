import { createStore, applyMiddleware } from "redux";
import booksReducer from "./reducer";
import thunk from 'redux-thunk'

const initialState = {
  
  books: [],
  searchTerm: ''
}

let store = createStore(booksReducer, initialState, applyMiddleware(thunk))

export default store