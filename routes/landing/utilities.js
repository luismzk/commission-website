
const pool = require("../../db/pg");

const getUsers = async () => {

	try {

	  let result = await pool.query('SELECT * FROM users ORDER BY id ASC')

	  return result.rows

	} catch (e) {
		console.log(e)
		throw "Error fetching users. Please try again"
	}
} 

module.exports = {
	getUsers
}