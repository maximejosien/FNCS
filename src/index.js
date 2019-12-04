import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { UserPanel } from './UserPanel';

export default function App({ name }) {
  return React.createElement(UserPanel, { email: 'mail@gmail.com' })
}

export class AppClass extends React.Component {
  render() {
    return React.createElement(UserPanel, { email: 'maxime.jsn@gmail.com', firstName: 'Maxime', lastName: 'JOSIEN' })
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
};

App.defaultProps = {
  name: 'Maxime'
};

ReactDOM.render(React.createElement(AppClass, {}, null), document.getElementById('root'));
