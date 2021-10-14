const express = require('express');
const asyncHandler = require('express-async-handler');
const { Album, User } = require('../../db/models')

const router = express.Router();

//Get all album
router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll({
    include: [User],
    order: [["createdAt", "DESC"]],
  });
  return res.json(albums)
}));

//Get user album
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const albums = await Album.findAll({
    where: { userId },
    include: [ User ],
    order: [["createdAt", "DESC"]],
  });
  return res.json(albums)
}));

//Create new album
router.post('/', asyncHandler(async (req, res) => {
  const { url, title, userId} = req.body;
  const newAlbum = await Album.create({
    userId,
    coverImageUrl: url,
    title
  })
  const newAlbumWithUser = await Album.findByPk(newAlbum.id, {
    include: [User]
  })
  return res.json(newAlbumWithUser)
}));

//Edit album
router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { url, title } = req.body;
  const albumId = parseInt(req.params.id, 10);
  const albumToEdit = await Album.findByPk(albumId);
  albumToEdit.coverImageUrl = url;
  albumToEdit.title = title;
  await albumToEdit.save();
  return res.json(albumToEdit)
}));

//Delete album
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const albumId = parseInt(req.params.id, 10);
  const albumToDelete = await Album.findByPk(albumId);
  const removed = await albumToDelete.destroy();
  return res.json(removed)
}));

module.exports = router;