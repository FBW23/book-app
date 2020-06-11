export const addBook = (title, author) => ({
  type: "ADD_BOOK", payload: { title, author }
})

export const updateBook = (book) => ({
  type: "UPDATE_BOOK", payload: book
})

export const deleteBook = (id) => ({
  type: "DELETE_BOOK", payload: id
})

export const updateSearchTerm = (term) => ({
  type: "UPDATE_SEARCH_TERM", payload: term
})