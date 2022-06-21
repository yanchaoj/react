import React from 'react'
import Loading from './components/Loading'
import Users from './components/Users'
import SingleUser from './components/SingleUser'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: null,
      singleUser: null,
      loading: true,
      loadingMessage: 'App is loading ...'

    }
  }


  componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users/')
      // fetch('https://hidden-bastion-86690.herokuapp.com/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
      // .then((data) => this.setState({ users: data, loading: false }))
      .catch((err) => console.log(err.message))
  }


  render() {

    const setSingleUser = (e) => {
      this.setState({ loading: true })
      fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}`)
        .then((res) => res.json())
        .then((data) => this.setState({ singleUser: data, loading: false }))
    }

    const clearSingleUser = () => {
      this.setState({ singleUser: null })
    }
    
    const deleteSingleUser = (e) => {
      console.log(e.target.id)
      
      fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}`,{
      method: 'DELETE',
      headers:{'Content-Type': 'application/json'}
      })

}
    

    if (this.state.loading) {
      return (
        <Loading message={this.state.loadingMessage} />
      )

    }

    if (this.state.singleUser){
      return  (
        <SingleUser singleUser={this.state.singleUser} clearSingleUser={clearSingleUser} deleteSingleUser={deleteSingleUser} />
      )

      
    }

    return (

      this.state.users ? <Users users={this.state.users} setSingleUser={setSingleUser} /> : null

    )
  }
}



export default App;
