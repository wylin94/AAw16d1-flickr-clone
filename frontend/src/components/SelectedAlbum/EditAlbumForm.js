import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from '../../context/Modal';
import { getMyAlbum, editAlbum } from '../../store/album';
import "./EditAlbumForm.css"

function EditAlbumForm() {
	const dispatch = useDispatch();
	const {albumId} = useParams();
	// const userId = useSelector((state) => state.session.user.id)
	const albums = useSelector((state) => state.album);
	
	const [showModal, setShowModal] = useState(false);
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');

	const handleEditSubmit = async (e) => {
		e.preventDefault();
		const toEdit = await dispatch(editAlbum({url, title, albumId}));
		if (toEdit) {
			setShowModal(false);
		}
	}

	// useEffect(() => {
	//   dispatch(getMyAlbum(userId));
	// }, [dispatch, userId])
	
	useEffect(() => {
		if (albums.length !== 0) {
			const selectedAlbum = albums.find(elem => elem.id === +albumId);
			setUrl(selectedAlbum.coverImageUrl);
			setTitle(selectedAlbum.title);
		} 
	}, [albums, albumId])

	return (
		<>
			<button title="Edit Album" className='editAlbumButton' onClick={() => setShowModal(true)}>
				<i className="fas fa-edit"></i>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='editAlbumFormContainer'>
						<h2 className='editAlbumFormTitle'>Edit Album</h2>
						<form className='editAlbumForm' onSubmit={handleEditSubmit}>
							<label>Album Cover Image URL</label>
								<input 
								type='text'
								required
								value={url}
								onChange={e => setUrl(e.target.value)} />
							<label>Album Title</label>
								<input 
								type='text'
								required
								value={title}
								onChange={e => setTitle(e.target.value)} />
							<button type='submit'>Edit</button>
						</form>
					</div>
				</Modal>
			)}
		</>
	);
}

export default EditAlbumForm;
