const db = require('../models');
const Comment = db.comments;

const commentController = {

    list: async (req, res) => {
        try {
            const comments = await Comment.findAll();
            if(!comments){
                return res.status(404).json({message: 'not found'});
            }
            return res.status(200).json(comments)
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    detail: async (req, res) => {
        try {
            const { id } = req.params
            const comment = await Comment.findByPk(id)
            if(!comment){
                return res.status(404).json({message: 'id not found'});
            }
            return res.status(200).json({
                status: 200,
                data: comment
            });
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    //ruta POST añadir
    create: async (req, res) => {
        try {
            let {contenido, post_id} = req.body
            
            await Comment.create({
                contenido,
                post_id
            });

            return res.status(201).json({
                status: 201,
                notes: "The comment was created successfully.",
                data: req.body
            });
        } catch (error) {
            return  res.status(500).json({message: error.message});

        }
    },

    update: async (req, res) => {

        try {
            const { id } = req.params
            const comment = await Comment.findByPk(id)
            if(!comment){
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
                notes: "The Comment was updated successfully.",
                data: req.body
            });

        } catch (error) {
            return res.status(404).json({message: error.message});
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params
        const comment = await Comment.findByPk(id)
        if(!comment){
            return res.status(404).json({message: 'id not found'});
        }
        try {
            await Comment.destroy({
                where: {
                    id: req.params.id
                }
            });

            return res.status(200).json({
                status: 200,
                notes: "The Comment was deleted successfully.",
                id_deleted: req.params.id
            })
        } catch (error) {
            return res.status(404).json({message: error.message});
        }
    }
}

module.exports = commentController;