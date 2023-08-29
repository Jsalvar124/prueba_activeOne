const db = require('../models');
const Post = db.posts;
const Op = db.Sequelize.Op; //sequalize con mayuscula

const PostController = {

    list: async (req, res) => {
        try {
            const posts = await Post.findAll();
            res.status(200).json(posts)
        } catch (error) {
            res.send(error);
        }
    },
    detail: async (req, res) => {
        try {
            const post = await db.Post.findByPk(req.params.id, { include: { all: true } });
            res.status(200).json({
                status: 200,
                data: quote
            });
        } catch (error) {
            res.status.json({message: 'not found'});
        }
    },
    //ruta POST añadir nueva frase
    create: async (req, res) => {
        try {
            await db.Post.create(req.body);

            res.status(201).json({
                status: 201,
                notes: "The post was created successfully.",
                data: result.data
            });
        } catch (error) {
            console.log(error)

        }
    },

    update: async (req, res) => {

        try {
            await db.Post.update(result.data, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                status: 200,
                notes: "The post was updated successfully.",
                data: result.data
            });

        } catch (error) {
            res.send(error)
        }
    },

    destroy: async (req, res) => {
        try {
            await db.Post.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({
                status: 200,
                notes: "The quote was deleted successfully.",
                id_deleted: req.params.id
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = PostController;