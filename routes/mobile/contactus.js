var express = require('express');
var axios = require('axios');
var router = express.Router();
var navs = require('../../navs.json');

/* GET users listing. */
router.get('/:cate', function (req, res, next) {
    var cate = req.params.cate;
    axios.all([getContact()])
        .then(axios.spread(function (contact) {
            var data = {};
            data.cate = cate;
            data.navs = navs.contactus;
            data.contact = contact.data.response.data;
            res.render('mobile/contactus', data);
        }));
});

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;