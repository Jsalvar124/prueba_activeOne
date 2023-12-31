const express = require('express');
const cors = require('cors');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//routes middleware
const postRouter = require('./routes/postRouter');
app.use('/api/posts', postRouter)

const categoryRouter = require('./routes/categoryRouter');
app.use('/api/categories', categoryRouter)

const commentRouter = require('./routes/commentRouter');
app.use('/api/comments', commentRouter)

// // test api connection
// app.get('/',(req, res)=>{
//     res.json({message: 'Api working'})
// })

// catch 404 
app.use(function(req, res, next) {
    return res.status(404).json({message: 'Page Not found'});
  });

//Port for localhost
const PORT = process.env.PORT || 3000;

//server
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT} http://localhost:${PORT}`)
})

