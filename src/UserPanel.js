import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import emailPropType from 'email-prop-type';

export function UserPanel({ email, firstName, lastName}) {
  return (
    <>
      {
        <div className="card" style={{width: '18rem'}}>
          <img src={'https://www.gravatar.com/avatar/' + md5(email)} className="card-img-top" alt="hello"/>
          <div className="card-body">
            <h5 className="card-title">{ firstName + lastName}</h5>
            <a href="http://google.com" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      }
    </>
  );
}

UserPanel.propTypes = {
  email: emailPropType.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
