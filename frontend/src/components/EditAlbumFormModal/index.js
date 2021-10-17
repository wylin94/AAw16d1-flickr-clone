import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import EditAlbumForm from './EditAlbumForm';
import styles from "./index.module.css"

function EditAlbumFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button title="Edit Album" className={styles.editAlbumButton} onClick={() => setShowModal(true)}>
        <i class="fas fa-edit"></i>
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
