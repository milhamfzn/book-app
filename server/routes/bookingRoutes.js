const { Router } = require("express");
const { getBookings, getBooking, createBooking, deleteBooking, updateBooking } = require("../controllers/bookingController");

router = Router();

// get all bookings
router.get("/", getBookings);

// get a booking
router.get("/:id", getBooking);

// create a booking
router.post("/", createBooking);

// delete a booking
router.delete("/:id", deleteBooking);

// update a booking
router.put("/:id", updateBooking);

module.exports = router;