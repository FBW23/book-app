import { createStore } from "redux";
import booksReducer from "./reducer";

const initialState = {
  
  books: [
    {id: 1, title: "Guide to React Mastery", author: "FBW23"},
    {id: 2, title: "Guide to Happiness", author: "Unknown"},
  ],
  searchTerm: ''
}

let store = createStore(booksReducer, initialState)

export default store