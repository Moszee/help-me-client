import React, {Component} from "react";

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top bg-light">
                <a className={"navbar-brand"}>
                    Help Me!
                </a>
            </nav>
        )
    }
}

export default Header;