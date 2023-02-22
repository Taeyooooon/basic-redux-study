import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const toDoText = toDos.find((toDo) => toDo.id === Number(id));

  return (
    <>
      <h1>{toDoText?.text}</h1>
      <h3>Created At : {toDoText?.id}</h3>
    </>
  );
};

export default Detail;
