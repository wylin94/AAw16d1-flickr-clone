import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from "react-redux";

import { Modal } from '../../context/Modal';
import { createImage } from '../../store/image';
import "./CreateImageForm.css"

function CreateImageForm() {
	const dispatch = useDispatch();
	const { albumId } = useParams();
	const userId = useSelector((state) => state.session.user.id)
	const [showModal, setShowModal] = useState(false);
	const [url, setUrl] = useState('');
	const [description, setDescription] = useState('');

	const handleCreateSubmit = async (e) => {
		e.preventDefault();
		let newImage = await dispatch(createImage({url, description, userId, albumId}));
		if (newImage) {
			setShowModal(false);
		}
	}

	return (
		<>
			<button title="Create Image" className='addImageButton' onClick={() => setShowModal(true)}>
				<i className="fas fa-camera"></i>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='createImageFormContainer'>
						<h2 className='createImageFormTitle'>Create Image</h2>
						<form className='createImageForm' onSubmit={handleCreateSubmit}>
							<label>URL</label>
							<input 
								type='text'
								required
								value={url}
								onChange={e => setUrl(e.target.value)} />
							<label>Description</label>
							<input 
								type='text'
								required
								value={description}
								onChange={e => setDescription(e.target.value)} />
							<button type='submit'>Create</button>
						</form>
					</div>
				</Modal>
			)}
		</>
	);
}

export default CreateImageForm;
