import { useState, useEffect } from 'react';
import { create, findAll, update, remove } from './utils/axiosService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState('pendente');

useEffect(() => {
  const getTasks = async () => {
    const { data } = await findAll();
    return setTasks(data)
  }
  getTasks()
}, [])

  return (
  <div>
    <div>
    <input 
      type='task' 
      name='task'
      label='task' 
      onChange={ (event) => setTask(event.target.value)}
      value={task}>
    </input>
    <select onChange={ (event) => setStatus(event.target.value)}>
      <option value='pendente'>Pendente</option>
      <option value='em andamento'>Em andamento</option>
      <option value='pronto'>Pronto</option>

    </select>
      <button onClick={() => create({ task, status })}>Add</button>
    </div>
    <div>
      <table>
         <tr>
           <th>Tarefa</th>
           <th>Status</th>
           <th>Data</th>
         </tr>
      {tasks.map(({name, status, createdAt, _id}) => (
        <tr id={_id} key={_id}>
          <td>{name}</td>
          <td>{status}</td>
          <td>{createdAt}</td>
          <td>
            <button type='button' onClick={() => update(_id, {task, status}) }>
              Editar
            </button> 
            <button type='button' onClick={() => remove(_id)}>
              Deletar
            </button>
          </td>
          
        </tr>
    ))}

      </table>
      </div> 
    </div>
  );
}

export default App;
