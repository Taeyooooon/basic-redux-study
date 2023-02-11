import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const onAdd = () => {
  countStore.dispatch({ type: 'ADD' });
};

const onMinus = () => {
  countStore.dispatch({ type: 'MINUS' });
};

add.addEventListener('click', onAdd);

minus.addEventListener('click', onMinus);
