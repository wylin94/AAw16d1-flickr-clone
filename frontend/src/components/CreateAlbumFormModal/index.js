import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import CreateAlbumForm from './CreateAlbumForm';
import "./index.css"

function CreateAlbumFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button title="Create Album" className='createAlbumButton' onClick={() => setShowModal(true)}>
        <i className="fas fa-folder-plus"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAlbumForm onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateAlbumFormModal;
