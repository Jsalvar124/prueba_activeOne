const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

//Constructor
const sequelize = new Sequelize(
    dbConfig.DB_NAME,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        port: dbConfig.DB_PORT,
        operatorAliases: false,
    }
)

//authentication
async function authenticate(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

authenticate();

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.posts = require('./Post.js')(sequelize, DataTypes)
db.comments = require('./Comment.js')(sequelize, DataTypes)
db.categories = require('./Category.js')(sequelize, DataTypes)


db.sequelize.sync({force: true}) // True to run forced migration.
.then(()=>{
    console.log("DB Sincronization Updated")
})

//relations post-comment
db.posts.hasMany(db.comments, {
    foreignKey: 'post_id',
    as: 'comments'
})

db.comments.belongsTo(db.posts, {
    foreignKey: 'post_id',
    as: 'post'
})
// relations post-category

db.categories.hasMany(db.posts, {
    foreignKey: 'category_id',
    as: 'posts'
})

db.posts.belongsTo(db.categories, {
    foreignKey: 'category_id',
    as: 'category'
})

module.exports = db;