import React, {Component} from 'react';
import Header from './layout/Header'
import LeftMenu from './layout/LeftMenu'
import '../resources/styles/App.css';
import MapContainer from "../components/google/map/MapContainer";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <LeftMenu />
                <MapContainer />
            </div>
        );
    }
}

export default App;
