const db = require('../models');
const Post = db.posts;
const Op = db.Sequelize.Op; //sequalize con mayuscula

const postController = {

    list: async (req, res) => {
        try {
            const posts = await Post.findAll();
            if(!posts){
                return res.status(404).json({message: 'not found'});
            }
            return res.status(200).json(posts)
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    detail: async (req, res) => {
        try {
            const { id } = req.params
            const post = await Post.findByPk(id, { include: { all: true } })
            // const post = await Post.findByPk(id)
            if(!post){
                return res.status(404).json({message: 'id not found'});
            }
            return res.status(200).json({
                status: 200,
                data: post
            });
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
    //ruta POST añadir nueva frase
    create: async (req, res) => {
        try {
            let {titulo, contenido, category_id} = req.body
            
            await Post.create({
                titulo,
                contenido,
                category_id
            });

            return res.status(201).json({
                status: 201,
                notes: "The post was created successfully.",
                data: req.body
            });
        } catch (error) {
            return  res.status(500).json({message: error.message});

        }
    },

    update: async (req, res) => {

        try {

            const { id } = req.params
            const post = await Post.findByPk(id, { include: { all: true } })
            // const post = await Post.findByPk(id)
            if(!post){
                return res.status(404).json({message: 'id not found'});
            }
            await Post.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json({
                status: 200,
                notes: "The post was updated successfully.",
                data: req.body
            });

        } catch (error) {
            return res.status(404).json({message: error.message});
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params
        const post = await Post.findByPk(id, { include: { all: true } })
        // const post = await Post.findByPk(id)
        if(!post){
            return res.status(404).json({message: 'id not found'});
        }
        try {
            await Post.destroy({
                where: {
                    id: req.params.id
                }
            });

            return res.status(200).json({
                status: 200,
                notes: "The post was deleted successfully.",
                id_deleted: req.params.id
            })
        } catch (error) {
            return res.status(404).json({message: error.message});
        }
    }
}

module.exports = postController;