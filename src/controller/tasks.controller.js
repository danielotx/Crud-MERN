const { newTask, findAll, updateTask, removeTask } = require('../service/tasks.service');

const create = async (req, res) => {
  const { task, status } = req.body;
  const createTask = await newTask(task, status);
  return res.status(201).json(createTask);
}

const find = async (_req, res) => {
  const tasks = await findAll();
  return res.status(200).json(tasks);
};

const update = async (req, res) => {
  const updated = await updateTask(req.params, req.body);
  return res.status(200).json(updated);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removing = await removeTask(id);
  return res.status(204).json(removing);
};

module.exports = {
  create,
  find,
  update,
  remove,
}