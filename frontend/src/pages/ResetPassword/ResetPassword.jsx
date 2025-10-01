import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import validator from 'validator';
import Logotype from "../../components/Logotype/index.jsx";
import ResetPasswordPage from '../../components/ResetPassword/index.jsx';
import HomePageLink from "../../components/LinkHomePage/index.jsx";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      toast.error('As senhas não coincidem!');
      return;
    };

    const newPasswordValidation = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0
    };

    if (!validator.isStrongPassword(newPassword, newPasswordValidation)) {
      toast.error('A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número.')
      return
    };

    try {
      const url = `http://localhost:3000/usuarios/resetar-senha/${token}`;
      const newPasswordResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword, confirmNewPassword })
      });

      const messageData = await newPasswordResponse.json()

      if (!newPasswordResponse.ok) {
        toast.error(messageData.message);
        return;
      }

      toast.success(messageData.message, { duration: 30000 });
      navigate('/login');

    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro de conexão. Tente novamente.');
    };

  };

  const handleChangeNewPassword = (event) => {
    setNewPassword(event.target.value)
  };

  const handleChangeConfirmNewPassword = (event) => {
    setConfirmNewPassword(event.target.value)
  };

  const handleToggleShowPassword = () => {
    setShowPassword(currentState => !currentState);
  };

  return (
    <div>
      <HomePageLink />
      <Logotype />
      <ResetPasswordPage
        handleSubmit={handleSubmit}
        handleChangeNewPassword={handleChangeNewPassword}
        handleChangeConfirmNewPassword={handleChangeConfirmNewPassword}
        showPassword={showPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmNewPassword={confirmNewPassword}
        setConfirmNewPassword={setConfirmNewPassword}
        handleToggleShowPassword={handleToggleShowPassword}
      />

    </div>
  );
}
