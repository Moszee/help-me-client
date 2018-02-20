import React, {Component} from "react";
import Map from './Map.js';
import GoogleApiComponent from "../GoogleApiComponent";

export class Container extends Component {
    render() {
        return (
            <Map google={this.props.google}/>
        )
    }
}

export default GoogleApiComponent({
    apiKey: "AIzaSyD1ZAiejDHyThU11rglxjccZQR10IoYC-w"
})(Container)