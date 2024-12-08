const express = require('express');
const {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist,
} = require('../controllers/artistController');

const router = express.Router();

router.post('/createArtist', createArtist);
router.get('/getartists', getAllArtists);
router.get('/:id', getArtistById);
router.put('/update/:id', updateArtist); // Update user by ID
router.delete('/:id', deleteArtist);

module.exports = router;
