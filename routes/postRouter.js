var express = require('express');
var router = express.Router();

let postController = require('../controllers/postController')

/* GET all posts. */
router.get('/', postController.list);

/* GET post by id. */
router.get('/:id', postController.detail);

/* POST create new post. */
router.post('/', postController.create);

/* PATCH update post. */
router.patch('/:id', postController.update);

/* DELETE delete post. */
router.delete('/:id', postController.destroy);

module.exports = router;
