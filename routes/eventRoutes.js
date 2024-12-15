// const express = require('express');
// const { createEvent, getAllEvents } = require('../controllers/eventController');
// const upload = require('../middlewares/multer');

// const router = express.Router();

// router.post('/create', upload.single('eventImage'), createEvent);
// router.get('/all', getAllEvents);

// module.exports = router;


const express = require('express');
const upload = require('../middlewares/multer');
const {
    createEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
    getEventById,
    fetchEvents
} = require('../controllers/eventController');

const router = express.Router();

router.post('/create', upload.single('imagePath'), createEvent);
router.get('/all', getAllEvents);
router.get('/fetchall', fetchEvents);

router.get('/:eventId', getEventById);
router.put('/update/:eventId', upload.single('imagePath'), updateEvent);
router.delete('/delete/:eventId', deleteEvent);

module.exports = router;
