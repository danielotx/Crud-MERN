const { ObjectId } = require('mongodb');
const connect = require('./connection');

const create = async (name, status) => {
  const conn = await connect();
  await conn.collection('tasks').insertOne({ name, status, createdAt: new Date() });
  return { name, status };
};

const find = async () => {
  const conn = await connect();
  const tasks = await conn.collection('tasks').find({}).toArray();
  return tasks;
};

const update = async (id, task, status) => {
  if (!ObjectId.isValid(id)) return false;
  const conn = await connect();
  await conn.collection('tasks').updateOne(
  { _id: ObjectId(id) }, { $set: { name: task, status } },
  );
  return { name: task, status };
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  const conn = await connect();
  const removed = conn.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return removed;
};

module.exports = {
  create,
  find,
  update,
  remove,
};