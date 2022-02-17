import axios from 'axios';

const URL = 'http://localhost:3001';

const create = ({task, status}) => {
  return axios.post(URL, {task, status})
};

const findAll = () => {
  return axios.get(URL);
} 

const update = (id, {task, status}) => {
  return axios.put(`${URL}/${id}`, {task, status})
}

const remove = (id) => {
  return axios.delete(`${URL}/${id}`);
}

export {
  create,
  findAll,
  update,
  remove
}
