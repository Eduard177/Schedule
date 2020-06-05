const mongoose = require('mongoose');
const { Schema } = mongoose;

const AgendaSchema = new Schema({
    title: { type: String, maxlength: 30, required: [true, 'El titulo es necesario'] },
    descripcion: { type: String },
    day: { type: String, required: [true, 'el dia es necesario'] },
}, { timestamps: { createdAt: true, updatedAt: true } });

module.exports = mongoose.model('Agenda', AgendaSchema);