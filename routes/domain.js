var express = require('express');
var axios = require('axios');
var router = express.Router();


/* 企业首页 */
router.get('/:domain/', function(req, res, next) {
    var domain = req.params.domain;
    axios.all([getCompany(domain), getComProds(domain), getComNews(domain)]).then(axios.spread(function(company, comProds, comNews) {
        var data = {};
        data.curnav = 'company';
        data.domain = true;
        data.company = company.data.response.data.Company;
        data.products = comProds.data.response.data.Products;
        data.comNews = comNews.data.response.data.Articles;
        res.render('company', data);
    }));
});
/* 企业介绍 */
router.get('/:domain/intro', function(req, res, next) {
    var domain = req.params.domain;
    axios.all([getCompany(domain)]).then(axios.spread(function(company) {
        var data = {};
        data.curnav = 'intro';
        data.domain = true;
        data.company = company.data.response.data.Company;
        res.render('intro', data);
    }));
});
/* 供应产品 */
router.get('/:domain/products', function(req, res, next) {
    var domain = req.params.domain;
    axios.all([getCompany(domain), getComProds(domain)]).then(axios.spread(function(company, comProds) {
        var data = {};
        data.curnav = 'products';
        data.domain = true;
        data.company = company.data.response.data.Company;
        data.products = comProds.data.response.data.Products;
        res.render('products', data);
    }));
});
/* 企业动态 */
router.get('/:domain/trend', function(req, res, next) {
    var domain = req.params.domain;
    axios.all([getCompany(domain), getComNews(domain)]).then(axios.spread(function(company, comNews) {
        var data = {};
        data.curnav = 'trend';
        data.domain = true;
        data.company = company.data.response.data.Company;
        data.comNews = comNews.data.response.data.Articles;
        res.render('trend', data);
    }));
});

/* 获取企业首页数据 */
function getCompany(domain) {
    var url = 'http://localhost:8080/ev/company_single?comp=' + domain;
    return axios.get(url);
}
  
function getComProds(domain) {
    var url = 'http://localhost:8080/ev/product_findByCompany?company=' + domain;
    return axios.get(url);
}

function getComNews(domain) {
    var url = 'http://localhost:8080/ev/article_findByCompany?company=' + domain;
    return axios.get(url);
}

module.exports = router;
