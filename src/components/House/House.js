import React, { Component } from 'react'

class House extends Component {
    render() {
        const { name, address, city, state, zip, id } = this.props.house
        return (
            <div>
                <p>Property Name: { name }</p>
                <p>Address: { address }</p>
                <p>City: { city }</p>
                <p>State: { state }</p>
                <p>Zip: { zip }</p>
                <button onClick={ () => this.props.deleteHouse(id) }>Delete</button>
            </div>
        )
    }
}

export default House