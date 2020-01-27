import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

interface LogoutProps {
}

interface LogoutState {
}

export default class Logout extends Component<LogoutProps, LogoutState> {
    componentDidMount() {
        localStorage.removeItem('auth_token');
    }
    render() {
        return <Redirect to="/"/>
    }
}
