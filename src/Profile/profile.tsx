import React, {Component} from 'react';
import './profile.css';
import UserPanel from "../UserPanel/UserPanel";
import Ticket from "../Ticket/ticket";

interface ProfileProps {
}

interface ProfileStates {
}

export default class Profile extends Component<ProfileProps, ProfileStates> {
    getEmail() {
        const email = localStorage.getItem('email');
        return email ? email : "";
    }
    render() {
        return (
            <div className="container">
                <div className="row profile-block">
                    <div className="col-lg-4">
                        <UserPanel firstName="Maxime" lastName="JOSIEN" email={this.getEmail()}/>
                    </div>
                    <div className="col-lg-6 border-tickets">
                        <Ticket/>
                    </div>
                </div>
            </div>
        );
    }
}
