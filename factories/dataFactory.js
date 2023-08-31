const { faker } = require('@faker-js/faker')
const db = require('../models');
const Post = db.posts;
const Category = db.categories;
const Comment = db.comments;

const NUM_CATEGORIES = 5;
const NUM_POSTS = 20;
const NUM_COMMENTS = 50;

function createRandomCategory() {
    const nombre = faker.lorem.word();

    return {
        nombre
    }
}

function createRandomPost() {
    const titulo = faker.lorem.sentence();
    const contenido = faker.lorem.paragraph();
    const createdAt = faker.date.past();

    return {
        titulo,
        contenido,
        fecha_creacion: createdAt,
    }
}

function createRandomComment() {
    const contenido = faker.lorem.paragraph();
    const createdAt = faker.date.past();

    return {
        contenido,
        fecha_creacion: createdAt,
    }
}

async function generateRandomData(NUM_CATEGORIES, NUM_POSTS, NUM_COMMENTS) {

    const categories = [];
    for (let i = 0; i < NUM_CATEGORIES; i++) {
        categories.push(createRandomCategory())
    }
    try {
        // generate categories
        await Category.bulkCreate(categories);
    } catch (error) {
        console.log(error)
    }

    const posts = [];
    for (let i = 0; i < NUM_POSTS; i++) {
        let newPost = createRandomPost();
        newPost.category_id = faker.number.int({ min: 1, max: NUM_CATEGORIES });
        posts.push(newPost);

    }
    try {
        // create posts with random categories
        await Post.bulkCreate(posts);
    } catch (error) {
        console.log(error)
    }

    const comments = [];
    for (let i = 0; i < NUM_COMMENTS; i++) {
        let newComment = createRandomComment();
        newComment.post_id = faker.number.int({ min: 1, max: NUM_POSTS });
        comments.push(newComment);
    }
    try {
        // create comments with random posts
        await Comment.bulkCreate(comments);
        return 'success'
    } catch (error) {
        console.log(error)
    } finally {
        console.log('DATA FACTORY FINISHED')
    }

}

// Run dataFactory File to generate Data. 
generateRandomData(NUM_CATEGORIES, NUM_POSTS, NUM_COMMENTS)

