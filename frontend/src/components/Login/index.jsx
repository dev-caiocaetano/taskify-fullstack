import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import Logotype from '../../components/Logotype/index.jsx';


export default function LoginPage({ handleChange, handleSubmit, loginData, showPassword, handleToggleShowPassword }) {
  return (
    <div className="login-page-container">
      <Logotype />
      <div className="login-page-form-wrapper">
        <form onSubmit={handleSubmit} action="#" className="login-page-form">
          <div className="login-page-form-group">
            <label htmlFor="email" className="form-label">E-mail:</label>
            <input
              id="email"
              type="text"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="login-page-form-group">
            <label htmlFor="password" className="form-label">Senha:</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="show-password-group">
            <input
              type="checkbox"
              id="showPasswordCheckbox"
              checked={showPassword}
              onChange={handleToggleShowPassword}
            />
            <label htmlFor="showPasswordCheckbox">Mostrar senha</label>
          </div>

          <button type="submit" className="form-button">Entrar</button>
        </form>
        <div className="divider-login">
          <span>OU</span>
        </div>
        <a href="http://localhost:3000/auth/google" className="google-login-button">
          <FcGoogle size={24} />
          <span>Entrar com o Google</span>
        </a>
        <div className="login-links">
          <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
          <p><Link to="/recuperar-senha">Esqueceu a senha?</Link></p>
        </div>
      </div>


    </div>
  );
};

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loginData: PropTypes.object.isRequired,
  registerDataData: PropTypes.object.isRequired,
  showPassword: PropTypes.object.isRequired,
}

