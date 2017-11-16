var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    axios.all([getSliders(), getKC(), getZS(), getHX(), getFC(), getQQ(), getContact()])
        .then(axios.spread(function (sliders, kc, zs, hx, fc, qq, contact) {
            var data = {};
            data.curnav = 'index';
            data.sliders = sliders.data.response.data;
            data.kc = kc.data.response.data;
            data.zs = zs.data.response.data;
            data.hx = hx.data.response.data;
            data.fc = fc.data.response.data;
            data.qq = qq.data.response.data;
            data.contact = contact.data.response.data;
            res.render('index', data);
        }));
});

function getSliders() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=lbt');
}

function getKC() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=jpkc');
}

function getZS() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=zpzs');
}

function getHX() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=kthx');
}

function getFC() {
    return axios.get('http://localhost:8080/yzx/col_findByCol?col.urlcode=xyfc');
}

function getQQ() {
    return axios.get('http://localhost:8080/yzx/contact_showqq');
}

function getContact() {
    return axios.get('http://localhost:8080/yzx/contact_showinfo');
}

module.exports = router;