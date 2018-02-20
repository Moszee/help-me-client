import React, {Component} from "react";

export class LeftMenu extends Component {
    render() {
        return (
            <nav>
                <ul className={"list-group list-group-flush"}>
                    <li className={"list-group-item"}>item1</li>
                    <li className={"list-group-item"}>item2</li>
                    <li className={"list-group-item"}>item3</li>
                </ul>
            </nav>
        )
    }
}

export default LeftMenu;