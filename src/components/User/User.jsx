import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ item }) => (
  <div className="user">
    <Link to={`/user/${item.login}`}>{item.login}</Link>
  </div>
);

User.propTypes = {
  item: PropTypes.shape({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
