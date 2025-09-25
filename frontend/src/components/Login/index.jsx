import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Login.css';
import Imagem1 from '../../assets/img1.jpg';


export default function LoginPage({ handleChange, handleSubmit, loginData }) {
  return (
    <div>
      <div className='homeLinkDiv'>
        <Link to='/' className='homeLink'>Página Inicial</Link>
      </div>
      <div className='loginFormDiv'>
        <form onSubmit={handleSubmit} action="#" className='loginForm'>
          <div>
            <label>E-mail:</label>
            <input
              type="text"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className='emailInput'
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className='passwordInput'
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className='registerText'>
          <p>Não tem uma conta? <Link to="/cadastro" className='registerLinkButton'>Cadastre-se</Link></p>
        </div>
      </div>
      <img src={Imagem1} className='backgroundImageLogin'></img>
    </div>
  );
};

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loginData: PropTypes.object.isRequired,
}

