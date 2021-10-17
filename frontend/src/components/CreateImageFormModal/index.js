import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import CreateImageForm from './CreateImageForm';
import styles from "./index.module.css"

function CreateImageFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button title="Create Image" className={styles.addImageButton} onClick={() => setShowModal(true)}>
        <i class="fas fa-camera"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateImageForm onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateImageFormModal;
