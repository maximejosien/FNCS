import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import emailPropType from 'email-prop-type';

interface UserPanelProps {
    firstName: string,
    lastName: string,
    email: string
}

interface UserPanelStates {
    promoCode: string
}

export default class UserPanel extends React.Component<UserPanelProps, UserPanelStates> {
    static propTypes = {
        email: emailPropType.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            promoCode: this.getPromoCode(),
        };
    }
    getPromoCode() {
        const promoCode = localStorage.getItem('promoCode');
        return promoCode ? promoCode : '';
    }
    onChangeInput(event) {
        this.setState({
            promoCode: event.target.value
        });
    }
    onClickButtonPromoCode(event) {
        localStorage.setItem('promoCode', this.state.promoCode);
    }
    getCorrectInputPromoCode() {
        if (localStorage.getItem('stations') === null) {
            return (
                <div>
                    <p>Code de réduction</p>
                    <input type="text" className="form-control" defaultValue={this.state.promoCode}
                           onChange={this.onChangeInput.bind(this)}/>
                    <br/>
                    <input type="submit" className="form-control" value="Appliquer"/>
                </div>
            );
        }
        return (
            <div>
                <p>Code de réduction</p>
                <input disabled type="text" className="form-control" defaultValue={this.state.promoCode}
                       onChange={this.onChangeInput.bind(this)}/>
                <br/>
                <input disabled type="submit" className="form-control" value="Appliquer"/>
            </div>
        );
    }
    render() {
        return (
            <div className="card">
                <img src={'https://www.gravatar.com/avatar/' + md5(this.props.email) + '?s=286'}
                     className="card-img-top" alt="hello"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.firstName + ' ' + this.props.lastName}</h5>
                    <p className="card-title">{this.props.email}</p>
                    <hr/>
                    <form onSubmit={this.onClickButtonPromoCode.bind(this)}>
                        {this.getCorrectInputPromoCode()}
                    </form>
                </div>
            </div>
        );
    }
}
