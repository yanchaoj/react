import React from 'react'

class Deletebtn extends React.Component {
    render() {
        return <h1 className="deletebtn" onClick={this.props.deleteSingleUser}>Delete</h1>

    }
}

export default Deletebtn