var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    axios.all([getZS(), getContact()])
        .then(axios.spread(function (zs, contact) {
            var data = {};
            data.curnav = 'apply';
            data.zs = zs.data.response.data;
            data.contact = contact.data.response.data;
            res.render('apply', data);
        }));
});

function getZS() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=zpzs');
}

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;