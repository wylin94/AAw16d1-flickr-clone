const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image, Album, User } = require('../../db/models')

const router = express.Router();

//Get all image
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const albumId = parseInt(req.params.id, 10);
  const images = await Image.findAll({
    where: { albumId },
    include: [{model: User}, { model: Album}],
    order: [["createdAt", "DESC"]],
  });
  const result = res.json(images)
  return res.json(images)
}));

//Create new image
router.post('/', asyncHandler(async (req, res) => {
  const { url, description, userId, albumId} = req.body;
  const newImage = await Image.create({
    userId,
    albumId,
    imageUrl: url,
    description
  })
  const newImageWithUserAlbum = await Image.findByPk(newImage.id, {
    include: [{model: User}, {model: Album}]
  })
  return res.json(newImageWithUserAlbum)
}));

//Delete image
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const imageId = parseInt(req.params.id, 10);
  const imageToDelete = await Image.findByPk(imageId);
  const removed = await imageToDelete.destroy();
  return res.json(removed)
}));

module.exports = router;