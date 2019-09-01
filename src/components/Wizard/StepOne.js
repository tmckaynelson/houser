import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { UPDATE_STEP_ONE } from '../../store'


export default class StepOne extends Component {

    constructor() {
        super()

        const reduxState = store.getState()

        const { name, address, city, state, zip } = reduxState

        this.state = {
            name,
            address,
            city,
            state,
            zip
        }
    }

    componentDidMount = () => {

        store.subscribe(() => {
            const { name, address, city, state, zip } = store.getState()

            this.setState({
                name,
                address,
                city,
                state,
                zip
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateRedux = () => {

        let action = {
            type: UPDATE_STEP_ONE,
            payload: {...this.state}
        }

        store.dispatch(action)
    }


    render() {
        console.log(this.state)
        console.log(store.getState())

        return (
            <div>
                <label>Property Name</label>
                <input type='text' name='name' onChange={ this.handleChange } value={ this.state.name } />
                <label>Address</label>
                <input type='text' name='address' onChange={ this.handleChange } value={ this.state.address } />
                <label>City</label>
                <input type='text' name="city" onChange={ this.handleChange } value={ this.state.city } />
                <label>State</label>
                <input type='text' name="state" onChange={ this.handleChange } value={ this.state.state } />
                <label>Zip</label>
                <input type='text' name="zip" onChange={ this.handleChange } value={ this.state.zip } />
                <Link to='/wizard/step2' onClick={ this.updateRedux }><button>Next Step</button></Link>
            </div>
        )
    }
}
