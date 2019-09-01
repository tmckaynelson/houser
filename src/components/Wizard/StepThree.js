import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, { UPDATE_STEP_THREE } from '../../store'

export default class StepThree extends Component {

    constructor() {
        super()

        const { mortgage, rent } = store.getState()

        this.state = {
            mortgage,
            rent
        }
    }

    componentDidMount = () => {

        store.subscribe( () => {

            const { mortgage, rent } = store.getState()

            this.setState({ 
                mortgage,
                rent
            })
        })
    }

    addHouse = () => {

        this.updateRedux()

        const body = store.getState()
        
        axios.post('/api/houses', body)
        .then( () => {
        })
    }

    updateRedux = () => {

        let action = {
            type: UPDATE_STEP_THREE,
            payload: {...this.state}
        }

        store.dispatch(action)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>Recommended rent { 1.25 * +this.state.mortgage }</p>
                <label>Monthly Mortgage Amount</label>
                <input type='text' name='mortgage' value={ this.state.mortgage } onChange={ this.handleChange } />
                <label>Desired Monthly Rent</label>
                <input type='text' name='rent' value={ this.state.rent } onChange={ this.handleChange } />
                <Link to='/wizard/step2' onClick={ this.updateRedux } ><button>Previous Step</button></Link>
                <Link to='/' onClick={ this.addHouse }><button>Complete</button></Link>
            </div>
        )
    }
}
