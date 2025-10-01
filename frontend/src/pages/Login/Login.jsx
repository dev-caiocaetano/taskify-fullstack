import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext.jsx';
import LoginPage from '../../components/Login/index.jsx'
import HomePageLink from "../../components/LinkHomePage/index.jsx";
import { toast } from 'react-hot-toast';

export default function Login() {
  const authLogin = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

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

      const messageData = await loginResponse.json();

      if (!loginResponse.ok) {
        toast.error(messageData.message);
        return;
      }

      authLogin.handleLogin(messageData.user, messageData.token);
      navigate('/tarefas');

    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro de conexão. Tente novamente.');
    };
  };

  const handleToggleShowPassword = () => {
    setShowPassword(currentState => !currentState);
  }
  return (
    <div>
      <HomePageLink />
      <LoginPage
        loginData={loginData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showPassword={showPassword}
        handleToggleShowPassword={handleToggleShowPassword}
      />
    </div>
  );
}
