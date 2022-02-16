const { newTask, findAll, updateTask, removeTask } = require('../service/tasks.service');

const create = async (req, res) => {
  const { name, status } = req.body;
  console.log(name, status);
  const createTask = await newTask(name, status);
  return res.status(201).json(createTask);
}

const find = async (_req, res) => {
  const tasks = await findAll();
  return res.status(200).json(tasks);
};

const update = async (req, res) => {
  const { _id } = req.params;
  const updated = await updateTask(_id, req.body);
  return res.status(200).json(updated);
};

const remove = async (req, res) => {
  const { _id } = req.params;
  const removing = await removeTask(_id);
  return res.status(204).json(removing);
};

module.exports = {
  create,
  find,
  update,
  remove,
}