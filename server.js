const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile'); 
const signinpf = require('./controllers/signinpf'); 
const auth = require('./controllers/authorization'); 

console.log(process.env.POSTGRES_USER)
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get('/', (req, res) => {res.send('working!')} )
app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)} )
app.get('/signinpf/:id',(req, res) => { signinpf.signinProfileHandle(req, res, db, bcrypt)} )
app.get('/profile/:id' , (req, res)=> { profile.profileHandle(req, res, db, bcrypt)} )
app.post('/profile/:id' ,(req, res)=> { profile.profileHandleUpdate(req, res, db)} )

app.listen( process.env.PORT || 3000 ,() => {
	console.log(`app is running on ${process.env.PORT}`);
})


