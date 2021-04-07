
const express = require('express');
var router = express.Router();
const { getUsers } = require("./utilities")

// Landing Page
router.get('/', async (req, res) => {

	/*try {
		let users = await getUsers();
	  return res.send(users)
	} catch(e){
		console.log(e)
		return res.sendStatus(500)
	}*/

	return res.render("landing/landing")

});

module.exports = router;
