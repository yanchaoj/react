import React from 'react'
import Button from './Button'
import Deletebtn from './Deletebtn'

class SingleUser extends React.Component {
    render() {
        return (
          <div className="singleuser">
            <h1>Name: {this.props.singleUser.name}</h1>
            <p>Phone: {this.props.singleUser.phone}</p>
            <p>Company: {this.props.singleUser.company.name}</p>
            <p>Websie: {this.props.singleUser.website}</p>
            <p>City: {this.props.singleUser.address.city}</p>
           <Button clearSingleUser={this.props.clearSingleUser}/>
           {/* <Button deleteSingleUser={this.props.deleteSingleUser}/> */}
         </div>
        )
       
    }
}

export default SingleUser