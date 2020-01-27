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
          <div className="login-page">
            <div className="form">
              <form onSubmit={this.onSubmitForm.bind(this)} className="login-form">
                <input type="text" placeholder="Email" defaultValue={this.state.email} onChange={this.onChangeEmail.bind(this)}/>
                <input type="password" placeholder="Mot de passe" defaultValue={this.state.password} onChange={this.onChangePassword.bind(this)}/>
                <button type="submit">login</button>
              </form>
            </div>
          </div>
        )
    }
}
