const { Int32, ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const MusicEvents = new Schema({
    _id: ObjectId,
    image: String,
    name: String, 
    date: Date,
    duration: String,
    exclusiveEntryFee: Int32,
    generalEntryFee: Int32,
    minimumAge: Int32,
    time: String
})

const model = mongoose.model ('Events', MusicEvents)

module.exports = model