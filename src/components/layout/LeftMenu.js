import React, {Component} from "react";
import {Link} from 'react-router-dom'

export class LeftMenu extends Component {
    render() {
        return (
            <div className={"col-md-2"}>
                <nav>
                    <ul className={"list-group list-group-flush"}>
                        <li className={"list-group-item"}><Link to='/'>Map</Link></li>
                        <li className={"list-group-item"}><Link to='/account-create'>Account</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LeftMenu;