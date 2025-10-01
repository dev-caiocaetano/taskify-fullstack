import Logotype from "../../components/Logotype/index.jsx";
import RecoveryPasswordPage from "../../components/RecoveryPassword/index.jsx";
import HomePageLink from "../../components/LinkHomePage/index.jsx";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function RecoveryPassword() {
  const navigate = useNavigate();
  const [emailRecovery, setEmailRecovery] = useState('')

  const handleChange = (event) => {
    setEmailRecovery(event.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = 'http://localhost:3000/usuarios/recuperar-senha';
      const resetResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailRecovery })
      });

      const messageData = await resetResponse.json();

      if (!resetResponse.ok) {
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

  return (
    <div>
      <HomePageLink />
      <Logotype />
      <RecoveryPasswordPage
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        emailRecovery={emailRecovery}
      />
    </div>
  );
};
