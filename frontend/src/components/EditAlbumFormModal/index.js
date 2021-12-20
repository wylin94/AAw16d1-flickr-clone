import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import EditAlbumForm from './EditAlbumForm';
import "./index.css"

function EditAlbumFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button title="Edit Album" className='editAlbumButton' onClick={() => setShowModal(true)}>
        <i className="fas fa-edit"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditAlbumForm onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default EditAlbumFormModal;
