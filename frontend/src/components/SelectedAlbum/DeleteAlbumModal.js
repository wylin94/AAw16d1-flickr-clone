import React, { useState } from 'react';
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from '../../context/Modal';
import { deleteAlbum } from "../../store/album";
import "./DeleteAlbumModal.css"

function DeleteAlbumModal() {
	const dispatch = useDispatch();
	const history = useHistory();
	const {albumId} = useParams();
	const currentAlbum = useSelector(state => state.album.find(ele => ele.id === +albumId));
	const [showModal, setShowModal] = useState(false);

	const handleDeleteClick = async (e) => {
		e.preventDefault();
		const toRemove = await dispatch(deleteAlbum(albumId));
		if (toRemove) {
			history.push(`/users/${currentAlbum.userId}/myAlbums`)
		}
	}

	return (
		<>
			<button title="Delete Album" className='selectedAlbumDeleteAlbum' onClick={() => setShowModal(true)}>
				<i className="fas fa-trash-alt"></i>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='createImageFormContainer'>
						<h2 className='createImageFormTitle'>You are about to delete album:</h2>
						<h2 className='createImageFormTitle'>{currentAlbum?.title}</h2>
						<form className='createImageForm' onSubmit={handleDeleteClick}>
							<button type='submit'>Confirm Delete</button>
						</form>
					</div>
				</Modal>
			)}
		</>
	);
}

export default DeleteAlbumModal;



