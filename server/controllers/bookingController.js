const Booking = require("../models/bookingModel");

// get all bookings
const getBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        if (!bookings) {
            res.status(400);
            throw new Error("Bookings not found");
        }
        return res.status(200).json(bookings);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// get a booking
const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            res.status(400);
            throw new Error("Booking not found");
        }
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// create a booking
const createBooking = async (req, res, next) => {
    try {
        const booking = await Booking.create(req.body);
        if (!booking) {
            res.status(400);
            throw new Error("Failed to create booking");
        }
        return res.status(201).json(booking);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// delete a booking
const deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            res.status(400);
            throw new Error("Failed to delete booking");
        }
        return res.status(200).json({ id: req.params.id, message: "Booking deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// update a booking
const updateBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) {
            res.status(400);
            throw new Error("Failed to update booking");
        }
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getBookings,
    getBooking,
    createBooking,
    deleteBooking,
    updateBooking,
}