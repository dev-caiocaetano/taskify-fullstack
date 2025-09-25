import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RegisterPage from "../../components/Register/index.jsx";
import Logotype from "../../components/Logotype/index.jsx";

export default function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({ email: '', password: '', name: '', lastName: '', birthDate: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(previousData => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        return alert(messageData.message);
      }

      alert('Usuário cadastrado com sucesso! Redirecionado para o login.');
      navigate('/login');

    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro de conexão. Tente novamente.')
    };
  };

  return (
    <div>
      <Logotype />
      <RegisterPage
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        registerData={registerData}
      />
    </div>
  );
}
