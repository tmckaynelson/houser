import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import store, { CANCEL } from '../../store'
import './Wizard.css'

class Wizard extends Component {

    cancel = () => {

        store.dispatch({
            type: CANCEL
        })
    }

    render() {
        console.log(store.getState())

        return (
            <div className="wizard">
                <h1>Add New Listing</h1>
               
                <Link to='/' onClick={ this.cancel }><button>Cancel</button></Link>

                <Switch>
                    <Route path='/wizard/step1' component={ StepOne } />
                    <Route path='/wizard/step2' component={ StepTwo } />
                    <Route path='/wizard/step3' component={ StepThree }  />
                </Switch>
            </div>
        )
    }
}

export default Wizard