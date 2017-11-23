var express = require('express');
var axios = require('axios');
var router = express.Router();
var catelog = require('../../catelog.json');
var navs = require('../../navs.json');

/* GET users listing. */
router.get('/:cate', function(req, res, next) {
    var cate = req.params.cate;
    var curcate = catelog.aboutus[cate];
    axios.all([getCate(cate), getContact()])
        .then(axios.spread(function (cate, contact) {
            var data = {};
            data.navs = navs.aboutus;
            data.curcate = curcate;
            data.cate = cate.data.response.data;
            data.contact = contact.data.response.data;
            res.render('mobile/aboutus', data);
        }));
});

function getCate(cate) {
    var url = 'http://localhost:8080/yzx/col_findByCol?col.urlcode=' + cate;
    return axios.get(url);
}

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;