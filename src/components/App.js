import React, {Component} from 'react';
import Header from './layout/Header'
import LeftMenu from './layout/LeftMenu'
import '../resources/styles/App.css';
import MapContainer from "../components/google/map/MapContainer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className={"row"}>
                        <div className={"col-md-2"}>
                            <LeftMenu/>
                        </div>
                        <div className={"col-md-10"}>
                            <MapContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
