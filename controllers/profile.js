 
//get






 const profileHandle = (req, res, db, bcrypt)=> {
	const { id } = req.params;
	let found = false;
	// db.select('*').from('roll').where({roll_id})
	
    db.select('rolldate', 'rolldata', 'roll_id').from('users').leftOuterJoin('roll', 'users.id', 'roll.post_id')
    .where('users.id', '=', req.params.id)
    .then(user => {
		res.json(user)
    
	})
	.catch(err => res.status(400).json('error getting user'))
}



//post

const profileHandleUpdate = (req, res, db, ) => {
const { id } = req.params;
const{ rolldata } = req.body;
console.log(rolldata,)
db('roll').insert({
	post_id:  req.params.id,
    rolldata: rolldata,
    rolldate: new Date()
})
.where('users.id', '=', req.params.id)
.then(user => {
		res.json(user)
    
	})
.then(db.commit)
.catch(err => res.status(400).json('error saving'))
}


 module.exports = {
   profileHandle,  profileHandleUpdate
};

