var express = require('express');
var router = express.Router();

let commentController = require('../controllers/commentController')

/* GET all posts. */
router.get('/', commentController.list);

/* GET post by id. */
router.get('/:id', commentController.detail);

/* POST create new post. */
router.post('/', commentController.create);

/* PATCH update post. */
router.patch('/:id', commentController.update);

/* DELETE delete post. */
router.delete('/:id', commentController.destroy);

module.exports = router;
