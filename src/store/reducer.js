
const booksReducer = (state, action) => {

  console.log("Reducer received action: ", action);
  
  switch(action.type) {

    case "RECEIVED_BOOKS":
      let booksReceived = action.payload
      return {...state, books: booksReceived}
      
    case "ADD_BOOK":
      let bookNew = action.payload // { title, author }
      bookNew.id = Date.now()

      // create a copy of the array were we wanna add something too
      let booksUpdated = [...state.books, bookNew]
      let stateCopy = {...state, books: booksUpdated}
      return stateCopy

    case "UPDATE_BOOK":
      let bookUpdate = action.payload
      let booksCopy = state.books.map(book => {
        if(book.id == bookUpdate.id) {
          return bookUpdate
        }
        return book
      })
      return {...state, books: booksCopy}
  
    case "DELETE_BOOK":
      let bookId = action.payload
      let booksFiltered = state.books.filter(book => book.id != bookId)
      return {...state, books: booksFiltered}        

    case "UPDATE_SEARCH_TERM":
      return {...state, searchTerm: action.payload}
      
    default: 
      return state
  }

}

export default booksReducer