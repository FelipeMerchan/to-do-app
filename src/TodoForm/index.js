import React, { useState } from 'react';
import { TodoContext} from '../TodoContext';

import './TodoForm.css';

export function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}