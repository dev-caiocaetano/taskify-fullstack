import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext.jsx';
import Logotype from '../../components/Logotype/index';
import LoginPage from '../../components/Login/index.jsx'

export default function Login() {
  const authLogin = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(previousData => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = 'http://localhost:3000/usuarios/login';
      const loginResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });

      const messageData = await loginResponse.json()

      if (!loginResponse.ok) {
        return alert(messageData.message);
      }

      authLogin.handleLogin(messageData.user, messageData.token);
      navigate('/tarefas');

    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro de conexão. Tente novamente.')
    };
  };
  return (
    <div>
      <Logotype />
      <LoginPage
        loginData={loginData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
