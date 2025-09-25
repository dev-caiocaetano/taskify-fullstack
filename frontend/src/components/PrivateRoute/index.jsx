import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return <Navigate to="/login"/>
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
