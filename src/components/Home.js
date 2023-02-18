import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../store/store';
import ToDo from './ToDo';

const Home = () => {
  const [text, setText] = useState('');
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('todo : ', toDos);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText('');
  };

  return (
    <>
      <h1>TODO</h1>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onChange} placeholder='WRITE TODOLIST' value={text} />
      </form>
      <ul>
        {toDos.map((toDo) => {
          return <ToDo key={toDo.id} {...toDo} />;
        })}
      </ul>
    </>
  );
};

export default Home;
