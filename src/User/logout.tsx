import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

interface LogoutProps {
}

interface LogoutState {
}

export default class Logout extends Component<LogoutProps, LogoutState> {
    componentDidMount() {
        localStorage.clear();
        window.location.assign("/");
    }
    render() {
        return <Redirect to="/"/>
    }
}
