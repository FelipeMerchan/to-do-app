import React from 'react';

import './styles/TodoItem.css';

const TodoItem = ({ text, completed }) => {
  const onComplete = () => {
    alert(`Completada la tarea + ${text}`)
  }

  const onDelete = () => {
    alert(`Se borró la tarea + ${text}`)
  }

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
};

export { TodoItem };
