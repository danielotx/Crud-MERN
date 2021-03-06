const { create, find, update, remove } = require('../model/tasks.model');

const newTask = async (name, taskStatus) => {
  const task = await create(name, taskStatus);
  return task;
}

const findAll = async () => {
  const findTasks = await find();
  return findTasks;
}

const updateTask = async (id, task, status) => {
  const updatedTask = await update(id, task, status)
  return updatedTask;
};

const removeTask = async (id) => {
  const removing = await remove(id);
  return removing;
}

module.exports = {
  newTask,
  findAll,
  updateTask,
  removeTask,
};