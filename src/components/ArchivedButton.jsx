import React from 'react';
import { FaArchive } from 'react-icons/fa';

function ArchivedButton({ id, onArchived, isArchived }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchived(id)}
    >
      <FaArchive />
      <span> {isArchived ? 'Unarchive' : 'Archive'}</span>
    </button>
  );
}

export default ArchivedButton;
