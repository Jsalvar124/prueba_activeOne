var express = require('express');
var router = express.Router();

let categoryController = require('../controllers/categoryController')

/* GET all posts. */
router.get('/', categoryController.list);

/* GET post by id. */
router.get('/:id', categoryController.detail);

/* POST create new post. */
router.post('/', categoryController.create);

/* PATCH update post. */
router.patch('/:id', categoryController.update);

/* DELETE delete post. */
router.delete('/:id', categoryController.destroy);

module.exports = router;