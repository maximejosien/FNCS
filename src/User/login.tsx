import React, {Component} from 'react';

interface AuthenticationProps {
}

interface AuthenticationState {
    email: string,
    password: string
}

export default class Authentication extends Component<AuthenticationProps, AuthenticationState> {
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
    async authenticate() {
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
        this.authenticate();
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" defaultValue={this.state.email} onChange={this.onChangeEmail.bind(this)}/>
                    <input type="text" defaultValue={this.state.password} onChange={this.onChangePassword.bind(this)}/>
                    <input type="submit" value="Se connecter"/>
                </form>
            </div>
        )
    }
}
