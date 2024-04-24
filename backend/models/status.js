const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    semester: {
        type: String,
        required: true,
        trim: true,
    },
    roomNumber: {
        type: String,
        required: true,
        trim: true,
    },
    personalContact: {
        type: String,
        required: true,
        trim: true,
    },
    parentsContact: {
        type: String,
        required: true,
        trim: true,
    },
    purpose: {
        type: String,
        required: true,
        trim: true,
    },
    place: {
        type: String,
        required: true,
        trim: true,
    },
    inDateTime: {
        type: Date,
        required: true,
    },
    outDateTime: {
        type: Date,
        required: true,
    },
    status:{
        type:String,
        required:false,
    }
});

module.exports = mongoose.model("status", statusSchema);