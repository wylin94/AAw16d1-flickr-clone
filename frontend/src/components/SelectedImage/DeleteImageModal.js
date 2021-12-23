import React, { useState } from 'react';
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from '../../context/Modal';
import { getAllImage, deleteImage } from "../../store/image";
import "./DeleteImageModal.css"

function DeleteImageModal() {
	const dispatch = useDispatch();
	const history = useHistory();
    const { imageId } = useParams();
	const currentImage = useSelector(state => state.image.find(
        ele => ele.id === +imageId
    ))
	const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = async (e) => {
        e.preventDefault();
        const toRemove = await dispatch(deleteImage(imageId));
        if (toRemove) {
            history.push(`/albums/${currentImage.albumId}`)
        }
    }

	return (
		<>
            <button title="Delete Image" className='selectedImageDeleteImage' onClick={() => setShowModal(true)}>
                <i className="fas fa-trash-alt"></i>
            </button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='createImageFormContainer'>
						<h2 className='createImageFormTitle'>You are about to delete this image</h2>
						<form className='createImageForm' onSubmit={handleDeleteClick}>
							<button type='submit'>Confirm Delete</button>
						</form>
					</div>
				</Modal>
			)}
		</>
	);
}

export default DeleteImageModal;


