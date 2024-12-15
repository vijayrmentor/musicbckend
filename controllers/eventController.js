const { Event } = require('../models');

// Create an event
exports.createEvent = async (req, res) => {
    const { username, eventName, eventDate, eventUrl } = req.body;
    const imagePath = req.file ? req.file.path : null;

    try {
        const event = await Event.create({
            username,
            eventName,
            eventDate,
            eventUrl,
            imagePath,
        });

        res.status(201).json({ message: 'Event created successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    const { eventId } = req.params;
    const { username, eventName, eventDate, eventUrl } = req.body;
    const imagePath = req.file ? req.file.path : null;

    try {
        const event = await Event.findByPk(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        await event.update({
            username,
            eventName,
            eventDate,
            eventUrl,
            imagePath: imagePath || event.imagePath,
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
        if (!event) return res.status(404).json({ message: 'Event not found' });

        await event.destroy();
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
};

// Get an event by ID
exports.getEventById = async (req, res) => {
    const { eventId } = req.params;

    try {
        const event = await Event.findByPk(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error });
    }
};

// Fetch an event by all
exports.fetchEvents = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/fetchall/all', {
            params: {
                searchQuery,
                startDate: startDate ? startDate.toISOString().split('T')[0] : null,
                endDate: endDate ? endDate.toISOString().split('T')[0] : null,
            },
        });
        setEvents(response.data);
        setFilteredEvents(response.data);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
};