import React from 'react'


class App extends React.Component {
  // // state you should have
    // users
    // singleUser
    // loading
    // loadingMessage = 'app is loading...' -> pass as props to loading component.

  
  // Components
    // 1. Users
    // 2. UserItem
    // 3. SingleUser (single highlighted user)
    // 4. Loading Component
    // 5. Button component - FOR THE BACK BUTTON

  // Functionality
    // Ability to set a single user (click event on a user)
    // Back buttons should make single user state null. 


  // 1. Use componentDidMount to make an api call to https://jsonplaceholder.typicode.com/users/
  // 2. The app should show all users in a list.
  // 3. Show a loading component while making api calls
  // 4. Show a single user when it is clicked on.
  // 5. Have a back button that changes the singleTodo state back to null.


  // When clicking on a single user, should make API call to https://jsonplaceholder.typicode.com/users/ID, 
  // get the id from the event object that is created. 

  // If loading, render loading component with loading message passed in as props.

  // Conditionaly render Todos -> TodoItem or singleTodo

  constructor(props) {
    super(props)
    this.state = {
      // put state here
    }
  }

  componentDidMount() {
    // Make initial api call here.
  }

  render() {

    const setSingleUser = (e) => {
      // for setting single user.
    }

    const clearSingleUser = () => {
      // changing state for singleUser
    }


    return(
      <h1>Conditionally render Loading component, SingleUser component, or Users component</h1>
    )
  }
}



export default App;
