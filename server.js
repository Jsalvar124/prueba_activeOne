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

// test api connection
app.get('/',(req, res)=>{
    res.json({message: 'Api working'})
})

//Port for localhost
const PORT = process.env.PORT || 3000;

//server
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT} http://localhost:${PORT}`)
})

