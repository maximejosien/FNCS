import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import emailPropType from 'email-prop-type';
import { BrowserRouter as Router, Route } from 'react-router-dom'

interface UserPanelProps {
  firstName: string,
  lastName: string
}

export default class UserPanel extends React.Component<UserPanelProps, any> {
  static propTypes = {
    email: emailPropType.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }
  onChangeInput(event) {
    this.setState({
      email: event.target.value
    });
  }
  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <img src={'https://www.gravatar.com/avatar/' + md5(this.state.email) + '?s=286'} className="card-img-top" alt="hello"/>
        <div className="card-body">
          <h5 className="card-title">{ this.props.firstName + this.props.lastName}</h5>
          <a href="http://google.com" className="btn btn-primary">Go somewhere</a>
        </div>
        <input type="text" className="form-control" defaultValue={this.state.email} onChange={this.onChangeInput.bind(this)}/>
        <Router>
          <Route path="/" components={UserPanel}/>
        </Router>
      </div>
    );
  }
}
