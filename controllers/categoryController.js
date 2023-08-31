const db = require('../models');
const Category = db.categories;

const categoryController = {

    list: async (req, res) => {
        try {
            const categories = await Category.findAll();
            if(!categories){
                return res.status(404).json({message: 'not found'});
            }
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    detail: async (req, res) => {
        try {
            const { id } = req.params
            const category = await Category.findByPk(id)
            if(!category){
                return res.status(404).json({message: 'id not found'});
            }
            return res.status(200).json({
                status: 200,
                data: category
            });
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    //ruta POST añadir
    create: async (req, res) => {
        try {
            let {nombre} = req.body
            
            await Category.create({
                nombre
            });

            return res.status(201).json({
                status: 201,
                notes: "The category was created successfully.",
                data: req.body
            });
        } catch (error) {
            return  res.status(500).json({message: error.message});

        }
    },

    update: async (req, res) => {

        try {

            const { id } = req.params
            const category = await Category.findByPk(id)
            if(!category){
                return res.status(404).json({message: 'id not found'});
            }
            const now = new Date();

            const updatedObj = {
                fecha_actualizacion: now,
                ...req.body
            } 
            await Post.update(updatedObj, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json({
                status: 200,
                notes: "The Category was updated successfully.",
                data: req.body
            });

        } catch (error) {
            return res.status(404).json({message: error.message});
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params
        const category = await Category.findByPk(id)
        if(!category){
            return res.status(404).json({message: 'id not found'});
        }
        try {
            await Category.destroy({
                where: {
                    id: req.params.id
                }
            });

            return res.status(200).json({
                status: 200,
                notes: "The Category was deleted successfully.",
                id_deleted: req.params.id
            })
        } catch (error) {
            return res.status(404).json({message: error.message});
        }
    }
}

module.exports = categoryController;