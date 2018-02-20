import React, {Component} from "react";
import MapContainer from "../../components/google/map/MapContainer";
import AccountCreate from "../../components/account/Create"
import {Switch, Route} from 'react-router-dom'

export class Body extends Component {
    render() {
        return (
            <div className={"col-md-10"}>
                <Switch>
                    <Route exact path='/' component={MapContainer} />
                    <Route path='/account-create' component={AccountCreate} />
                </Switch>
            </div>
        )
    }
}

export default Body;