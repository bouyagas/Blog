const db = require('../lib/dbConfig.js');


const getAllArticles = (req, res, next) => {
  db.any(`SELECT * FROM article`)
    .then((article) => {
      res.article = article;
      next();
    })
    .catch(err => next(err));

};

const addArticle = (req, res, next) => {
 db.none(`INSERT INTO article (title, content, user_id)
          VALUES ($1, $2, $3);`, [req.body.title, req.body.content, req.body.user_id])
    .then(next())
    .catch(err => next(err));
};


const deleteArticle = (req, res, next) => {
 db.none(`DELETE FROM article WHERE id = $1;`, [req.params.id])
    .then(next())
    .catch(err => next(err));
};


module.exports = {
  getAllArticles,
  addArticle,
  deleteArticle
};
