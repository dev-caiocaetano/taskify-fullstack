import TaskModel from "../models/Task.js";

export async function createTask(req, res) {
  try {
    const taskData = req.body;
    const taskUserId = req.userId;

    const newTask = await TaskModel.create({
      ...taskData,
      user: taskUserId
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro ao criar a tarefa.' })
  };
};

export async function listAllTasks(req, res) {
  try {
    const foundTask = await TaskModel.find({ user: req.userId });
    res.status(200).json(foundTask);
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro ao tentar listar as tarefas.' });
  };
};

export async function updateTask(req, res) {
  try {
    const filterParams = { _id: req.params.id, user: req.userId };
    const newData = req.body;
    const updateFoundTask = await TaskModel.findOneAndUpdate(filterParams, newData, { new: true });
    if (updateFoundTask !== null) {
      res.status(200).json(updateFoundTask);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada.' });
    };
  } catch (error) {
    res.status(400).json({ message: 'Ocorreu um erro ao tentar encontrar a tarefa. ID inválido.' })
  };
};

export async function deleteTask(req, res) {
  try {
    const filterParams = { _id: req.params.id, user: req.userId };
    const deleteFoundTask = await TaskModel.findOneAndDelete(filterParams);
    if (deleteFoundTask !== null) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada.' });
    };
  } catch (error) {
    res.status(400).json({ message: 'Ocorreu um erro ao tentar encontrar a tarefa. ID inválido.' })
  };
};


