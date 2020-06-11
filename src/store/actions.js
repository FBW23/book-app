export const addBook = (title, author) => ({
  type: "ADD_BOOK", payload: { title, author }
})

export const updateSearchTerm = (term) => ({
  type: "UPDATE_SEARCH_TERM", payload: term
})