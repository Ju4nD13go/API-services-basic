
const mongoose = require('mongoose');

const ProteinSchema = new mongoose.Schema({
    
    id: {
        type: String,
        required: true
    },
    
    nombre: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    contenidoproteico: {
        type: Number,
        required: true
    },
    tamañoservicios: {
        type: Number,
        required: true
    },
    calorias: {
        type: Number,
        required: true
    },
   
}, 

{ collection: 'Proteins' }); // Nombre exacto de la colección
module.exports = mongoose.model('Proteins',ProteinSchema);