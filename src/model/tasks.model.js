const { ObjectId } = require('mongodb');
const connect = require('./connection');

const create = async (name, taskStatus) => {
  const conn = await connect();
  const task = await conn
    .collection('tasks').insertOne({ name, taskStatus });
  return { name, taskStatus };
};

const find = async () => {
  const conn = await connect();
  const tasks = await conn.collection('tasks').find({}).toArray();
  return tasks;
};

const update = async (id, body) => {
  if (!ObjectId.isValid(id)) return false;
  const { name, status } = body;
  const conn = await connect();
  await conn.collection('tasks').updateOne(
  { _id: ObjectId(id) }, { $set: { name, status } },
  );
  return { name, status };
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