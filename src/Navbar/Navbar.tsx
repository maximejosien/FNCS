import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
interface NavbarProps {
    connected: boolean
}

interface NavbarState {
}

export default class Navbar extends Component<NavbarProps, NavbarState> {
    isHomeSection() {
        return (['/', '/purchase'].includes(window.location.pathname));
    }
    isLoginSection() {
        return (['login'].includes(window.location.pathname));
    }
    isProfileSection() {
        return (['/profile'].includes(window.location.pathname));
    }
    render() {
        return (
            <div className="topnav">
                <div style={{display: this.props.connected ? 'none' : 'block'}}>
                    <Link className={this.isHomeSection() ? 'active' : 'none'} to='/'>Accueil</Link>
                    <Link className={this.isLoginSection() ? 'active' : 'none'} to='/login'>Connexion</Link>
                </div>
                <div style={{display: this.props.connected ? 'block' : 'none'}}>
                    <Link className={this.isHomeSection() ? 'active' : 'none'} to='/purchase'>Accueil</Link>
                    <Link className={this.isProfileSection() ? 'active' : 'none'} to='/profile'>Mon compte</Link>
                    <Link to='/logout'>Déconnexion</Link>
                </div>
            </div>
        )
    }
}
