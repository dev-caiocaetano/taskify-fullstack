import PropTypes from 'prop-types';
import './Register.css';
import { Link } from 'react-router-dom';

export default function RegisterPage({ handleSubmit, handleChange, registerData }) {
  return (

    <div className='registerFormDiv'>
      <div className='homeLinkDiv'>
        <Link to='/' className='homeLink'>Página Inicial</Link>
        <Link to='/Login' className='homeLink'> Login</Link>
      </div>
      <form onSubmit={handleSubmit} action="#">
        <div className='allInputs'>
          <div className='inputDiv1'>
            <div className='divName'>
              <label>Nome:</label>
              <input
                type="text"
                name="name"
                value={registerData.name}
                onChange={handleChange}
                className='nameInput'
              />
            </div>
            <div className='divEmail'>
              <label>E-mail:</label>
              <input
                type="text"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                className='registerEmailInput'
              />
            </div>
            <div className='divBirthDate'>
              <label>Data de Nascimento:</label>
              <input
                type="date"
                name="birthDate"
                value={registerData.birthDate}
                onChange={handleChange}
                className='birthDateInput'
              />
            </div>
          </div>
          <div className='inputDiv2'>
            <div className='divLastName'>
              <label>Sobrenome:</label>
              <input
                type="text"
                name="lastName"
                value={registerData.lastName}
                onChange={handleChange}
                className='lastNameInput'
              />
            </div>
            <div className='divPassword'>
              <label>Senha:</label>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                className='registerPasswordInput'
              />
            </div>
            <div className='divButton'>
              <button type="submit" className='registerButton'>Cadastrar</button>
            </div>
          </div>

        </div>

      </form>
    </div >
  )
}

RegisterPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  registerDataData: PropTypes.object.isRequired,
}
