// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
// const knex = require('knex');

// const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : '',
//     password : '',
//     database : 'diceroller_server'
//   }
// });


// const app = express();
//  cors = require('cors')

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());
// app.use(cors())

// app.get('/', (req, res) => {
// 	res.send(database.users)
// });
 


// app.post('/signin', (req, res) => {
//   db.select('email', 'hash').from('login')
//   .where('email', '=', req.body.email)
//   .then(data =>{
//   	const isValid = bcrypt.compareSync(req.body.password, data[0].hash); 
//   	if (isValid){
//   		return db.select('*').from('users')
//   		.where('email', '=', req.body.email)
//   		.then(users => {
//   			res.json(users[0])
//   		}) 
//   		.catch(err => res.status(400).json('unable to to get user'))
//   	}else{
//   		res.status(400).json('wrong credentials')
//   	}
//   })
//   .catch(err => res.status(400).json('wrong credentials'))
// });

// app.post('/register', (req, res) => {
// 	const {email, name, password} = req.body;
// const hash = bcrypt.hashSync(password);
//     db.transaction(trx =>{
//     	trx.insert({
//     		hash:hash,
//     		email: email
//     	})
//     	.into('login')
//     	.returning('email')
//     	.then(loginEmail =>{
// 			return trx('users')
// 			  .returning('*')
// 			  .insert({
// 				email: loginEmail[0],
// 				name: name,
// 				joined: new Date()
// 			})
// 			 .then(user => {
// 			 	res.json(user[0])
// 			 })
// 		   })
//     	.then(trx.commit)
//     	.catch(trx.rollback)
// 		    })

// 	 .catch(err => res.status(400).json("Unable to register"))
// });


// app.get('/profile/:id',(req, res) =>{
//     const {id} = req.params;
//     db.select('*')
//     .from('users').where({id})
//     .then(user=> {
//     if (user.length){
//     	res.json(user[0])
//     } else {
//     	res.status(400).json("Not found")
//     }
//     })
//     .catch(err => res.status(400).json("Unable to get user"))
// });


// app.post('/image', (req, res) => {
// 	    const {id} = req.body;
//        let found = false;
//     database.users.forEach(user => {
//     	if (user.id === id) {
//     		found = true;
//     		user.entries++
//     		return res.json(user.entries);
//     	}
//     })
//     if (!found){
//     	res.status(400).json('image not found')
//     }
// 	})

// app.post('/rollData', (req, res) => {
// 	    const {id} = req.body;
//        let found = false;
//     database.users.forEach(user => {
//     	if (user.id === id) {
//     		found = true;
//     		return res.json(user.rollData);
//     	}
//     })
//     if (!found){
//     	res.status(400).json('image not found')
//     }
// 	})


// app.listen(3000,()=> {
// 	console.log("app is running on port 3000")
// });




// // root rount - workin
// // sighnin-- post res= success faile
// //register --> post = userOBj
// // profile: userID--> get = user
// // count--> put --> user
// // date everytime used--->