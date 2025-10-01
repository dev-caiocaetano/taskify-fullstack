import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RegisterPage from "../../components/Register/index.jsx";
import Logotype from "../../components/Logotype/index.jsx";
import HomePageLink from "../../components/LinkHomePage/index.jsx";
import { toast } from 'react-hot-toast';
import validator from 'validator';

export default function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({ email: '', password: '', confirmPassword: '', name: '', lastName: '', birthDate: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(previousData => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast.error('As senhas não coincidem!');
      return;
    };

    const passwordValidation = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0
    };

    const password = registerData.password;

    if (!validator.isStrongPassword(password, passwordValidation)) {
      toast.error('A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número.')
      return
    };

    try {
      const url = 'http://localhost:3000/usuarios/cadastro';
      const registerResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)
      });

      const messageData = await registerResponse.json()

      if (!registerResponse.ok) {
        toast.error(messageData.message);
        return;
      }

      toast.success(messageData.message, { duration: 10000 });
      navigate('/login');

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
      <Logotype />
      <RegisterPage
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        registerData={registerData}
        showPassword={showPassword}
        handleToggleShowPassword={handleToggleShowPassword}
      />
    </div>
  );
}
