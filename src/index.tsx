import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./User/login";
import Logout from "./User/logout";
import Station from "./Station/station";

export default function App() {
    let connected = false;

    if (localStorage.getItem('auth_token')) {
        connected = true;
    }
    return (
        <div className="App">
            <Router>
                <Navbar connected={connected}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/purchase" component={Station}/>
            </Router>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
