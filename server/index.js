const express = require('express') //npm install express
const app = express()
const mysql = require('mysql') //npm install mysql
const cors = require('cors')
const { response } = require('express')

app.use(cors()); //allows request from front to back end -- npm install cors
app.use(express.json());

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

// app.post('/create', (req, res) => { //routing 
//     const name = req.body.name;
//     const age = req.body.age;
//     const country = req.body.country;
//     const position = req.body.position;
//     const wage = req.body.wage;

//     db.query('INSERT INTO employees (employee_name, employee_age, employee_country, employee_position, employee_wage) VALUES (?, ?, ?, ?, ?)',
//     [name, age, country, position, wage],
//     (err, result) => {
//         if(err) {
//             console.log(err);
//         } else {
//             res.send("Employee inserted from back-end");
//         };
//     });
// });

// app.get('/employees', (req, res) => {
//     db.query('SELECT * FROM employee.employees', (err, result) => {
//         if(err) {
//             console.log(err);
//         } else {
//             res.json(result);
//         }
//     });
// })

