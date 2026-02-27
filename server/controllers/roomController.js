const Room = require("../models/roomModel");

const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();

        if (!rooms) {
            res.status(400);
            throw new Error("Rooms not found");
        }
        return res.status(200).json(rooms);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//create room
const createRoom = async (req, res, next) => {
    try {

        const room = await Room.create(req.body);

        if (!room) {
            res.status(400);
            throw new Error("Failed to create room");
        }
        return res.status(201).json(room);
    } catch (error) {

    }

}

// get single room
const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            res.status(400);
            throw new Error("Room not found");
        }
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// update room
const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,
            {$set: req.body}, 
            { new: true }
        );

        if (!updatedRoom) {
            res.status(400);
            throw new Error("Room not found");
        }
        return res.status(200).json(updatedRoom);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// delete room
const deleteRoom = async (req, res, next) => {
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        if (!deletedRoom) {
            res.status(400);
            throw new Error("Room not found");
        }
        return res.status(200).json({ id: req.params.id, message: "Room deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom,
}