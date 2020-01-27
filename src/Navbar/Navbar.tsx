import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
    connected: boolean
}

interface NavbarState {
    homeSectionActive: string,
    loginSectionActive: string
}

export default class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props) {
        super(props);
        this.state = {
            homeSectionActive: 'active',
            loginSectionActive: 'none-active'
        }
    }
    isHomeSection() {
        this.setState({
            homeSectionActive: 'active',
            loginSectionActive: 'none-active'
        })
    }
    isLoginSection() {
        this.setState({
            homeSectionActive: 'none-active',
            loginSectionActive: 'active'
        })
    }
    render() {
        let login;
        let logout;

        if (!this.props.connected) {
            login = <Link className={this.state.loginSectionActive} onClick={this.isLoginSection.bind(this)} to='/login'>Connexion</Link>;
        } else {
            logout = <Link to='/logout'>Déconnexion</Link>;
        }

        return (
            <div className="topnav">
                <Link className={this.state.homeSectionActive} onClick={this.isHomeSection.bind(this)} to='/'>Accueil</Link>
                {login}
                {logout}
            </div>
        )
    }
}
