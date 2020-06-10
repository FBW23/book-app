const initialState = {
   books: [
      { name: "Memoirs of a Geisha", author: ' Arthur Golden' },
      { name: "Gone with the Wind", author: 'Margaret Mitchell' },
      { name: "The Book Thief", author: 'Markus Zusak' },
      { name: "The Color Purple", author: ' Alice Walker' }
  
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    return state;
  };
  
  export default rootReducer