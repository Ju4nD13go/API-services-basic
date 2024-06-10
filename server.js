const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos Fitness
const mongoURI = 'mongodb+srv://mezadiego072003:mezadiego@cluster0.qvymsra.mongodb.net/Fitness?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Ruta básica
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Proteinas');
});

// Incluir las rutas de proteinas
const proteinasRoutes = require('./routes/proteinas');
app.use('/api/proteinas', proteinasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
