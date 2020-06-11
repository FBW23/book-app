This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Exercise Project - Book List CRUD - powered by Redux

In this exercise project we will create an app in several stage, driven by redux.

We will see how we can go from first simple displaying of state to changing of state, to API fetching & updating

### Step 4 - Updating & Deleting data

Now we want to explore changing book items, the Redux way

Prep:

  - Outsource your Book JSX in your BookList to a separate component "Book"
  - In BookList component: Pass in the book data as prop
  - Test if your display of books still works
  - Install React-FontAwesome:
    - Instructions: [React-Fontawesome](https://github.com/FortAwesome/react-fontawesome#installation)
    - Or directly: `npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`
  - Display icons in your Book component
    - One for edit (e.g. faEdit) and one for delete (e.g. faTrash or faTrashAlt)
    - Usage of React-Fontawesome in a component - [Examples](https://github.com/FortAwesome/react-fontawesome#usage)


Deletion:

  - Write an deletion case handler in your reducer
    - in payload you expect the id of a book
    - use filter to filter out all books that NOT have this id
      - for safety: rather use != instead of !== comparison
    - overwrite the books array in state with the filtered array:
      - `{...state, books: filteredArray }`
  - Create an action for deletion in actions.js
  - Import the action and "connect" it to your Book component
  - Call the action when you click your delete icon
    - Hint: `this.props.<yourActionName>`


Updating:

  - Write a book update case handler in your reducer
    - It should receive a book object as payload
    - Use map to create an array copy and update single item in one go
  - Create an action for editing in actions.js
  - Import the action and "connect" it to your Book component
  - Realize simple editing first
    - when clicking the edit button - open a prompt using JS prompt() function
    - once the user entered a value and clicked OK:
      - Create an object which merges your current book with the new title:
        - e.g.: `let bookNew = { ...this.props.book, title: <newTitle> }`
      - Call your update action and pass in that object
  - Test if your editing of a title works


Bonus - Inline Editing:

- Still in your Book component - create local state with tree fields:
  - editMode: false, 
  - title: this.props.title, 
  - author: this.props.author
- Adapt the JSX in render:
  - If edit mode is false 
    - conditionally render just the value (no input)
  - If edit mode is true 
    - conditionally render an input field
    - also show a save icon
- Create a toggleFunction to toggle the editMode
- Call the toggleFunction when you click the Edit Icon
- Bind the two input fields to your local state fields (title & author)
  - onChange is your friend for that
- When clicking save:
  - call your update action and pass in the updated book 

### Step 3 - Filtering data

Now we wanna provide filtering of books.

- Add some more data to your initial book list with repeated terms
  - e.g. two books which have the term “React” in the title
- Add a new key searchTerm to your initial state (default: empty string)
- Create a switch case handler for updating searchTerm
- Add a filter component which just holds one input field for your search term
  - OnChange: update the searchTerm in Redux
- Adapt your BookList
  - Import the searchTerm from Redux as prop
  - In render function
    - Check at the beginning if searchTerm is set
    - If so: Filter your array before rendering the JSX list

### Step 2 - Adding data

Now it is time to change data in our state.

We want to implement adding of new books.

So we need to get into the scary territory of the reducer the first time in this app. We need to create some actions (=operations with data) that we send (=dispatch) to our reducer.

- Provide a book adding operation in your reducer
  - Add a switch case statement
  - Provide a default case which just returns the state "as is" (`return state`)
  - Add a case for your action type "ADD_BOOK"
    - Create a copy of your books array and append the new book
    - The data for the new book should be available in the payload
    - Return at the end a copy of your whole state and overwrite the books array
  - For Debugging: Add a console.log at the begin of your reducer (outside the switch-case)
    - Log here the action you receive

- Create an add form
  - provide two inputs title & author + add button
  - save the input values on typing in local state (= UI state), not in Redux please

- Setup action to change state
  - Create a file "actions.js" and create and export a so called "action creator" 
    (= a function that returns an action object with type and payload)
  - Import the action in your component
  - Use the second parameter of connect() function and pass in an object with your action
    - this will make your action for changing state available to our component


- On Form Submit
  - Dispatch the action "ADD_BOOK" to your reducer
  - Test if your adding works and your list gets updated

Great! If you master dispatching, you will master Redux. 

We will practice it more in the upcoming stages, so postpone any suicide action!


### Step 1 - Setup Redux & SCSS

Prep:
- Fork this repository
- Clone it
- Get into folder
- Do `npm install`
- Install node-sass
- Rename your App.css to App.scss
- Cleanup the initial App.js JSX

Redux setup:
- Install packages redux and react-redux
- Setup up the basic Redux structure with a store and a reducer
- Setup some initial books into your initial state

Data display
- Create a book list component
- Make data from state available in our component using mapping of state to props


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
