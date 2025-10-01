import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ResetPasswordPage({
  handleSubmit,
  handleChangeNewPassword,
  handleChangeConfirmNewPassword,
  showPassword,
  newPassword,
  confirmNewPassword,
  handleToggleShowPassword }) {
  return (
    <div className="login-form-wrapper">
      <p className="subtitle">Digite sua nova senha.</p>
      <form onSubmit={handleSubmit} action="#" className="login-form">
        <div className="form-group">
          <label htmlFor="password" className="form-label">Senha:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password" className="form-label">Confirmar Senha:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={confirmNewPassword}
            onChange={handleChangeConfirmNewPassword}
            className="form-control"
          />
          <div className="show-password-group">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={handleToggleShowPassword}

            />
            <label htmlFor='show-password'>Mostrar senha</label>
          </div>
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
      <div className="login-links">
        <p><Link to="/login">Voltar para o Login</Link></p>
      </div>
    </div>

  );
};

ResetPasswordPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeNewPassword: PropTypes.func.isRequired,
  handleChangeConfirmNewPassword: PropTypes.func.isRequired,
  handleToggleShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.object.isRequired,
  newPassword: PropTypes.object.isRequired,
  confirmNewPassword: PropTypes.object.isRequired,
};
