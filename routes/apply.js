var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    axios.all([getContact()])
        .then(axios.spread(function (contact) {
            var data = {};
            data.curnav = 'apply';
            data.contact = contact.data.response.data;
            res.render('apply', data);
        }));
});

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;