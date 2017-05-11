const db = require('../lib/dbConfig.js');


const addUser = (req, res, next) => {
 db.none(`INSERT INTO users (username, password)
  VALUES($1, $2); `, [req.body.username, req.body.password])
 .then((user) => {
  res.user = user;
  next();
 })
 .catch(err => next(err));
};


const deleteUser = (req, res, next) => {
  db.none(`DELECT FROM users WHERE id = $1;`,[req.params.id])
  .then(next())
  .catch(err => next(err));
};


module.exports = {
  addUser,
  deleteUser
}
