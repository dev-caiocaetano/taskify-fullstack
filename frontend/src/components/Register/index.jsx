import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Register.css';

export default function RegisterPage({ handleSubmit, handleChange, registerData, showPassword, handleToggleShowPassword }) {
  return (
    <div className="register-container">
      <h2>Crie sua conta</h2>

      <form onSubmit={handleSubmit} action="#" className="register-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" name="name" value={registerData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Sobrenome:</label>
          <input id="lastName" type="text" name="lastName" value={registerData.lastName} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input id="email" type="text" name="email" value={registerData.email} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">Data de Nascimento:</label>
          <input id="birthDate" type="date" name="birthDate" value={registerData.birthDate} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input id="password" type={showPassword ? 'text' : 'password'} name="password" value={registerData.password} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input id="confirmPassword" type={showPassword ? 'text' : 'password'} name="confirmPassword" value={registerData.confirmPassword} onChange={handleChange} className="form-control" />
        </div>

        <div className="show-password-group full-width">
          <input type="checkbox" id="showPasswordCheckbox" checked={showPassword} onChange={handleToggleShowPassword} />
          <label htmlFor="showPasswordCheckbox">Mostrar senha</label>
        </div>
        <button type="submit" className="form-button full-width">Cadastrar</button>
      </form>

      <div className="register-links">
        <p>Já tem uma conta? <Link to="/login">Faça Login</Link></p>
      </div>
    </div>
  );
}

RegisterPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleToggleShowPassword: PropTypes.func.isRequired,
  registerDataData: PropTypes.object.isRequired,
  showPassword: PropTypes.object.isRequired,
}
