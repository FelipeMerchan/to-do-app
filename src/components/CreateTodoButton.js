import React from 'react';

import './styles/CreateTodoButton.css';

const CreateTodoButton = () => {
  const handleClick = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => handleClick('Modal abierto')}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
