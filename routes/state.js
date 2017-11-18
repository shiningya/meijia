var express = require('express');
var axios = require('axios');
var router = express.Router();
var catelog = require('../catelog.json');

/* GET users listing. */
router.get('/:cate', function (req, res, next) {
    var cate = req.params.cate;
    var curcate = catelog.state[cate];
    axios.all([getCate(cate)])
        .then(axios.spread(function (cate) {
            var data = {};
            data.curnav = 'state';
            data.curcate = curcate;
            data.cate = cate.data.response.data;
            res.render('state', data);
        }));
});

function getCate(cate) {
    var url = 'http://localhost:8080/yzx/col_findByCol?col.urlcode=' + cate;
    return axios.get(url);
}

module.exports = router;