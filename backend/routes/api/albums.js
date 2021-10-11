const express = require('express');
const asyncHandler = require('express-async-handler');
const { Album, User } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll({
    include: [User]
  });
  return res.json(albums)
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const albums = await Album.findAll({
    where: { userId },
    include: [User]
  });
  return res.json(albums)
}));

module.exports = router;