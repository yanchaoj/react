import React from 'react'

class SingleUser extends React.Component {
    render() {
        return <>
        <h1>Should only render after a single user is clicked on.</h1>
        <p>Use the data that you get back to display the user's name, email, and phone number in a card. Do not worry about styling.</p>
        </>
    }
}

export default SingleUser