import React from 'react';
import PropTypes from 'prop-types';

import User from '../User';

const Users = ({ users }) => (
  <div className="users">
    {users.map(user => (
      <User key={user.id} item={user} />
    ))}
  </div>
);

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Users;
