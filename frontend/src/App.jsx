import { Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks/Tasks.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import PrivateRoute from './components/PrivateRoute/index.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tarefas' element={
        <PrivateRoute>
          <Tasks />
        </PrivateRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Register />} />
    </Routes>
  );
};

export default App;


