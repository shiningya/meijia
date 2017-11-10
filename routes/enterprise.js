var express = require('express');
var axios = require('axios');
var router = express.Router();


router.get('/:id/', function(req, res, next) {
    var id = req.params.id;
    axios.all([getCompany(id), getComProds(id), getComProdsR(id), getComProdsS(id)]).then(axios.spread(function (company, comProds, comProdsR, comProdsS) {
        var data = {};
        data.curnav = 'company';
        data.id = id;
        data.company = company.data.response.data;
        data.products = comProds.data.response.data;
        data.productsR = comProdsR.data.response.data;
        data.productsS = comProdsS.data.response.data;
        res.render('enterprise', data);
    }));
});


function getCompany(id) {
    var url = 'http://localhost:8080/ev/company_singleById?company.id=' + id;
    return axios.get(url);
}

function getComProds(id) {
    var url = 'http://localhost:8080/ev/product_findByCompanyPrompt?company=' + id;
    return axios.get(url);
}

function getComProdsR(id) {
    var url = 'http://localhost:8080/ev/product_findByCompanyPromptR?company=' + id;
    return axios.get(url);
}

function getComProdsS(id) {
    var url = 'http://localhost:8080/ev/product_singlePrompt?company=' + id;
    return axios.get(url);
}

module.exports = router;