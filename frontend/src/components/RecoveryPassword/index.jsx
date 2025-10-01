import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RecoveryPassword.css'

export default function RecoveryPasswordPage({ handleSubmit, handleChange, emailRecovery }) {
  return (
    <div className="login-form-wrapper">
      <h2>Recuperar Senha</h2>
      <p className="subtitle">Digite seu e-mail para receber as instruções.</p>

      <form onSubmit={handleSubmit} action="#" className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={emailRecovery}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="form-button">Enviar</button>
      </form>

      <div className="login-links">
        <p><Link to="/login">Voltar para o Login</Link></p>
      </div>
    </div>
  );
}

RecoveryPasswordPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  emailRecovery: PropTypes.object.isRequired,
}
