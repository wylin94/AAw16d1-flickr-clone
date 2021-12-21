import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Modal } from '../../context/Modal';
import { createAlbum } from '../../store/album';
import "./CreateAlbumForm.css"

function CreateAlbumForm() {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.session.user.id)
	const [showModal, setShowModal] = useState(false);
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');

	const handleCreateSubmit = async (e) => {
		e.preventDefault();
		const newAlbum = await dispatch(createAlbum({url, title, userId}));
		if (newAlbum) {
			setShowModal(false);
		}
	}

	return (
		<>
			<button title="Create Album" className='createAlbumButton' onClick={() => setShowModal(true)}>
				<i className="fas fa-folder-plus"></i>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='createAlbumFormContainer'>
						<h2 className='createAlbumFormTitle'>Create Album</h2>
						<form className='createAlbumForm' onSubmit={handleCreateSubmit}>
							<label>Album Cover Image URL</label>
							<input 
								type='text'
								required
								value={url}
								onChange={e => setUrl(e.target.value)} />
							<label>Title</label>
							<input 
								type='text'
								required
								value={title}
								onChange={e => setTitle(e.target.value)} />
							<button type='submit'>Create</button>
						</form>
					</div>
				</Modal>
			)}
		</>
	);
}

export default CreateAlbumForm;
