import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToDo } from '../store/store';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onDeleteClick}>DELETE</button>
      </Link>
    </li>
  );
};

export default ToDo;
