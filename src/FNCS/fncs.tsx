import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import Login from "../User/login";
import Logout from "../User/logout";
import Station from "../Station/station";
import Profile from "../Profile/profile";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import { Redirect } from 'react-router-dom';

interface FNCSProps {
}

interface FNCSStates {
    connected: boolean;
}

export default class FNCS extends Component<FNCSProps & RouteComponentProps, FNCSStates> {
    constructor(props) {
        super(props);
        this.state = {
            connected: !!localStorage.getItem('auth_token')
        };
    }
    setConnected = (connected) => {
        this.setState({
            connected: connected
        });
    }
    goHomeIfUserIsConnected() {
        if (this.state.connected) {
            return <Redirect to="/purchase"/>
        }
       return <div/>
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar connected={this.state.connected}/>
                    <Route path="/login" render={() => <Login setConnected={this.setConnected} handleGoHomeIfUserIsConnected={this.goHomeIfUserIsConnected()}/>}/>
                    <Route path="/logout" render={() => <Logout setConnected={this.setConnected}/>}/>
                    <Route path="/purchase" component={Station}/>
                    <Route path="/profile" component={Profile}/>
                </Router>
            </div>
        );
    }
}
