const express = require('express');
const articleRoute = express.Router();
const { getAllArticles, addArticle, deleteArticle } = require('../../models/article.js');
const sendJSONresp = (req, res) => res.json(res.article || []);

articleRoute.route('/')
   .get(getAllArticles, sendJSONresp)
   .post(addArticle, sendJSONresp);

articleRoute.route('/:id')
   .delete(deleteArticle, sendJSONresp);

module.exports = articleRoute;
