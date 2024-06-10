
const express = require('express');
const router = express.Router();
const Proteina = require('../models/Proteinas');

//Para obtener todas las proteinas
router.get('/', async(req, res) => {
    try{
        const proteinas = await Proteina.find();
        res.json(proteinas);
    }catch (err){
        res.status(500).json({message: err.message});
    }


});


//Para adquirir una proteina por ID
router.get('/:id', async (req, res) => {

    try{
        const proteina = await Proteina.findById(req.params.id);
        if (!proteina) return res.status(404).json({ message: 'Protein not found' });
        res.json(proteina);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }

});

// Para crear una nueva proteína
router.post('/', async(req, res) => {
    const proteina = new Proteina({

        nombre: req.body.nombre,
        marca: req.body.marca,
        contenidoproteico: req.body.contenidoproteico,
        tamañoservicios: req.body.tamañoservicios,
        calorias: req.body.calorias
    });

    try{
        const newProteina = await proteina.save();

    }catch (err){
        res.status(400).json({message: err.message});
    }

});

// Para actualizar una proteína
router.put('/:id', async(req, res)=>{ 
    try{
        const updatedProteina = await Proteina.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if(!updatedProteina) return res.status(404).json({message: 'Proteina no encontrada'});
        res.json(updatedProteina);
    
    }catch (err){
        res.status(400).json({message: err.message});


    }


});

//Para eliminar una proteina
router.delete('/:id', async (req, res)=>{

    try{
        const deletedProteina = await Proteina.findByIdAndDelete(req.params.id);
        if(!deletedProteina) return res.status(404).json({message: 'Proteina no encontrada'});
        res.json({message: 'Proteina eliminada'});


    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;