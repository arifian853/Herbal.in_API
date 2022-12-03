const express = require('express');
const router = express.Router();
const { getProduct, getProductById } = require('../controller/herbData.controller');
const { getArticle, getArticleById } = require('../controller/articleData.controller');

router.get('/home', (req, res) => {
    res.json({
        hello : 'change to /products or /articles'
    });
});
//Products
router.get('/products', getProduct);
router.get('/products/:id', getProductById);

//Articles
router.get('/articles', getArticle);
router.get('/articles/:id', getArticleById);

module.exports = router