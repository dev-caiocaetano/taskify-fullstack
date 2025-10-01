import { Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks/Tasks.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import PrivateRoute from './components/PrivateRoute/index.jsx';
import Home from './pages/Home/Home.jsx';
import VerificationSucessPage from './pages/VerificationSucess/VerificationSucess.jsx';
import RecoveryPassword from './pages/RecoveryPassword/RecoveryPassword.jsx';
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tarefas' element={
        <PrivateRoute>
          <Tasks />
        </PrivateRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Register />} />
      <Route path='/verificacao-sucesso' element={<VerificationSucessPage />} />
      <Route path='/recuperar-senha' element={<RecoveryPassword />} />
      <Route path="/resetar-senha/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;


