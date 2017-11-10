var express = require('express');
var axios = require('axios');
var router = express.Router();

/* 企业列表 */
router.get('/', function(req, res, next) {
    var ids = ['0','0'];
    var args = '';
    axios.all([getProvinces(), getCompanies(args)]).then(axios.spread(function(provinces, companies) {
        var data = {};
        data.curnav = 'companies';
        data.list = true;
        data.ids = ids;
        data.keyword = '';
        data.querystr = '';
        data.provinces = provinces.data.response.data;
        data.pageinfo = companies.data.response.query;
        data.companies = companies.data.response.data;
        res.render('companies', data);
    }));
});

router.get('/list/:page', function (req, res, next) {
    var page = req.params.page;
    var ids = ['0','0'];
    var args = '?companyCondition.pageNo=' + page;
    axios.all([getProvinces(), getPage(args)]).then(axios.spread(function(provinces, companies) {
        var data = {};
        data.curnav = 'companies';
        data.list = true;
        data.ids = ids;
        data.keyword = '';
        data.querystr = '';
        data.provinces = provinces.data.response.data;
        data.pageinfo = companies.data.response.query;
        data.companies = companies.data.response.data;
        res.render('companies', data);
    }));
});  

/* 筛选企业列表 */
router.get('/search/:str', function(req, res, next) {
    var ids = req.params.str.split('-');
    var keyword = req.query.word;
    var args = '?companyCondition.pageNo=' + ids[2];
    if (ids[0] !== '0') {
        args += '&companyCondition.province=' + ids[0];
    }
    if (ids[1]!=='0') {
        args += '&companyCondition.category_id=' + ids[1];
    }
    if (keyword) {
        var codeword = encodeURI(keyword);
        var querystr = '?word=' + keyword;
        args += '&companyCondition.name=' + codeword;
    };
    axios.all([getProvinces(), getPage(args)]).then(axios.spread(function(provinces, companies) {
        var data = {};
        data.curnav = 'companies';
        data.keyword = keyword || '';
        data.querystr = querystr || '';
        data.ids = ids;
        data.provinces = provinces.data.response.data;
        data.provinces.letter = ids[0]==='0' ? null : getCurLetter(data.provinces, data.ids[0]);
        data.pageinfo = companies.data.response.query;
        data.companies = companies.data.response.data;
        res.render('companies', data);
    }));
});

/* 企业首页 */
router.get('/:id/', function(req, res, next) {
    var id = req.params.id;
    axios.all([getCompany(id), getComProds(id), getComNews(id)]).then(axios.spread(function(company, comProds, comNews) {
        var data = {};
        data.curnav = 'company';
        data.id = id;
        data.company = company.data.response.data;
        data.products = comProds.data.response.data;
        data.comNews = comNews.data.response.data;
        res.render('company', data);
    }));
});
/* 企业介绍 */
router.get('/:id/intro', function(req, res, next) {
    var id = req.params.id;
    axios.all([getCompany(id)]).then(axios.spread(function(company) {
        var data = {};
        data.curnav = 'intro';
        data.id = id;
        data.company = company.data.response.data;
        res.render('intro', data);
    }));
});
/* 供应产品 */
router.get('/:id/products', function(req, res, next) {
    var id = req.params.id;
    axios.all([getCompany(id), getComProds(id)]).then(axios.spread(function(company, comProds) {
        var data = {};
        data.curnav = 'products';
        data.id = id;
        data.company = company.data.response.data;
        data.products = comProds.data.response.data;
        res.render('products', data);
    }));
});
/* 企业动态 */
router.get('/:id/trend', function(req, res, next) {
    var id = req.params.id;
    axios.all([getCompany(id), getComNews(id)]).then(axios.spread(function(company, comNews) {
        var data = {};
        data.curnav = 'trend';
        data.id = id;
        data.company = company.data.response.data;
        data.comNews = comNews.data.response.data;
        res.render('trend', data);
    }));
});

/* 获取企业库数据 */
function getCompanies(args) {
    var url = 'http://localhost:8080/ev/company_search' + args;
    return axios.get(url);
}   

function getProvinces() {
    var url = 'http://localhost:8080/ev/province_listByInitial';
    return axios.get(url);
}

function getPage(args) {
    var url = 'http://localhost:8080/ev/company_skipPage' + args;
    return axios.get(url);
}

/* 获取企业首页数据 */
function getCompany(id) {
    var url = 'http://localhost:8080/ev/company_single?comp=' + id;
    return axios.get(url);
}
  
function getComProds(id) {
    var url = 'http://localhost:8080/ev/product_findByCompany?company=' + id;
    return axios.get(url);
}

function getComNews(id) {
    var url = 'http://localhost:8080/ev/article_findByCompany?company=' + id;
    return axios.get(url);
}

function getCurLetter(data, id) {
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].array.length; j++) {
            if (data[i].array[j].id === +id) {
                return data[i].initial;
            }
        }
    }
}

module.exports = router;