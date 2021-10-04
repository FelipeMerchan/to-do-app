import React from 'react';

import './TodosLoading.css'

export function TodosLoading() {
  return (
    <div className="TodosLoading">
      <span className="TodosLoading-completeIcon"></span>
      <p className="TodosLoading-text">Estamos obteniendo tus TODOs</p>
      <span className="TodosLoading-deleteIcon"></span>
    </div>
  );
}