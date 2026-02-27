const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: {
        type: [{
            number: Number,
            unavailableDates: [Date]
        }]
    }
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;