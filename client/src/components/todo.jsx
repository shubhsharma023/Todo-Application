import axios from 'axios';
import { useEffect, useState } from 'react';

function Todo() {
  const [id, setId] = useState('');
  // const [studentname, setName] = useState('');
  const [title, setTask] = useState('');
  const [done, setDone] = useState('');
  const [total, setTotal] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get('http://localhost:27017/all');
    setTotal(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post('http://localhost:27017/add', {
        // studentname: studentname,
        id: id,
        title: title,
        done: done,
      });
      alert('Task Added Successfully!');
      setId('');
      // setName('');
      setTask('');
      setDone('');
      Load();
    } catch (err) {
      alert('Task Addition Failed!');
    }
  }

  async function editTodo(total) {
    // setName(students.studentname);
    setTask(total.title);
    setDone(total.done);
    setId(total.id);
  }

  async function DeleteTodo(id) {
    await axios.delete('http://localhost:27017/delete/' + id);
    alert('Student deleted Successfully');
    Load();
  }

  async function update(event) {
    event.preventDefault();

    try {
      await axios.put('http://localhost:27017/update/' + id, {
        // studentname: studentname,
        id: id,
        title: title,
        done: done,
      });
      alert('Task Added Successfully');
      setId('');
      // setName('');
      setTask('');
      setDone('');
      Load();
    } catch (err) {
      alert('Task addition failed');
    }
  }

  return (
    <div>
      <h1>Todo-Application</h1>
      <div class='container mt-4'>
        <form>
          <div class='form-group'>
            <label>Task ID</label>
            <input
              type='text'
              class='form-control'
              id='id'
              value={id}
              placeholder='Enter Task-ID here'
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
          </div>

          <div class='form-group'>
            <label>Task</label>
            <input
              type='text'
              class='form-control'
              id='title'
              value={title}
              placeholder='Enter Task Description here'
              onChange={(event) => {
                setTask(event.target.value);
              }}
            />
          </div>

          <div class='form-group'>
            <label>Completion</label>
            <input
              type='text'
              class='form-control'
              id='done'
              value={done}
              placeholder='Enter Task Status here "True/False"'
              onChange={(event) => {
                setDone(event.target.value);
              }}
            />
          </div>
          <div>
            <button class='btn btn-primary mt-4' onClick={save}>
              Add
            </button>

            <button class='btn btn-warning mt-4' onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br />
      <table class='table table-dark' align='center'>
        <thead>
          <tr>
            <th scope='col'>Task ID</th>
            <th scope='col'>Task Name</th>
            <th scope='col'>Task Completion </th>
            <th scope='col'>Option</th>
          </tr>
        </thead>
        {total.map(function fn(Todo) {
          return (
            <tbody>
              <tr>
                <td>{Todo.id}</td>
                <td>{Todo.title}</td>
                <td>{Todo.done}</td>
                <td>
                  <button
                    type='button'
                    class='btn btn-warning'
                    onClick={() => editTodo(Todo)}
                  >
                    Edit
                  </button>
                  <button
                    type='button'
                    class='btn btn-danger'
                    onClick={() => DeleteTodo(Todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Todo;
