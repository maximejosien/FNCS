import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import emailPropType from 'email-prop-type';

export class UserPanel extends React.Component {

  render() {
    return React.createElement('div', { style: { width: '18rem'} }, [
        React.createElement('img', { src: 'https://www.gravatar.com/avatar/' + md5(this.props.email), className: 'card-img-top' }),
        React.createElement('div', { className: 'card-body' },
          React.createElement('h5', { className: 'card-title' }, this.props.firstName + ' ' + this.props.lastName))
      ]);
  }
}


UserPanel.propTypes = {
  email: emailPropType.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

// UserPanel.defaultProps = {
//   firstName: 'Maxime',
//   lastName: 'JOSIEN',
//   email: 'maxime.jsn@gmail.com',
// };

// ReactDOM.render(React.createElement(UserPanelClass, {}, null), document.getElementById('root'));
