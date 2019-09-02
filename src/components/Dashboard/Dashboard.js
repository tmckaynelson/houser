import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import House from '../House/House';
import './Dashboard.css'

class Dashboard extends Component {

    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount = () => {

        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses')
        .then( response => {
            console.log(response.data)
            this.setState({
                houses: response.data
            })
        })
    }

    deleteHouse = (id) => {

        axios.delete(`/api/houses/${id}`)
        .then( response => {
            this.getHouses()
        })
    }

    render() {

        const mappedHouses = this.state.houses.map( (house, index) => {
            return <House key={ index } house={ house } deleteHouse={ this.deleteHouse } />
        })

        console.log(this.state.houses)
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>
                <h2>Home Listings</h2>
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                { mappedHouses }
            </div>
        )
    }
}

export default Dashboard