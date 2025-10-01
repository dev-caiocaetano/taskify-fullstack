import { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import toast from "react-hot-toast";

export default function AuthCallback() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
          localStorage.setItem('token', token)

          const url = 'http://localhost:3000/usuarios/me';
          const authResponse = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            },
          });

          if (!authResponse.ok) {
            throw new Error('Falha ao buscar dados do usuário.');
          };

          const userData = await authResponse.json();

          auth.handleLogin(userData, token);
          navigate('/tarefas');
        };
      } catch (error) {
        console.error('Erro no callback de autenticação:', error);
        toast.error('Falha na autenticação. Tente fazer o login novamente.');
        navigate('/login');
      }
    };

    handleAuthCallback();

  }, [auth, navigate]);

  return <p>Autenticando...</p>;
}


