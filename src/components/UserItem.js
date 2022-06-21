import React from 'react'


class UserItem extends React.Component {


    render() {
        console.log(this.props.users)

        const handleSetSingleUser = (e) => {
            this.props.setSingleUser(e)
           
           
        }

        

        return (
            this.props.users.map((user) => (
                <>
                    <h2 onClick={handleSetSingleUser} id={user.id}>Name: {user.name}</h2>
                    <h4>UserName: {user.username}</h4>
                
                    
                </>
            ))
        )
    }

}

export default UserItem