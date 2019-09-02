import React, { Component } from 'react'
import './House.css'

class House extends Component {
    render() {
        const { name, address, city, state, zip, id, img, mortgage, rent } = this.props.house
        return (
            <div className="house">
                <img src={ `${ img }` } alt={ name } />
                <p>Property Name: { name }</p>
                <p>Address: { address }</p>
                <p>City: { city }</p>
                <p>State: { state }</p>
                <p>Zip: { zip }</p>
                <p>Monthly Mortgage { mortgage }</p>
                <p>Desired Rent { rent }</p>
                <button onClick={ () => this.props.deleteHouse(id) }>Delete</button>
            </div>
        )
    }
}

export default House