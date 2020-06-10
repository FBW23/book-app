const initialState = {
  books: [
    { id: 1, name: "Memoirs of a Geisha", author: " Arthur Golden" },
    { id: 2, name: "Gone with the Wind", author: "Margaret Mitchell" },
    { id: 3, name: "The Book Thief", author: "Markus Zusak" },
    { id: 4, name: "The Color Purple", author: " Alice Walker" },
  ],
};

const rootReducer = (state = initialState, action) => {
console.log('reducer received action', action)
  switch(action.type){
    case 'ADD_BOOK':
      let newBook = action.payload //expect: {name:hshshs, author:aja}
      newBook.id = Date.now();
      return {...state, books:[...state.books, action.payload]}
      default:
        return state
  }
  
};

export default rootReducer;
