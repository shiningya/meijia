var express = require('express');
var axios = require('axios');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    var cate = 'szll';
    axios.all([getCate(cate), getZS(), getContact()])
        .then(axios.spread(function (cate, zs, contact) {
            var data = {};
            data.curnav = 'team';
            data.zs = zs.data.response.data;
            data.cate = cate.data.response.data;
            data.contact = contact.data.response.data;
            res.render('team', data);
        }));
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    axios.all([getDetail(id), getZS(), getContact()])
        .then(axios.spread(function (intro, zs, contact) {
            var data = {};
            data.curnav = 'team';
            data.zs = zs.data.response.data;
            data.intro = intro.data.response.data;
            data.contact = contact.data.response.data;
            res.render('intro', data);
        }));
});

function getCate(cate) {
    var url = 'http://localhost:8080/yzx/col_findByCol?col.urlcode=' + cate;
    return axios.get(url);
}

function getDetail(id) {
    var url = 'http://localhost:8080/yzx/col_single?news.id=' + id;
    return axios.get(url);
}

function getZS() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=zpzs');
}

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;