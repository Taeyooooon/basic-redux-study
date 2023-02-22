import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store/store';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(remove(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDeleteClick}>DELETE</button>
    </li>
  );
};

export default ToDo;
