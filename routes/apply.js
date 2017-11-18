var express = require('express');
var axios = require('axios');
var router = express.Router();
var catelog = require('../catelog.json');

/* GET users listing. */
router.get('/:cate', function(req, res, next) {
    var cate = req.params.cate;
    var curcate = catelog.aboutus[cate];
    axios.all([getCate(cate)])
        .then(axios.spread(function (cate) {
            var data = {};
            data.curnav = 'aboutus';
            data.curcate = curcate;
            data.cate = cate.data.response.data;
            res.render('aboutus', data);
        }));
});

function getCate(cate) {
    var url = 'http://localhost:8080/yzx/col_findByCol?col.urlcode=' + cate;
    return axios.get(url);
}

module.exports = router;