import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
    connected: boolean
}

interface NavbarState {
}

export default class Navbar extends Component<NavbarProps, NavbarState> {
    render() {
        return (
            <div className="topnav">
                <div style={{display: this.props.connected ? 'none' : 'block'}}>
                    <Link to='/'>Accueil</Link>
                    <Link to='/login'>Connexion</Link>
                </div>
                <div style={{display: this.props.connected ? 'block' : 'none'}}>
                    <Link to='/purchase'>Accueil</Link>
                    <Link to='/profile'>Mon compte</Link>
                    <Link to='/logout'>Déconnexion</Link>
                </div>
            </div>
        )
    }
}
