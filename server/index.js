const express = require('express') //npm install express
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { response } = require('express')
const mysql = require('mysql') //npm install mysql

app.use(cors()); //allows request from front to back end -- npm install cors
app.use(express.json());
app.use(cookieParser())

const db = require('./models')

//Routers
const postRouter = require('./routes/Posts')
app.use('/posts', postRouter);

const commentsRouter = require('./routes/Comments')
app.use('/comments', commentsRouter);

const usersRouter = require('./routes/Users')
app.use('/auth', usersRouter);

db.sequelize.sync({ force: false }).then(() => { //force forces sequelize to rebuild the database every time the server is run 
    app.listen(3001, () => {
        console.log('Server listening on port 3001');
    });
})

app.get('/', (req, res) => {
    res.send('Server listening on port 3001 on root path /')
});
