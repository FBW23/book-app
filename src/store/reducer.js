const initialState = {
  books: [
    { id: 1, name: "Memoirs of a Geisha", author: " Arthur Golden" },
    { id: 2, name: "Gone with the Wind", author: "Margaret Mitchell" },
    { id: 3, name: "The Book Thief", author: "Markus Zusak" },
    { id: 4, name: "The Color Purple", author: " Alice Walker" },
    { id: 5, name: "React Hell", author: " Julia" },
  ],
  nameFilter: ''
};

const rootReducer = (state = initialState, action) => {
console.log('reducer received action', action)
  switch(action.type){
    case 'ADD_BOOK':
      let newBook = action.payload //expect: {name:hshshs, author:aja}
      newBook.id = Date.now();
      return {...state, books:[...state.books, action.payload]}

      case 'UPDATE_NAME_FILTER':
        return {...state, nameFilter: action.payload};

        case 'DELETE_BOOK':
         let bookId= action.payload;
         let booksFilter = state.books.filter(book => book.id!= bookId);
         return{...state, books:booksFilter}

         case 'UPDATE_BOOK':
           let bookUpdate = action.payload;
           let booksCopy = state.books.map(book=>{
             if(book.id === bookUpdate.id){
               return bookUpdate
             }
             return book
           })
           return {...state, books:booksCopy}
      default:
        return state
  }
  
};

export default rootReducer;
