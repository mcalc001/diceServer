

const signinProfileHandle = (req, res, db, bcrypt)=> {
	const { id } = req.params;
	let found = false;
	db.select('*').from('users').where({id})
	.then(user => {
    if (user) {
		res.json(user[0])
    } else {
    	res.status(400).json('not found')
    }
	})
	.catch(err => res.status(400).json('error getting user'))
}


 module.exports = {
   signinProfileHandle: signinProfileHandle
}