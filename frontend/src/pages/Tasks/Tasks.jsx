import Logotype from '../../components/Logotype/index';
import Form from '../../components/Form/index';
import Tasks from '../../components/Tasks';
import TaskFilter from '../../components/TaskFilter/index.jsx';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext.jsx';
import './Tasks.css';
import { toast } from 'react-hot-toast';

function Taskify() {
  const { user, handleLogout } = useContext(AuthContext);
  const [taskData, setTaskData] = useState({
    description: '',
    priority: 'Baixa',
    status: 'Pendente',
    dueDate: ''
  });
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [order, setOrder] = useState('createdAt-desc');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    async function fetchTasks() {
      try {
        const token = localStorage.getItem('token');
        const databaseResponse = await fetch('http://localhost:3000/tarefas', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!databaseResponse.ok) {
          if (databaseResponse.status === 401) {
            setTasks([]);
          }
          throw new Error('Falha ao buscar tarefas');
        }

        const data = await databaseResponse.json();
        setTasks(data);

      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        toast.error('Não foi possível carregar as tarefas.')
      }
    };
    if (user) {
      fetchTasks();
    } else {
      setTasks([]);
    }

  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskData(previousData => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const taskText = taskData.description.trim();
    if (!taskText) return toast.error('Adicione uma tarefa para continuar.');

    if (editTask !== null) {
      try {
        const token = localStorage.getItem('token');
        const url = `http://localhost:3000/tarefas/${editTask}`

        const newTaskResponse = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(taskData),
        });

        if (!newTaskResponse.ok) throw new Error('Erro ao atualizar tarefa');

        const updateTask = await newTaskResponse.json();

        const taskList = tasks.map(task => {
          if (task.id === updateTask.id) {
            return updateTask
          };
          return task;
        });

        setTasks(taskList);
        setEditTask(null);
        setTaskData({
          description: '',
          priority: 'Baixa',
          status: 'Pendente',
          dueDate: '',
        });
      } catch (error) {
        console.error(error);
        toast.error('Ops! Algo deu errado. Tente novamente em alguns instantes.')
      };
    } else {
      try {
        const token = localStorage.getItem('token');
        const sendDataResponse = await fetch('http://localhost:3000/tarefas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(taskData),
        });

        if (!sendDataResponse.ok) {
          const erro = await sendDataResponse.json();
          throw new Error(erro.message || 'Falha ao criar tarefa');
        }

        const taskSaveOnBackend = await sendDataResponse.json();

        setTasks([...tasks, taskSaveOnBackend]);

        setTaskData({
          description: '',
          priority: 'Baixa',
          status: 'Pendente',
          dueDate: '',
        });

      } catch (error) {
        console.error('Erro encontrado no handleSubmit:', error);
        editTask ? toast.error('Ocorreu um erro ao atualizar a tarefa.') : toast.error('Ocorreu um erro ao criar a nova tarefa.');
      };
    };

  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    let formattedDate = '';
    if (taskToEdit.dueDate) {
      const dateObject = new Date(taskToEdit.dueDate);
      formattedDate = dateObject.toISOString().split('T')[0];
    }
    if (taskToEdit) {
      setEditTask(id);
      setTaskData({ ...taskToEdit, dueDate: formattedDate });
    };
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const url = `http://localhost:3000/tarefas/${id}`
      const responseDelTask = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }

      });

      if (!responseDelTask.ok) {
        throw new Error('Falha ao deletar a tarefa.');
      };

      setTasks(tasks.filter((task) => task.id !== id));
      if (id === editTask) {
        setTaskData({
          description: '',
          priority: 'Baixa',
          status: 'Pendente',
          dueDate: '',
        })
        setEditTask(null)
      }
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
      toast.error('Falha ao deletar a tarefa.')
    };
  };

  const tasksToDisplay = tasks.filter(task => {
    if (!statusFilter) {
      return true;
    }
    return task.status === statusFilter;
  })
    .filter(task => {
      if (!priorityFilter) {
        return true;
      }
      return task.priority === priorityFilter;
    })
    .sort((a, b) => {
      const [field, direction] = order.split('-');

      if (direction === 'asc') {
        if (field === 'dueDate') {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return String(a[field]).localeCompare(b[field]);
      } else {
        if (field === 'dueDate') {
          return new Date(b.dueDate) - new Date(a.dueDate);
        }
        return String(b[field]).localeCompare(a[field]);
      }
    });

  return (
    <>
      <div>
        <header className='tasks-header'>
          <p className='tasks-header-greeting'>Olá, {user.name}</p>
          <button onClick={handleLogout} type="button" className="tasks-header-logout-button">Sair</button>
        </header>
        <div>
          <Logotype />
        </div>
        <TaskFilter
          orderValue={order}
          onOrderChange={setOrder}
          priorityValue={priorityFilter}
          onPriorityChange={setPriorityFilter}
          statusValue={statusFilter}
          onStatusChange={setStatusFilter}
        />
        <div>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            taskData={taskData}
          />
          <Tasks
            tasks={tasksToDisplay}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default Taskify;
