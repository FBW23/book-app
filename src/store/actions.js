export const addBook = (title, author) => ({
  type: "ADD_BOOK", payload: { title, author }
})