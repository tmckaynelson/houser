import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { UPDATE_STEP_TWO } from '../../store'

export default class StepTwo extends Component {

    constructor() {
        super()

        const reduxState = store.getState()

        this.state = {
            img: reduxState.img
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount = () => {

        store.subscribe( () => {
            
            const reduxState = store.getState()

            this.setState({
                img: reduxState.img
            })
        })
    }

    updateRedux = () => {

        let action = {
            type: UPDATE_STEP_TWO,
            payload: {...this.state}
        }

        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <label>Image URL</label>
                <input type='text' onChange={ this.handleChange } name='img' value={ this.state.img } />
                <Link to='/wizard/step1' onClick={ this.updateRedux }><button>Previous Step</button></Link>
                <Link to='/wizard/step3' onClick={ this.updateRedux } ><button>Next Step</button></Link>
            </div>
        )
    }
}
