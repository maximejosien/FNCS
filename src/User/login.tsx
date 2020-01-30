import React, {Component} from 'react';
import './login.css';

interface LoginProps {
}

interface LoginState {
    email: string,
    password: string
}

export default class Login extends Component<LoginProps, LoginState> {
    constructor(props) {
        super(props);
        this.state = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    }
    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    async login() {
        const loginResponse = this.fetchLogin();
        const responseJson = (await loginResponse).json();

        if ((await loginResponse).status !== 200) {
            return;
        }

        localStorage.setItem('auth_token', (await responseJson).token);
        localStorage.setItem('email', this.state.email);
        window.location.assign("/purchase");
    }
    fetchLogin() {
        return fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        });
    }
    onSubmitForm(event) {
        this.login();
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                  <form id="formLogin" onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" className="form-control" placeholder="Email" defaultValue={this.state.email} onChange={this.onChangeEmail.bind(this)}/>
                    <br/>
                    <input type="password" className="form-control" placeholder="Mot de passe" defaultValue={this.state.password} onChange={this.onChangePassword.bind(this)}/>
                    <br/>
                    <button type="submit" className="form-control">login</button>
                  </form>
                </div>
            </div>
        )
    }
}
