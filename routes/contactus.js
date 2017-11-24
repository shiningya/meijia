var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/:cate', function (req, res, next) {
    var cate = req.params.cate;
    axios.all([getCate(cate), getZS(), getContact()])
        .then(axios.spread(function (cate, zs, contact) {
            var data = {};
            data.curnav = 'contactus';
            data.zs = zs.data.response.data;
            data.cate = cate.data.response.data;
            data.contact = contact.data.response.data;
            res.render('contactus', data);
        }));
});

function getCate(cate) {
    var url = 'http://localhost:8080/yzx/col_findByCol?col.urlcode=' + cate;
    return axios.get(url);
}

function getZS() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=zpzs');
}

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;