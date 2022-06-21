import React from 'react'
import UserItem from './UserItem'

class Users extends React.Component {
    render() {
        return (
            <UserItem users={this.props.users} setSingleUser={this.props.setSingleUser} />
        )

    }
}

export default Users