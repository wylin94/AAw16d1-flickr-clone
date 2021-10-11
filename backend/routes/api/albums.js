const express = require('express');
const asyncHandler = require('express-async-handler');
const { Album, User } = require('../../db/models')

const router = express.Router();

//Get all album on homepage
router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll({
    include: [User]
  });
  return res.json(albums)
}));

//Get user album
router.get('/:id', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const albums = await Album.findAll({
    where: { userId },
    include: [User]
  });
  return res.json(albums)
}));

//Create new album
router.post('/myAlbum', asyncHandler(async (req, res) => {
  const { url, title, userId} = req.body;
  const post = await Album.create({
    coverImageUrl: url,
    title,
    userId
  })
  // return res.json({post})
}));



module.exports = router;