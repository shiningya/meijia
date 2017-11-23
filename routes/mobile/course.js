var express = require('express');
var axios = require('axios');
var router = express.Router();
var navs = require('../../navs.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
    axios.all([getKC(), getContact()])
        .then(axios.spread(function (course, contact) {
            var data = {};
            data.navs = navs.course;
            data.course = course.data.response.data;
            data.contact = contact.data.response.data;
            res.render('mobile/course', data);
        }));
});

function getKC() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=jpkc');
}

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;