import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

interface LogoutProps {
    setConnected: any
}

interface LogoutState {
}

export default class Logout extends Component<LogoutProps, LogoutState> {
    componentDidMount() {
        localStorage.clear();
        this.props.setConnected(false);
    }
    render() {
        return <Redirect to="/"/>
    }
}
