import React from 'react';
import { FaTrash } from 'react-icons/fa';

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      <FaTrash />
      <span> Delete</span>
    </button>
  );
}

export default DeleteButton;
