const { Event, Artist } = require('../models');

// Create an event
exports.createEvent = async (req, res) => {
    const { artistId, eventName, eventDate, eventUrl } = req.body;
    const eventImage = req.file ? req.file.path : null;

    try {
        const artist = await Artist.findByPk(artistId);
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        const event = await Event.create({
            artistId,
            eventName,
            eventDate,
            eventUrl,
            eventImage,
        });

        res.status(201).json({ message: 'Event created successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    const { eventId } = req.params;
    const { eventName, eventDate, eventUrl } = req.body;
    const eventImage = req.file ? req.file.path : null;

    try {
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.update({
            eventName,
            eventDate,
            eventUrl,
            eventImage: eventImage || event.eventImage, // Keep existing image if not updated
        });

        res.status(200).json({ message: 'Event updated successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    const { eventId } = req.params;

    try {
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.destroy();
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            include: Artist, // Include associated artist details
        });

        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
};

// Get event by ID
exports.getAllEventsById = async (req, res) => {
    const { eventId } = req.params;

    try {
        const event = await Event.findByPk(eventId, {
            include: Artist, // Include associated artist details
        });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error });
    }
};
