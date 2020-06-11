export const updateNameFilter = (name) => (
    {type: "UPDATE_NAME_FILTER", payload: name}
  )

  export const deleteBook = (id)=>(
    {type:'DELETE_BOOK', payload:id}
  )
  export const updateBook = (name)=>(
    {type:'UPDATE_BOOK', payload:name}
  )