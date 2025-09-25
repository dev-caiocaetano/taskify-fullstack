import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './src/routes/userRoutes.js';
import taskRoutes from './src/routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/usuarios', userRoutes);
app.use('/tarefas', taskRoutes);

mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Conectado ao MongoDB.');
    app.listen(3000, () => {
      console.log('Servidor executado na porta 3000...');
      console.log('Acessar: http://localhost:3000');
    });
  })
  .catch(error => console.log('Erro ao tentar conectar ao MongoDB.', error))

app.get('/', (req, res) => {
  res.send('Hello World');
});
