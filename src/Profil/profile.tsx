import React, {Component} from 'react';
import './profile.css';
import UserPanel from "../UserPanel";

interface ProfileProps {
}

interface ProfileStates {
}

export default class Profilee extends Component<ProfileProps, ProfileStates> {
    render() {
        return (
            <div className="container">
                <UserPanel firstName="Maxime" lastName="JOSIEN"/>
            </div>
        );
    }
}
