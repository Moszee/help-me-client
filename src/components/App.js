import React, {Component} from 'react';
import Header from './layout/Header'
import LeftMenu from './layout/LeftMenu'
import '../resources/styles/App.css';
import Body from "./layout/Body";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className={"row"}>
                        <LeftMenu/>
                        <Body/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
