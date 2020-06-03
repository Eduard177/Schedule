const mongoose = require('mongoose');
const { Schema } = mongoose;

const AgendaSchema = new Schema({
    title: { type: String, maxlength: 30, required: false },
    descripcion: { type: String },
    day: { type: Number, required: true },
}, { timestamps: { createdAt: true, updatedAt: true } });

module.exports = mongoose.model('Agenda', AgendaSchema);