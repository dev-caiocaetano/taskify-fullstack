import { createContext, useState } from "react";
import PropTypes from 'prop-types';

function saveUserLogin() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(saveUserLogin);

  const handleLogin = (userData, token) => {
    setUser(userData);
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
  };

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
