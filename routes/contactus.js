var express = require('express');
var axios = require('axios');
var router = express.Router();
var catelog = require('../catelog.json');

/* GET users listing. */
router.get('/:cate', function (req, res, next) {
    var cate = req.params.cate;
    var curcate = catelog.contactus[cate];
    axios.all([getContact()])
        .then(axios.spread(function (contact) {
            var data = {};
            data.curnav = 'contactus';
            data.curcate = curcate;
            data.contact = contact.data.response.data;
            res.render('contactus', data);
        }));
});

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;