import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

class Wizard extends Component {

    render() {

        return (
            <div>
                <h1>Add New Listing</h1>
               
                <Link to='/'><button>Cancel</button></Link>

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