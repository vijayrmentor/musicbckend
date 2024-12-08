const { Artist } = require('../models');

// Create a new artist
exports.createArtist = async (req, res) => {
    try {
        const artist = await Artist.create(req.body);
        res.status(201).json({ message: 'Artist created successfully', artist });
    } catch (error) {
        res.status(500).json({ message: 'Error creating artist', error });
    }
};

// Get all artists
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching artists', error });
    }
};

// Get artist by ID
exports.getArtistById = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findByPk(id);

        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching artist', error });
    }
};

// Update an artist
exports.updateArtist = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findByPk(id);

        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        await artist.update(req.body);
        res.status(200).json({ message: 'Artist updated successfully', artist });
    } catch (error) {
        res.status(500).json({ message: 'Error updating artist', error });
    }
};

// Delete an artist
exports.deleteArtist = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findByPk(id);

        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        await artist.destroy();
        res.status(200).json({ message: 'Artist deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting artist', error });
    }
};
